import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC = 56,
    SEPOLIA=11155111
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}

const init_hash_721 = (chainId) => {
  const hash = {
    [56]: '',
    [4]: '0x5ec183c910dde62b453e2ec8cccc3e2e88361521812cd72a9225360027ece5ae',
    [5]: '0x0c1c6aa59d5605cb5e03b2231bdcf0f5aac2ee335d521e7780d25cdb5bfcae07',
    [11155111]: '0x5acff355a68640e94260f0b7e504e22ab80d937541341ce2e1a48a3a55d4d106'
  }
  return hash[chainId] ? hash[chainId] : hash[5]
}
  
const init_hash = (chainId) => {
  const hash = {
    [56]: '0x9ec8c8ff3b18dfb14fac50eaf8f1f0222c424b82ab776a7b394271de4c1a8e9f',
    [4]: '0x7842a3ea267789f9cac67fced95cf3f35c1f5f518317922ae0e6889f2e088f0b',
    [5]: '0x340b5d80515b108122de5e560de62961080d006845634656ff84db6d94c7d069',
    [11155111]: '0x340b5d80515b108122de5e560de62961080d006845634656ff84db6d94c7d069'
  }
  return hash[chainId] ? hash[chainId] : hash[5]
}
  
const factory_addresses721 = (chainId) => {
  const addresses = {
    [56]: '',
    [4]: '0x50A180230A11734FFD1A9A55e80c442387d42931',
    [5]: '0xfE354EA7a06f6dBDEF06F087C4Be5A6d4E021442',
    [11155111]: '0x09B78CACaCC648d821924656b87D5FD2eb05E20d'
  }
  return addresses[chainId] ? addresses[chainId] : addresses[5]
}
  
const factory_addresses = (chainId) => {
  const addresses = {
    [56]: '0xa1bf45AF7cDe8c105054611383E8ae3dA65615a3',
    [4]: '0xB4AA7ce0558A8EbfC943928d6F3E5ceCc1650a46',
    [5]: '0x075333bF761555D28D78E40232ABdC548083C3D7',
    [11155111]: '0x83b115AdC58A951B77cD249b41977B2Fd1f13772'
  }
  return addresses[chainId] ? addresses[chainId] : addresses[5]
}
  
export declare const FACTORY_ADDRESS =(chainId, is721Pair) => is721Pair ? factory_addresses721(chainId) : factory_addresses(chainId);
export declare const INIT_CODE_HASH =  (chainId, is721Pair) => is721Pair ? init_hash_721(chainId) : init_hash(chainId);
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
