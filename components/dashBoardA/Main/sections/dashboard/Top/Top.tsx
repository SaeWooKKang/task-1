import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from './Header';
import DateChart from './DateChart';

const Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 462px;

  .container-chart {
    width: 100%;
    height: 394px;
  }
`;

const Hr = styled.div`
  width: 100%;
  margin: 0; 
  border: 0.5px solid rgba(204, 204, 204, 0.5);
`;

const Top = () => {
  return (
    <>
      <Wrapper>
        <Header />

        <Hr />

        <div className='container-chart'>
          <DateChart /> 
        </div>
      </Wrapper>

    </>
  );
};

export default Top;