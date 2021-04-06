package auth

import (
	"context"
	authpb "server/auth/api/gen/v1"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// Service implements auth service
type Service struct {
	Logger         *zap.Logger
	OpenIDResolver OpenIDResolver
	authpb.UnimplementedAuthServiceServer
}

// OpenIDResolver resolvers an authorization code
// to an open id
type OpenIDResolver interface {
	Resolve(code string) (string, error)
}

// Login logs a use in
func (s *Service) Login(c context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	s.Logger.Info("received code",
		zap.String("code", req.Code))

	openID, err := s.OpenIDResolver.Resolve(req.Code)
	if err != nil {
		return nil, status.Errorf(codes.Unavailable,
			"cannot resolve openid: %v", err)
	}
	return &authpb.LoginResponse{
		AccessToken: "token for open id " + openID,
		ExpiresIn:   7200,
	}, nil
}
