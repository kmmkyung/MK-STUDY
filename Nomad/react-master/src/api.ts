const BASE_URL = 'https://api.coingecko.com/api/v3'
const API_KEY = 'CG-KHC7KhWMBe3J6npQFgsYubPp'

export async function fetchCoins(){
  const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&per_page=80&x_cg_demo_api_key=${API_KEY}`)
  return response.json();
}

export async function fetchInfoData(coinId: string){
  const response = await (await fetch(`${BASE_URL}/coins/${coinId}?localization=false&x_cg_demo_api_key=${API_KEY}`)).json();
  return response;
}
export async function fetchPriceData(coinId: string){
  const response = await (await fetch(`${BASE_URL}/coins/${coinId}/tickers?x_cg_demo_api_key=${API_KEY}`)).json();
  return response;
}

export async function fetchHistoryData(coinId: string){
  const response = await (await fetch(`${BASE_URL}/coins/${coinId}/ohlc?s_currency=usd&days=14&x_cg_demo_api_key=${API_KEY}`)).json();
  return response;
}
