import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: green;
  position: absolute;
  width: 1165px;
  height: 976px;
  left: 276px;
  top: 20px;

  background: #FFFFFF;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.04);
`;
const Main = () => {
  return (
    <Wrapper>
      main !@!#
    </Wrapper>
  );
};

export default Main;