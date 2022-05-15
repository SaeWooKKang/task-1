import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 204px;
  height: 40px;


  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  /* background-color: green; */

  .container-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 204px;
    height: 40px;

    background: #F8F8F8;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;

    .container-icon-name {
      width: 113px;
      height: 20px;

      font-family: 'Red Hat Display';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;

      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .container-icon.blue {
    color: blue;

    path {
      fill: blue
    }
  }
`;

const List = () => {
  const [list, setList] = useState({
    Dashboard: true,
    Research: false,
    Members: false,
    Insight: false,
    Calendar: false
  })

  const handleClick = (e: React.MouseEvent<HTMLDivElement> ) => {
    setList({
      Dashboard: false,
      Research: false,
      Members: false,
      Insight: false,
      Calendar: false,
      [e.currentTarget.innerText]: true
    });
  };

  return (
    <Wrapper>
      <div className={`container-icon ${list.Dashboard ? 'blue' : null}`} onClick={handleClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM6 11.3333H4.66667V6.66667H6V11.3333ZM8.66667 11.3333H7.33333V4.66667H8.66667V11.3333ZM11.3333 11.3333H10V8.66667H11.3333V11.3333Z" fill="#3C3C46"/>
        </svg>
        <span className='container-icon-name'>
          Dashboard
        </span>
      </div>
      <div className={`container-icon ${list.Research ? 'blue' : null}`} onClick={handleClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66668 2.66666H2.66668C1.93334 2.66666 1.34001 3.26666 1.34001 3.99999L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66668 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33332C14.6667 4.59999 14.0667 3.99999 13.3333 3.99999H8.00001L6.66668 2.66666Z" fill="#3C3C46"/>
        </svg>
        <span className='container-icon-name'>
          Research
        </span>
      </div>
      <div className={`container-icon ${list.Members ? 'blue' : null}`} onClick={handleClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99333 1.33334C4.31333 1.33334 1.32666 4.32001 1.32666 8.00001C1.32666 11.68 4.31333 14.6667 7.99333 14.6667C11.6733 14.6667 14.66 11.68 14.66 8.00001C14.66 4.32001 11.6733 1.33334 7.99333 1.33334ZM10.4 5.56001C11.1133 5.56001 11.6867 6.13334 11.6867 6.84668C11.6867 7.56001 11.1133 8.13334 10.4 8.13334C9.68666 8.13334 9.11333 7.56001 9.11333 6.84668C9.10666 6.13334 9.68666 5.56001 10.4 5.56001ZM6.39999 4.50668C7.26666 4.50668 7.97333 5.21334 7.97333 6.08001C7.97333 6.94668 7.26666 7.65334 6.39999 7.65334C5.53333 7.65334 4.82666 6.94668 4.82666 6.08001C4.82666 5.20668 5.52666 4.50668 6.39999 4.50668ZM6.39999 10.5933V13.0933C4.79999 12.5933 3.53333 11.36 2.97333 9.78668C3.67333 9.04001 5.41999 8.66001 6.39999 8.66001C6.75333 8.66001 7.19999 8.71334 7.66666 8.80668C6.57333 9.38668 6.39999 10.1533 6.39999 10.5933ZM7.99333 13.3333C7.81333 13.3333 7.63999 13.3267 7.46666 13.3067V10.5933C7.46666 9.64668 9.42666 9.17334 10.4 9.17334C11.1133 9.17334 12.3467 9.43334 12.96 9.94001C12.18 11.92 10.2533 13.3333 7.99333 13.3333Z" fill="#3C3C46"/>
        </svg>
        <span className='container-icon-name'>
          Members
        </span>
      </div>
      <div className={`container-icon ${list.Insight ? 'blue' : null}`} onClick={handleClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V8C2 8.73333 2.6 9.33333 3.33333 9.33333H12.6667C13.4 9.33333 14 8.73333 14 8V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 6H10C10 7.08 9.08 8 8 8C6.92 8 6 7.08 6 6H3.33333V3.33333H12.6667V6ZM10 10.6667H14V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.6 14 2 13.4 2 12.6667V10.6667H6C6 11.7733 6.89333 12.6667 8 12.6667C9.10667 12.6667 10 11.7733 10 10.6667Z" fill="#3C3C46"/>
        </svg>
        <span className='container-icon-name'>
          Insight
        </span>
      </div>
      <div className={`container-icon ${list.Calendar ? 'blue' : null}`} onClick={handleClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3333 8.15H8V11.4H11.3333V8.15ZM10.6667 1V2.3H5.33333V1H4V2.3H3.33333C2.59333 2.3 2.00667 2.885 2.00667 3.6L2 12.7C2 13.415 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.415 14 12.7V3.6C14 2.885 13.4 2.3 12.6667 2.3H12V1H10.6667ZM12.6667 12.7H3.33333V5.55H12.6667V12.7Z" fill="#3C3C46"/>
        </svg>
        <span className='container-icon-name'>
          Calendar
        </span>
      </div>
    </Wrapper>
  );
};

export default List;