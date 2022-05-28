require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain smile grace nation foster sense'; 
let testAccounts = [
"0x9f7c6ec0fdc1511afb014e44f976efc3dfd56d78c7d65c6cdc0b7b726fbeb983",
"0xa74d9ab2c86c324618e56525f1acc909d8c86bdaf6c2c7b3e799263a369d6bd2",
"0x5b39daec85aac80acab54d3777002fe365dbbb3c3925ba9dbe158294cd004b4a",
"0x590bae01f75d08ca7526c9eec29f81eb161c0e617802784623e91ac7ca52004b",
"0x113e0400c59f1f6444ff92b2e8afdd96dd64ee94e07a06ff4414e77d3682fff0",
"0xcf89db040cdff137decb33ef435aee9b17998726ba21216d2b42bec68dc23526",
"0xde68238f3350421bfcf47a16169a7140b24fe7bbc91e26a6c895136f141a4fa2",
"0x7a708518caeed408eafd7238ad6e1e14ad913d4a4c8b046c983c097f233691b9",
"0x3bbb00804f3698b6658994dfaf96af7576c75245e9ab420ef6d63e7747b243f1",
"0x1c24de4e1a6640fd536c997210bbb256223d686d430afc2daf6e3a5b14e524f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


