import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchHistoryData } from "../api";
import ApexCharts from 'react-apexcharts'

interface HistoryInterface {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
function Chart(){
  const coinId:string = useOutletContext()
  const { isLoading, data } = useQuery<HistoryInterface[]>({queryKey: ['history',coinId], queryFn: () => fetchHistoryData(coinId)})
  return (
    <>
    {isLoading? 'Loading chart...' :
    <ApexCharts type="line" series={[{name:'Price', data:data?.map(price => Number(price.close))as number[]}]}
    options={{theme:{mode:'dark'}, chart:{height:500, width:500, toolbar:{show:false}, background:'transparent'}, stroke:{curve:'smooth', width: 3}, grid:{show:false}, yaxis:{show:false}, xaxis:{labels:{show:false}, axisTicks:{show:false}, axisBorder:{show:false}, type:'datetime', categories: data?.map(price => price.time_close)}, fill:{type: 'gradient', gradient:{gradientToColors: ['teal'], stops:[0, 100]}}, colors:['lightblue'], tooltip: { y:{formatter:(value)=> '$'+value.toFixed(2) }}
    }}/>}
    </>                                                                   
  )
}

export default Chart;