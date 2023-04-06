import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminCardSection1 from './08 AdminCardSection1';
import BreadcrumSection from './09 BreadcrumSection';
import TableSection from './10 TableSection';

const Dashboard = () => {
  return (
    <div>
      <BreadcrumSection />
      <AdminCardSection1 />
      {/* <ChartSection1 /> */}
      <TableSection />
      {/* <ChartSection2 /> */}
    </div>
  );
};

export default Dashboard;