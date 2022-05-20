import type { NextPage } from 'next';
import styled from 'styled-components';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const data02 = [
  {
    "gender": "male",
    "confCase": 10000,
    "colors": "#5173e3", 
  },
  {
    "gender": "female",
    "confCase": 30000,
    "colors": "#e34e53", 
  },
];

const GenderChart = () => {
  return (
    <PieChart width={730} height={250}>
      <Pie 
        data={data02}
        dataKey="confCase"
        nameKey="gender"

        // 중앙 정렬
        cx="50%" 
        cy="50%"

        innerRadius={30}

        // fill="#37bd6a" 
        // label
        isAnimationActive={false}
        >
          {
            data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.colors} />
            ))
          }
        </Pie>
        <Legend />
    </PieChart>
  );
};

export default GenderChart;