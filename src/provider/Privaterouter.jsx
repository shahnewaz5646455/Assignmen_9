import React, { use } from 'react'
import { Authcontext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';

export default function Privaterouter({children}) {
    const location=useLocation();
    const {user,loading}=use(Authcontext);
    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'> <span className="loading  loading-infinity loading-xl text-orange-500"></span></div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace={true} />;
}
