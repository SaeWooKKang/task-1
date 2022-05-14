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

  span {
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="white"/>
          <path d="M13.0264 7.89634L12.8179 7.8633V2.4003H11.1824V7.8633L10.9739 7.89634C8.79684 8.24521 7.20016 10.079 7.20016 12.2285V17.9154C7.20016 18.3993 7.57415 18.823 8.06981 18.8551C8.61334 18.8901 9.06811 18.4693 9.06811 17.9474V15.7522H14.9322V17.9154C14.9322 18.3993 15.3062 18.823 15.8019 18.8551C16.3454 18.891 16.8002 18.4693 16.8002 17.9474V12.2276C16.8002 10.079 15.2025 8.24521 13.0264 7.89634Z" fill="black"/>
          <path d="M14.6826 13.8547H9.31714V12.5144C9.31714 11.1256 10.472 10.0001 11.8972 10.0001H12.1016C13.5267 10.0001 14.6816 11.1256 14.6816 12.5144L14.6826 13.8547Z" fill="#FAE62C"/>
        </svg>
        <span>DBDLAB Corp.</span>
    </Wrapper>
  );
};

export default Company;