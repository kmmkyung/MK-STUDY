import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { PriceDataInterface } from "./Coin";

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const PriceInfo = styled.div`
    background-color: ${props => props.theme.boxColor};;
    padding: 10px 20px;
    border-radius: 10px;
    text-align: center;

    span {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 5px;
    }
    p{
      margin-top: 10px;
      font-size: 20px;

      span{
        font-size: 10px;
        margin-left: 10px;
      }
    }
`;

function Price(){
  const { tickersData } = useOutletContext<{tickersData:PriceDataInterface}>()
  const ath = tickersData?.quotes.USD.percent_from_price_ath;
  const change30m = tickersData?.quotes.USD.percent_change_30m;
  const change1h = tickersData?.quotes.USD.percent_change_1h;
  const change24h = tickersData?.quotes.USD.percent_change_24h;
  const change7d = tickersData?.quotes.USD.percent_change_7d;
  
  function numberChange(num:number){
    const color = num >= 0 ? 'salmon' : 'skyblue';
    return (<p style={{ color }}>
      {num >= 0 ? `+${num}%` : `-${num}%`}
    <span>
      {num >= 0 ? '↗' : '↘'}
    </span>
  </p>)
  }

  return (
    <>
      <PriceBox>
        <PriceInfo >
          <span>최고가와 현재 시세 차이</span>
          {numberChange(ath)}
        </PriceInfo>
        <PriceInfo>
          <span>30분전 시세</span>
          {numberChange(change30m)}
        </PriceInfo>
        <PriceInfo>
          <span>1시간전 시세</span>
          {numberChange(change1h)}
        </PriceInfo>
        <PriceInfo>
          <span>1일전 시세</span>
          {numberChange(change24h)}
        </PriceInfo>
        <PriceInfo>
          <span>1주일전 시세</span>
          {numberChange(change7d)}
        </PriceInfo>
      </PriceBox>
    </>
  )
}

export default Price;