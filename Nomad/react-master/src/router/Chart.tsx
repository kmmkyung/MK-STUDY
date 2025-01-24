import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchHistoryData } from "../api";
import  ReactApexChart from 'react-apexcharts'
import { useState } from "react";
import styled from "styled-components";
import { ApexOptions } from "apexcharts"

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

const ChartModeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ModeBtn = styled.button<{$chartMode:boolean}>`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg{
      fill: ${props => props.$chartMode ? props.theme.accentColor: props.theme.textColor};
  }
`;

const Message = styled.p`
  font-size: 14px;
  text-align: center;
`;

function Chart(){
  const [ chartMode, setChartMode ] = useState(true)
  const { coinId } = useOutletContext<{coinId: string}>();
  const { theme } = useOutletContext<{theme:string}>()
  const { isLoading , data , isError} = useQuery<HistoryInterface[]>({queryKey: ['history',coinId], queryFn: () => fetchHistoryData(coinId), retry: false, })
  
  const lineChartsSeries:ApexAxisChartSeries = [{
      name: 'Price',
      data: data?.map(price => Number(price.close)) ?? []
  }]

  const lineChartsOptions:ApexOptions = {
    chart:{
      height: 500,
      width: 500,
      toolbar:{show:false},
      background:'transparent'
    },
    theme: {
			mode: theme === "light" ? "light" : "dark",
		},
    stroke: {
      curve:'smooth',
      width: 3
    },
    grid: {show:false},
    yaxis: {show:true},
    xaxis: {
      type:'datetime',
      axisTicks: {show:false},
      categories: data?.map(price => price.time_close*1000),
      axisBorder: {show:false},
    },
    fill:{type: 'gradient', gradient:{gradientToColors: ['teal'], stops:[0, 100]}},
    colors:['lightblue'],
    tooltip: {
      enabled: true,
      y:{formatter:(value:number)=> '$'+value.toFixed(2) },
      custom: undefined
    }
  }

  const candleChartsSeries:ApexAxisChartSeries = [{
    data: data?.map(price => ({x: (price.time_close*1000), y:[Number(price.open),Number(price.high),Number(price.low),Number(price.close)]})) ?? []
  }]

  const candleChartsOptions:ApexOptions = {
    chart: {
      height: 500,
      width: 500,
      toolbar:{show:false},
      background:'transparent'
    },
    theme: {
			mode: theme === "light" ? "light" : "dark",
		},
    yaxis: {show:true},
    xaxis: {
      type: 'datetime',
      axisTicks: {show:true},
      axisBorder: {show:true},
      categories: data ? data.map((price) => price.time_close * 1000) : [],
    },
    fill:{type: 'solid', opacity: 1},
    tooltip: {
      enabled: true,
      y: {formatter: undefined },
      custom: ({ seriesIndex, dataPointIndex, w }) => {
      const open = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
      const high = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
      const low = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
      const close = w.globals.seriesCandleC[seriesIndex][dataPointIndex];      
      return `
        <div style="padding: 10px;">
          <p><strong>Open:</strong> $${open.toFixed(0)}</p>
          <p><strong>High:</strong> $${high.toFixed(0)}</p>
          <p><strong>Low:</strong> $${low.toFixed(0)}</p>
          <p><strong>Close:</strong> $${close.toFixed(0)}</p>
        </div>`;
    },
    }
  }

  return (
    isLoading ? (
      <Message>Loading...</Message>
    ) : (
      <>
        <ChartModeBtn>
          <ModeBtn $chartMode={chartMode} onClick={() => setChartMode(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
              <path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" />
            </svg>
          </ModeBtn>
          <ModeBtn $chartMode={!chartMode} onClick={() => setChartMode(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
              <path d="M120-160v-240h120v240H120Zm200-240v-200h120v200H320Zm200-200v-200h120v200H520Zm200 440v-640h120v640H720Z" />
            </svg>
          </ModeBtn>
        </ChartModeBtn>
        {isError ? (
          <Message>데이터가 없습니다</Message>
        ) : (
          <ReactApexChart
            options={chartMode ? lineChartsOptions : candleChartsOptions}
            series={chartMode ? lineChartsSeries : candleChartsSeries}
            type={chartMode ? 'line' : 'candlestick'}
          />
        )}
      </>
    )
  );
  
}

export default Chart;