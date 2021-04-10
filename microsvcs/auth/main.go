package main

import (
	"context"
	"log"
	"net"
	authpb "server/auth/api/gen/v1"
	"server/auth/auth"
	"server/auth/wechat"
	"server/dao"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

func main() {
	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatalf("cannot create logger: %v", err)
	}

	lis, err := net.Listen("tcp", ":8081")
	if err != nil {
		logger.Fatal("cannot listen", zap.Error(err))
	}

	c := context.Background()
	mongoClient, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://example:example@localhost:27017/?authSource=admin&readPreference=primary&ssl=false"))
	if err != nil {
		logger.Fatal("cannot connect mongodb", zap.Error(err))
	}

	s := grpc.NewServer()
	authpb.RegisterAuthServiceServer(s, &auth.Service{
		OpenIDResolver: &wechat.Service{
			AppID:     "your-app-id",
			AppSecret: "your-app-secret",
		},
		Mongo:  dao.NewMongo(mongoClient.Database("grpc-gateway-auth")),
		Logger: logger,
	})
	err = s.Serve(lis)
	logger.Fatal("cannot server", zap.Error(err))
}
