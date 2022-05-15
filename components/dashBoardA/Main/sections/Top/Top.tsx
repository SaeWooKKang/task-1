import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from './Header';
import DateChart from './DateChart';

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 462px;
  
  background-color: #f0ba57;
`;

const Top = () => {
  return (
    <Wrapper>
      <Header />
      
      <DateChart />
    </Wrapper>
  );
};

export default Top;