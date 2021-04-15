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

func TestVerify(t *testing.T) {
	pkFile, err := os.Open("../../../auth/public.key")
	if err != nil {
		logger.Fatal("cannot open public key", zap.Error(err))
	}
	pkBytes, err := ioutil.ReadAll(pkFile)
	if err != nil {
		logger.Fatal("cannot read public key", zap.Error(err))
	}
	pubKey, err := jwt.ParseRSAPublicKeyFromPEM([]byte(pkBytes))
	if err != nil {
		t.Fatalf("cannot parse public key: %v", err)
	}

	v := &JWTTokenVerifier{
		PublicKey: pubKey,
	}

	cases := []struct {
		name    string
		tkn     string
		now     time.Time
		want    string
		wantErr bool
	}{
		{
			name: "valid_token",
			tkn:  "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9hdXRoIiwic3ViIjoiNjA3MjY2YWE1MTJlMDA2ZDU4Yjc5ZDIyIn0.W1tkiBd3N-U3RM9b6OENFhYq9tp5PGjb2_V9nm1QvsjvCmmF5t2yyv70EkntPpIl5GErxZQd73zDSCQ0BSHHFOPmNYvUVar85DJS6KnvOTOIPmWrRkYmZqMAcWI4p9ifmh5X0J6KXkHrBgBqlcl_foU1xdt7M-VGl7BGZb8jMNCmAZYjOzpZeNFPt2fOX4JT1Vlhi02zpfSu0GRcxZvDmyqloTaGinUEL2rELIH53x05HhAbqPf_vuK2vjAIInKJQKd_ARhTM9xYDS3p0QBqsOsFJL8tRj5EY60NGROoZtCRPWbd2B757kUv5hsx72AF7PTvY0P_bRK6npG1PoPl2g",
			now:  time.Unix(1516239122, 0),
			want: "607266aa512e006d58b79d22",
		},
		{
			name:    "token_expired",
			tkn:     "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9hdXRoIiwic3ViIjoiNjA3MjY2YWE1MTJlMDA2ZDU4Yjc5ZDIyIn0.W1tkiBd3N-U3RM9b6OENFhYq9tp5PGjb2_V9nm1QvsjvCmmF5t2yyv70EkntPpIl5GErxZQd73zDSCQ0BSHHFOPmNYvUVar85DJS6KnvOTOIPmWrRkYmZqMAcWI4p9ifmh5X0J6KXkHrBgBqlcl_foU1xdt7M-VGl7BGZb8jMNCmAZYjOzpZeNFPt2fOX4JT1Vlhi02zpfSu0GRcxZvDmyqloTaGinUEL2rELIH53x05HhAbqPf_vuK2vjAIInKJQKd_ARhTM9xYDS3p0QBqsOsFJL8tRj5EY60NGROoZtCRPWbd2B757kUv5hsx72AF7PTvY0P_bRK6npG1PoPl2g",
			now:     time.Unix(1517239122, 0),
			wantErr: true,
		},
		{
			name:    "bad_token",
			tkn:     "bad_token",
			now:     time.Unix(1517239122, 0),
			wantErr: true,
		},
		{
			name:    "wrong_signature",
			tkn:     "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9hdXRoIiwic3ViIjoiNjA3MjY2YWE1MTJlMDA2ZDU4Yjc5ZDIzIn0.W1tkiBd3N-U3RM9b6OENFhYq9tp5PGjb2_V9nm1QvsjvCmmF5t2yyv70EkntPpIl5GErxZQd73zDSCQ0BSHHFOPmNYvUVar85DJS6KnvOTOIPmWrRkYmZqMAcWI4p9ifmh5X0J6KXkHrBgBqlcl_foU1xdt7M-VGl7BGZb8jMNCmAZYjOzpZeNFPt2fOX4JT1Vlhi02zpfSu0GRcxZvDmyqloTaGinUEL2rELIH53x05HhAbqPf_vuK2vjAIInKJQKd_ARhTM9xYDS3p0QBqsOsFJL8tRj5EY60NGROoZtCRPWbd2B757kUv5hsx72AF7PTvY0P_bRK6npG1PoPl2g",
			now:     time.Unix(1516239122, 0),
			wantErr: true,
		},
	}

	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			jwt.TimeFunc = func() time.Time {
				return c.now
			}

			accountID, err := v.Verify(c.tkn)

			if !c.wantErr && err != nil {
				t.Errorf("verification failed: %v", err)
			}

			if c.wantErr && err == nil {
				t.Errorf("want error; got no error")
			}

			if accountID != c.want {
				t.Errorf("wrong account id. want: %q, got: %q", c.want, accountID)
			}
		})
	}
}
