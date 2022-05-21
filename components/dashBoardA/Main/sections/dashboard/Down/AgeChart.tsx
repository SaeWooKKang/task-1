import type { NextPage } from 'next';
import styled from 'styled-components';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid, Legend } from 'recharts';

const data = [
  { name: '11/01', '0-9': 12, '10-19': 23, '20-29': 80 },
  { name: '11/02', '0-9': 22, '10-19': 3, '20-29': 73 },
  { name: '11/03', '0-9': 13, '10-19': 15, '20-29': 32 },
  { name: '11/04', '0-9': 44, '10-19': 35, '20-29': 23 },
  { name: '11/05', '0-9': 35, '10-19': 45, '20-29': 20 },
];

const AgeChart = () => {
  return (
		<BarChart 
      // layout='vertical'
      width={358}
      height={249}
      data={data} 
      margin={{
        // top: 10,
        right: 10,
        // left: 20,
        // bottom: 5
      }}
    >
      <Legend 
        verticalAlign="bottom"
        align='center' />
			<CartesianGrid vertical={false} />
			<XAxis dataKey="name" tickLine={false}/>
			<YAxis tickLine={false}/>
			<Bar dataKey="0-9" stackId="a" fill="#8884d8" />
			<Bar dataKey="10-19" stackId="a" fill="#82ca9d" />
			<Bar dataKey="20-29" stackId="a" fill="#ca82a1" />
		</BarChart>
  );
}

export default AgeChart;