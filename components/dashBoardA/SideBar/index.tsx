import type { NextPage } from 'next';
import styled from 'styled-components';
import List from './sections/List'
import Company from './sections/Company';

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

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 0px 48px;
    gap: 56px;

    width: 252px;
    height: 136px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const SideBar = () => {

  return (
    <Wrapper>
      <div className='container'>
        <Company />        
        <List />
      </div>
    </Wrapper>
  );
};

export default SideBar;