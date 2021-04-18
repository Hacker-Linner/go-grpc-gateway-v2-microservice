function gen {
  SVCS=$1
  PROTO_PATH=./${SVCS}/api
  GO_OUT_PATH=./${SVCS}/api/gen/v1
  mkdir -p ${GO_OUT_PATH}

  protoc -I=$PROTO_PATH --go_out=paths=source_relative:$GO_OUT_PATH ${SVCS}.proto
  protoc -I=$PROTO_PATH --go-grpc_out=paths=source_relative:$GO_OUT_PATH ${SVCS}.proto
  protoc -I=$PROTO_PATH --grpc-gateway_out=paths=source_relative,grpc_api_configuration=$PROTO_PATH/${SVCS}.yaml:$GO_OUT_PATH ${SVCS}.proto
}
gen auth
gen todo