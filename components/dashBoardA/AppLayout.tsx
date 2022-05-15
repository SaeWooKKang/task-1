import type { NextPage } from 'next';
import SideBar from './SideBar'
import Main from './Main';
import styled from 'styled-components';

interface Props {
  children: JSX.Element
}

const Wrapper = styled.div`
  display: flex;

  position: relative;
  width: 1440px;
  height: 1024px;

  background: #F8F8F8;
`;
const AppLayout = (props: Props) => {
  return (
    <Wrapper>
      <SideBar />
      <Main>
        { props.children }
      </Main>
    </Wrapper>
  );
};

export default AppLayout;