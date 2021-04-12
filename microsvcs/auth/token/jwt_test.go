package token

import (
	"io/ioutil"
	"os"
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/google/logger"
	"go.uber.org/zap"
)

func TestGenerateToken(t *testing.T) {
	pkFile, err := os.Open("../private.key")
	if err != nil {
		logger.Fatal("cannot open private key", zap.Error(err))
	}
	pkBytes, err := ioutil.ReadAll(pkFile)
	if err != nil {
		logger.Fatal("cannot read private key", zap.Error(err))
	}
	key, err := jwt.ParseRSAPrivateKeyFromPEM(pkBytes)
	if err != nil {
		logger.Fatal("cannot parse private key", zap.Error(err))
	}
	g := NewJWTTokenGen("server/auth", key)
	g.nowFunc = func() time.Time {
		return time.Unix(1516239022, 0)
	}
	tkn, err := g.GenerateToken("607266aa512e006d58b79d22", 2*time.Hour)
	if err != nil {
		t.Errorf("cannot generate token: %v", err)
	}

	want := "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoic2VydmVyL2F1dGgiLCJzdWIiOiI2MDcyNjZhYTUxMmUwMDZkNThiNzlkMjIifQ.nwhaGZ0dozftexVfr9KM9ZVAzsPudhLs-n-yyrrjkbFTYA69rsEd35M0vc1gJ1DNMJk_v-1yUhkgRpxzP2Jiy1Lw8fqIlAk8l9EpDE77oJ9Dal6Rl26GERYZOkCvbq02fKSVj4drlSr75fIce9EnQq2xIVyvvNNty-QvHXTX29QQv-6c8vVYIrCFxtooARN9p8OSpg0hzc-YzsXo64lbUvbLIws27TJNwhctbqrOYQuX9XU3UhJ4Ik0Yt2cLc4LjuqI52Grvf89mJMmM5jnHQv0tKI2guvxNwlC3WN50dCIcuo1zjO-_eSje5OvqP7FKR1eSwnEcZiZQ8qwDDGi8pA"

	if tkn != want {
		t.Errorf("wrong token generated. want: %q, got: %q", want, tkn)
	}
}
