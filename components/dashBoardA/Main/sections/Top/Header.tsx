import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 68px;
  width: 100%;
  background-color: #dc4040;
`;

const Header = () => {
  return (
    <Wrapper>
      <div className='title-chart'>
        코로나 일자별 확진자 수 
      </div>
    </Wrapper>
  );
};

export default Header;