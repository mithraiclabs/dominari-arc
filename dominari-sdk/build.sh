sh bundler.sh
sh nodejs.sh

SED_REMOVE_INVALID_REFERENCE="/wasm.__wbg_systeminstruction_free(ptr);$/d"
cd ./dominari-sdk-bundler || exit
sed -i "" -e "$SED_REMOVE_INVALID_REFERENCE" dominari_sdk_bg.js