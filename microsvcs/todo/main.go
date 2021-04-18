package main

import (
	"log"
	"server/shared/server"
	todopb "server/todo/api/gen/v1"
	"server/todo/todo"

	"go.uber.org/zap"
	"google.golang.org/grpc"
)

func main() {
	logger, err := zap.NewDevelopment()
	if err != nil {
		log.Fatalf("cannot create logger: %v", err)
	}

	logger.Sugar().Fatal(
		server.RunGRPCServer(&server.GRPCConfig{
			Name:              "todo",
			Addr:              ":8082",
			AuthPublicKeyFile: "shared/auth/public.key",
			Logger:            logger,
			RegisterFunc: func(s *grpc.Server) {
				todopb.RegisterTodoServiceServer(s, &todo.Service{
					Logger: logger,
				})
			},
		}),
	)
}
