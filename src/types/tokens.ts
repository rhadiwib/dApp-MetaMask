export interface TokenData {
    name: string;
    symbol: string;
    last_price: number;
    maker_fee: number;
    taker_fee: number;
    address?: string; // object key from the json Api response
  }
  
  export interface TokensResponse {
    [address: string]: TokenData;
  }