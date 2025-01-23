import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchHistoryData } from "../api";
import ApexCharts from 'apexcharts'

interface HistoryInterface {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart(){
  const coinId:string = useOutletContext()
  const { isLoading:historyLoading, data:historyData } = useQuery<HistoryInterface[]>({queryKey: ['history',coinId], queryFn: () => fetchHistoryData(coinId)})
  return (
    <>{coinId}</>                                                                   
  )
}

export default Chart;