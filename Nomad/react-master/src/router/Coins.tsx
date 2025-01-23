import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

interface CoinInterface {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null
  last_updated: string;
}

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 480px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinsList = styled.ul`
`;

const CoinItem = styled.li`
  background-color: #fff;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a, span {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }

  &:hover{
    a, span{ color: ${props => props.theme.accentColor}}
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.div`
  text-align: center;
`;

function Coins(){
  const {isLoading, data} = useQuery<CoinInterface[]>({ queryKey:['allCoins'], queryFn: fetchCoins})

  return (
    <Container>
      <title>Coin</title>
      <link rel="icon" href='favicon.png' />
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : 
      (<CoinsList>
        {data?.map((coin)=>{ return (<CoinItem key={coin.id}>
            <Link to={`/${coin.id}`} state={{name:coin.name, id:coin.id}}>
              <img src={coin.image} alt="coinImg"/>
            {coin.name}</Link>
            <span>&rarr;</span>
          </CoinItem>)
        })}
      </CoinsList>)}
    </Container>
  )
}


export default Coins;