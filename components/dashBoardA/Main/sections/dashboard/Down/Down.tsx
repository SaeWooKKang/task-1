import type { NextPage } from 'next';
import styled from 'styled-components';
import GenderChart from './GenderChart';
import AgeChart from './AgeChart';
import Header from './Header';

const Wrapper = styled.div`
  width: 100%;
  height: 515px;
  
  .container {
    display: flex;

    .age-chart {
      width: 583px;
      height:515px;

      .name {
        width: 100%;
        height: 52px;
      }
    }
    .gender-chart {
      width: 582px;
      height:515px;

      .name {
        width: 100%;
        height: 52px;
      }
    }

    .vertical-horizon {
      position: absolute;
      bottom: 295px;
      left: 365px;
      width: 433px;
      margin: 0; 
      border: 0.5px solid rgba(204, 204, 204, 0.5);
      transform: rotate(90deg);
    }
  }
`;

const GenderChartWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 463px;
`;

const Hr = styled.div`
  width: 100%;
  margin: 0; 
  border: 0.5px solid rgba(204, 204, 204, 0.5);
`;

const Down = () => {

  return (
    <Wrapper>
      <Hr />
      
      <div className='container'>
        <div className='age-chart'>
          <Header >
            <>
              일자별 연령대 확진자 수
            </>
          </Header>

          <Hr />
          
          <AgeChart />
        
        </div>

        <div className='gender-chart'>
          <Header>
            <>
              일자별 성별 확진자 수
            </>
          </Header>

          <Hr />

          <GenderChartWrapper>
            <GenderChart />
          </GenderChartWrapper>

        </div>
        <hr className='vertical-horizon' />
      </div>
    </Wrapper>
  );
};

export default Down;