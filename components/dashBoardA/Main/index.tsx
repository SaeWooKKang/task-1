import type { NextPage } from 'next';
import styled from 'styled-components';
import Down from './sections/Down/Down';
import Top from './sections/Top/Top';

const Wrapper = styled.div`
  position: absolute;
  width: 1165px;
  height: 976px;
  left: 276px;
  top: 20px;

  // 색 #FFFFFF
  /* background: #a6cab3; */
  background: #FFFFFF;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.04);
`;
const Container = styled.div`
  position:relative;
`;

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Top />
        <Down />
      </Container>
    </Wrapper>
  );
};

export default Main;