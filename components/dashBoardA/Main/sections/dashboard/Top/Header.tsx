import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 68px;
  width: 100%;
  
  display: flex;
  align-items: center;
  padding: 1px 24px;
  gap: 10px;

  .title-chart {
    width: 294px;
    height: 16px;

    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #4A4A4A;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
const Hr = styled.div`
  width: 100%;
  margin: 0; 
  border: 0.5px solid rgba(204, 204, 204, 0.5);;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className='title-chart'>
          코로나 일자별 확진자 수 
        </div>
      </Wrapper>

      {/* <Hr /> */}
    </>

  );
};

export default Header;