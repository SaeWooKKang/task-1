import type { NextPage } from 'next';
import styled from 'styled-components';
import GenderChart from './GenderChart';
import AgeChart from './AgeChart';
import Header from './Header';

const Wrapper = styled.div`
  width: 100%;
  height: 515px;
  /* background-color: #cad7ad; */
  
  .container {
    display: flex;

    .age-chart {
      width: 583px;
      height:515px;
      /* background-color: #9897db; */

      .name {
        width: 100%;
        height: 52px;
        /* background-color: #ab9e87; */
      }
    }
    .gender-chart {
      width: 582px;
      height:515px;
      /* background-color: #80809a; */

      .name {
        width: 100%;
        height: 52px;
        /* background-color: #907e5f; */
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
const Hr = styled.div`
  width: 100%;
  margin: 0; 
  border: 0.5px solid rgba(204, 204, 204, 0.5);
`;

const Down = () => {

  return (
    <Wrapper>
      
      <div className='container'>
        <div className='age-chart'>
          <Header >
            <>
              일자별 연령대 확진자 수
            </>
          </Header>

          <Hr />

          <div>chart 자리</div>
        </div>

        <div className='gender-chart'>
          <Header>
            <>
              일자별 성별 확진자 수
            </>
          </Header>

          <Hr />

          <div>chart 자리</div>

        </div>
        <hr className='vertical-horizon' />
      </div>
    </Wrapper>
  );
};

export default Down;