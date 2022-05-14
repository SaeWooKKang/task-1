import type { NextPage } from 'next';
import SideBar from '../components/dashBoardA/SideBar';
import Main from '../components/dashBoardA/Main';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
const DashBoardA = () => {
  return (
    <Wrapper>
      <SideBar />
      <Main />
    </Wrapper>
  );
};

export default DashBoardA;