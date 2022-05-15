import type { NextPage } from 'next';
import styled from 'styled-components';
import GenderChart from './GenderChart';
import AgeChart from './AgeChart';


const Wrapper = styled.div`
  width: 100%;
  height: 515px;
  background-color: #cad7ad;
  
  .container {
    display: flex;

    .age-chart {
      width: 583px;
      height:515px;
      background-color: #9897db;

      .name {
        width: 100%;
        height: 52px;
        background-color: #ab9e87;
      }
    }
    .gender-chart {
      width: 582px;
      height:515px;
      background-color: #80809a;

      .name {
        width: 100%;
        height: 52px;
        background-color: #907e5f;
      }
    }
  }
`;

const Down = () => {

  return (
    <Wrapper>
      
      <div className='container'>
        <div className='age-chart'>
          <div className='name'>
            일자별 연령대 확진자 수 
          </div> 
          <div>chart 자리</div>
        </div>

        <div className='gender-chart'>
          <div className='name'>
            일자별 성별 확진자 수
          </div>
          <div>chart 자리</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Down;