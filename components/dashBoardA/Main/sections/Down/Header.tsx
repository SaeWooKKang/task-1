import type { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}
const Wrapper = styled.header`
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 24px;
  gap: 10px;

  /* background-color: red; */

  .title-chart {
    width: 294px;
    height: 16px;

    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #4A4A4A;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Header = (props: Props) => {

  return (
    <Wrapper>
      <div className='title-chart'> 
        { props.children } 
      </div>
    </Wrapper>
  );
}
export default Header;