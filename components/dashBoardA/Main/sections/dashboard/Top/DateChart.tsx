import type { NextPage } from 'next';
import styled from 'styled-components';

import 'regenerator-runtime';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useEffect } from 'react';

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const data = [
  {
    name: "11/01",
    decideCnt: 1759,
  },
  {
    name: "11/02",
    decideCnt: 2224,
  },
  {
    name: "11/03",
    decideCnt: 2248,
  },
  {
    name: "11/04",
    decideCnt: 2344,
  },
  {
    name: "11/05",
    decideCnt: 75,
  },
  {
    name: "11/06",
    decideCnt: 2666,
  },
  {
    name: "11/07",
    decideCnt: 1588,
  }
];

export default function Recharts() {
  return (
    <Wrapper>
      <LineChart
      width={800}
      height={237}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid 
        vertical={false}
        horizontal={false}/>
      <XAxis 
        dataKey="name"
        // tick == x축 눈금선 
        tickLine={false} />
      <YAxis 
        tickLine={false}
        tickCount={4}/>
      <Tooltip />
      {/* <Legend /> */}
      <Line
        activeDot={false}
        type="monotone"
        // dot == 도트 
        dot={false}
        // key 이름
        dataKey="decideCnt"
        stroke="#c3357c"
        // activeDot={{ r: 8 }}
      />
    </LineChart>  
    </Wrapper>
  );
}