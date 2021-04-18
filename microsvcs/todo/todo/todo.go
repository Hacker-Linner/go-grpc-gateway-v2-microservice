package todo

import (
	"context"
	"server/shared/auth"
	todopb "server/todo/api/gen/v1"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	Logger *zap.Logger
	todopb.UnimplementedTodoServiceServer
}

func (s *Service) CreateTodo(c context.Context, req *todopb.CreateTodoRequest) (*todopb.CreateTodoResponse, error) {
	// 确定是谁要创建这个 Todo？
	aid, err := auth.AcountIDFromContext(c)
	if err != nil {
		return nil, err
	}
	s.Logger.Info("create trip", zap.String("title", req.Title), zap.String("account_id", aid.String()))
	return nil, status.Error(codes.Unimplemented, "")
}
