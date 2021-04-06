package wechat

import (
	"fmt"

	weapp "github.com/medivhzhan/weapp/v2"
)

// Service implements a wechat auth service
type Service struct {
	AppID     string
	AppSecret string
}

// Resolve resolves authorization code to wechat open id.
func (s *Service) Resolve(code string) (string, error) {
	resp, err := weapp.Login(s.AppID, s.AppSecret, code)
	if err != nil {
		return "", fmt.Errorf("weapp.Login: %v", err)
	}

	if err = resp.GetResponseError(); err != nil {
		return "", fmt.Errorf("weapp response error: %v", err)
	}

	return resp.OpenID, nil
}
