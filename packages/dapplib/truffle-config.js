require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strong dash ticket unable hunt immense army genuine'; 
let testAccounts = [
"0xc5dc78c537fa7315aab4f9217bd156fcf00b3ef4fcaf6d1d5d171724a8ee0c46",
"0x779547ac69d4589eab372461a035c7600abf66e0e0edd09ef77ac190dc4fb196",
"0xfe547cbefd4c7cce69ea50e887a10b13925f0ce435934a95ec8fb5dabac831a6",
"0xdc529fd11e6c26ed32c526d7723a4a9e37e2dc5199ac544ef404869f0deff48d",
"0xc811a221ac3ee609a4791b468a07fe0b1dbda77239b180d6c4b9fb4f3cc869af",
"0x13e5b27e203bdc113adc4b29650f728bec59fa66fd3c5f09dc7f7bf41a224851",
"0x95c2c71e156a8b5183b967c4c613c7b19a4888fb2a99c6aacc97cc2d5f327406",
"0x5ce03708eb727b56a4ae610e609598084e66902f6a579e08e209253264e45f4f",
"0x7d8676a102f997591afc0aacc20db4bdaac470d7d3eacbba3485131521abb070",
"0xe4dec27c27204de0195de987210ee8e2b3f5a6c6a183d6c274b458379c02161d"
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


