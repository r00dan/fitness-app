import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { PrivateRoute } from "./PrivateRoute";
import {
  HomePage,
  SchedulePage,
  DashboardPage,
  ErrorPage,
} from './index';
import { useInit } from "hooks";

export enum Locations {
  ROOT = '/',
  ERROR = '*',
  SCHEDULE = '/schedule',
  DASHBOARD = '/dashboard',
}

export function Router(): JSX.Element {
  useInit();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Locations.ROOT} element={<HomePage />} />
        <Route path={Locations.SCHEDULE} element={<SchedulePage />} />
        <Route path={Locations.DASHBOARD} element={<DashboardPage />} />
        {/* <Route path={Locations.DASHBOARD} element={
          <PrivateRoute element={<DashboardPage />} />
        } /> */}
        <Route path={Locations.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
