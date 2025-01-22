import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams, Outlet, Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { fetchInfoData, fetchPriceData } from "../api";

interface InfoDataInterface {
  id : string;
  name : string;
  symbol : string;
  rank : number;
  is_new : boolean;
  is_active : boolean;
  type : string;
  logo : string;
  description : string;
  message : string;
  open_source : boolean;
  started_at : string;
  development_status : string;
  hardware_wallet : boolean;
  proof_type : string;
  org_structure : string;
  hash_algorithm : string;
  first_data_at : string;
  last_data_at : string;
}

interface PriceDataInterface {
id : string ;
name : string ;
symbol : string ;
rank : number ;
total_supply : number ;
max_supply : number ;
beta_value : number ;
first_data_at : string ;
last_updated : string ;
quotes : {
  USD :{ 
    ath_date : string;
    ath_price : number;
    market_cap : number;
    market_cap_change_24h : number;
    percent_change_1h : number;
    percent_change_1y : number;
    percent_change_6h : number;
    percent_change_7d : number;
    percent_change_12h : number;
    percent_change_15m : number;
    percent_change_24h : number;
    percent_change_30d : number;
    percent_change_30m : number;
    percent_from_price_ath : number;
    price : number;
    volume_24h : number;
    volume_24h_change_24h : number;
    }
  }
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

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.div`
  margin: 20px 0;
`;

const TabList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const TabItem = styled.span<{isActive:boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  background-color: rgba(0,0,0,0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props => props.isActive ? props.theme.accentColor : props.theme.textcolor};
  a {
    display: block;
  }
`;


function Coin(){
  const { coinId } = useParams() as {coinId:string};
  const location = useLocation();
  const state = location.state as {name:string};
  const { isLoading:infoLoading, data:infoData } = useQuery<InfoDataInterface>({queryKey:['info',coinId], queryFn:()=>fetchInfoData(coinId)})
  const { isLoading:tickersLoading, data:tickersData } = useQuery<PriceDataInterface>({queryKey:['tickers',coinId], queryFn: ()=> fetchPriceData(coinId)})
  const priceMatch = useMatch('/:coinId/price')
  const chartMatch = useMatch('/:coinId/chart')
  const loading = infoLoading|| tickersLoading;
  return (
    <Container>
      <Header>
        <Title>{state?.name ? state.name : loading ? 'Loading' : infoData?.name}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> :
      (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes":"No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          
          <TabList>
            <TabItem isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </TabItem>
            <TabItem isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </TabItem>
          </TabList>
          <Outlet/>
        </>
      )
      }
    </Container>

  )
}

export default Coin;