import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
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
  background-color: ${props => props.theme.boxColor};
  color: ${props => props.theme.textColor};
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
  const {isLoading, data} = useQuery<CoinInterface[]>({
    queryKey: ['allCoins'], queryFn: fetchCoins, select:(data)=>data.slice(0,100)
  })
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
          <Link to={`/${coin.id}`} state={{name:coin.name}}>
            <img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="coinImg"/>
          {coin.name}</Link>
          <span>&rarr;</span>
        </CoinItem>)
        })}
      </CoinsList>)}
    </Container>
  )
}


export default Coins;