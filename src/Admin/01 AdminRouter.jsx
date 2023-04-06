import React from 'react';
import { Routes,Route } from 'react-router-dom';
import DashboardPage from './07 Dashboardpage';
import Dashboard from './07 Dashboard';
// import AdminProfile from './AdminProfile.jsx';
// import AdminProducts from './AdminProducts.jsx';
import AdminAllUsers from './11 AdminAllUsers';
import AdminAddNewUser from './12 AdminAddNewsuser';
import EditUsers from './13 EditUsers';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DashboardPage />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/profile" element={<AdminProfile />} /> */}
                    {/* <Route path="/products" element={<AdminProducts />} /> */}
                    <Route path="/allusers" element={<AdminAllUsers />} />
                    <Route path="/users/:id" element={<EditUsers />} />
                    <Route path="/addnewuser" element={<AdminAddNewUser />} />
                </Route>
            </Routes>
        </>
    );
};

export default AdminRouter;


