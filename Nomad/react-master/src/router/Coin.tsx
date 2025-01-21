import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

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

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`;

function Coin(){
  const { coinId } = useParams<{coinId:string}>();
  const location = useLocation();
  const state = location.state as {name:string};
  const [ info, setInfo ] = useState({});
  const [ price, setPrice ] = useState({});

  useEffect(()=>{
    (async function(){
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
      setInfo(infoData)

      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
      setPrice(priceData)
    })()
  },[])

  return (
    <Container>
      <Header>
        <Title>{state?.name}</Title>
      </Header>
    </Container>
  )
}

export default Coin;