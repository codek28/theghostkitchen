import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useSelector } from "react-redux"

import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { SideNav } from "../components/SideNav";

import { IndexLogger } from "../pages/logger/IndexLogger";
import { IndexControls } from "../pages/controls/IndexControls";
import { IndexPCOps } from "../pages/pc-operations-management/IndexPCOps";
import { IndexPCTask } from "../pages/pc-operations-management/IndexPCTask";
import { IndexZonalOps } from "../pages/zonal-operations-management/IndexZonalOps";
import { IndexZonalTask } from "../pages/zonal-operations-management/IndexZonalTask";
import { IndexBzDev } from "../pages/business-developement/IndexBzDev";
import { IndexBzDevTask } from "../pages/business-developement/IndexBzDevTask";
import { IndexAdminhome } from "../pages/admin-home/IndexAdminhome";

import { getAdminLogin } from "../stores/admin/adminSlice";

export const Navigation = () => {
  const loginstatus = useSelector(getAdminLogin);

  function RequireAuth( children ) {  
    return loginstatus === true ? children : <IndexLogger/>;
  }


  return (
    <BrowserRouter>
      <Header />
      <div className="flex flex-row">
        <div className="p-2 w-[15%] mx-auto">
          <SideNav />
        </div>
        <div className="p-2 w-[80%] mx-auto">
          <Routes>
            <Route path="/" element={<IndexLogger />} />
            <Route path="/home" element={<IndexAdminhome />} />
            <Route path="/controls" element={<IndexControls />} />
            <Route path="/pcops" element={<IndexPCOps />} />
            <Route path="/pcops/:task" element={<IndexPCTask />} />
            <Route path="/zonalops" element={<IndexZonalOps />} />
            <Route path="/zonalops/:task" element={<IndexZonalTask />} />
            <Route path="/bzdev" element={RequireAuth(<IndexBzDev />)} />
            <Route path="/bzdev/:task" element={<IndexBzDevTask />} />
          </Routes>
        </div>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
};
