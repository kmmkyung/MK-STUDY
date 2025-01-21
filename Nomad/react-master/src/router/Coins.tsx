import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const CoinsList = styled.ul``;

const CoinItem = styled.li`
  background-color: #fff;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;

  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }

  &:hover{
    a{ color: ${props => props.theme.accentColor}}
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
  const [ coins, setCoins ] = useState<CoinInterface[]>([])

  useEffect(()=>{
    (async function(){
      const response = await fetch("https://api.coinpaprika.com/v1/coins")
      const json = await response.json();
      setCoins(json.slice(0,100))
    })()
  },[])

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map((coin)=>{ return (<CoinItem key={coin.id}>
            <Link to={`/${coin.id}`} state={{name:coin.name}}>
              <img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="coinImg"/>
            {coin.name} &rarr;</Link>
          </CoinItem>)
        })}
      </CoinsList>
    </Container>
  )
}


export default Coins;