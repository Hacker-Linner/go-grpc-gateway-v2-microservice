package main

import (
	"context"
	"io/ioutil"
	"log"
	"os"
	authpb "server/auth/api/gen/v1"
	"server/auth/auth"
	"server/auth/token"
	"server/auth/wechat"
	"server/dao"
	"server/shared/server"
	"time"

	"github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

func main() {
	// logger
	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatalf("cannot create logger: %v", err)
	}

	// mongo
	c := context.Background()
	mongoClient, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://localhost:27017/?readPreference=primary&appname=mongodb-vscode%200.5.0&ssl=false"))
	if err != nil {
		logger.Fatal("cannot connect mongodb", zap.Error(err))
	}

	// private.key
	pkFile, err := os.Open("auth/private.key")
	if err != nil {
		logger.Fatal("cannot open private key", zap.Error(err))
	}

	pkBytes, err := ioutil.ReadAll(pkFile)
	if err != nil {
		logger.Fatal("cannot read private key", zap.Error(err))
	}

	privKey, err := jwt.ParseRSAPrivateKeyFromPEM(pkBytes)
	if err != nil {
		logger.Fatal("cannot parse private key", zap.Error(err))
	}

	// RunGRPCServer
	logger.Sugar().Fatal(
		server.RunGRPCServer(&server.GRPCConfig{
			Name:   "auth",
			Addr:   ":8081",
			Logger: logger,
			RegisterFunc: func(s *grpc.Server) {
				authpb.RegisterAuthServiceServer(s, &auth.Service{
					OpenIDResolver: &wechat.Service{
						AppID:     "your-appid",
						AppSecret: "your-appsecret",
					},
					Mongo:          dao.NewMongo(mongoClient.Database("grpc-gateway-auth")),
					Logger:         logger,
					TokenExpire:    2 * time.Hour,
					TokenGenerator: token.NewJWTTokenGen("server/auth", privKey),
				})
			},
		}),
	)
}
