function gen {
  SVCS=$1
  PROTO_PATH=../microsvcs/${SVCS}/api
  PBTS_BIN_DIR=./node_modules/.bin
  PBTS_OUT_DIR=./miniprogram/service/proto_gen/${SVCS}
  mkdir -p $PBTS_OUT_DIR

  $PBTS_BIN_DIR/pbjs -t static -w es6 $PROTO_PATH/${SVCS}.proto --no-create --no-encode --no-decode --no-verify --no-delimited -o $PBTS_OUT_DIR/${SVCS}_pb_tmp.js
  echo 'import * as $protobuf from "protobufjs";\n' > $PBTS_OUT_DIR/${SVCS}_pb.js
  cat $PBTS_OUT_DIR/${SVCS}_pb_tmp.js >> $PBTS_OUT_DIR/${SVCS}_pb.js
  rm $PBTS_OUT_DIR/${SVCS}_pb_tmp.js
  $PBTS_BIN_DIR/pbts -o $PBTS_OUT_DIR/${SVCS}_pb.d.ts $PBTS_OUT_DIR/${SVCS}_pb.js
}
gen auth
gen todo