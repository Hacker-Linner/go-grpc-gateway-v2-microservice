PROTO_PATH=./auth/api
GO_OUT_PATH=./auth/api/gen/v1

protoc -I=$PROTO_PATH --go_out=paths=source_relative:$GO_OUT_PATH auth.proto
protoc -I=$PROTO_PATH --go-grpc_out=paths=source_relative:$GO_OUT_PATH auth.proto
protoc -I=$PROTO_PATH --grpc-gateway_out=paths=source_relative,grpc_api_configuration=$PROTO_PATH/auth.yaml:$GO_OUT_PATH auth.proto