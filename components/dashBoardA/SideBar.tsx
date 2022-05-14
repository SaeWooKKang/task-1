import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 0px;
  gap: 10px;

  position: absolute;
  width: 252px;
  height: 1024px;
  left: 0px;
  top: 0px;

  background: #F8F8F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SideBar = () => {
  return (
    <Wrapper>
     side bar@!
    </Wrapper>
  );
};

export default SideBar;