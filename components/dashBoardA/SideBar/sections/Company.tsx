import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 145px;
  height: 40px;

  background: #F8F8F8;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  .company-name {
    width: 113px;
    height: 20px;

    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700; 
    font-size: 16px;
    line-height: 21px;

    color: #3C3C46;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

const Company = () => {

  return (
    <Wrapper>
        <>🛳</>
        <span className='company-name'>company</span>
    </Wrapper>
  );
};

export default Company;