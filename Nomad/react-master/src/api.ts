const BASE_URL = 'https://api.coinpaprika.com/v1'

export async function fetchCoins(){
  const response = await fetch(`${BASE_URL}/coins`)
  return response.json();
}

export async function fetchInfoData(coinId: string){
  const response = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return response;
}

export async function fetchPriceData(coinId: string){
  const response = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  return response;
}
export async function fetchHistoryData(coinId: string){
  const response = await (await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)).json();
  return response;
}