import type { NextPage } from 'next';

import Top from '../components/dashBoardA/Main/sections/dashboard/Top/Top';
import Down from '../components/dashBoardA/Main/sections/dashboard/Down/Down';
import AppLayout from '../components/dashBoardA/AppLayout';

const DashBoard = () => {
  return (
    <AppLayout>
        <>
          <Top />
          <Down />
        </>
    </AppLayout>
  );
};

export default DashBoard;