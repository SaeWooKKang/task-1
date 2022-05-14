import type { NextPage } from 'next';
import SideBar from '../components/dashBoardA/SideBar';
import Main from '../components/dashBoardA/Main';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  position: relative;
  width: 1440px;
  height: 1024px;

  background: #F8F8F8;
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