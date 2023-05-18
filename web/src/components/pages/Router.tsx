import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { HomePage } from "./HomePage/HomePage";
import { ProfilePage } from "./ProfilePage/ProfilePage";
import { SchedulePage } from "./SchedulePage/SchedulePage";
import { ErrorPage } from "./ErrorPage/ErrorPage";

export enum Locations {
  ROOT = '/',
  ERROR = '*',
  DASHBOARD = '/schedule',
  PROFILE = '/profile',
}

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Locations.ROOT} element={<HomePage />} />
        <Route path={Locations.DASHBOARD} element={<SchedulePage />} />
        <Route path={Locations.PROFILE} element={
          <PrivateRoute element={<ProfilePage />} />
        } />
        {/* <Route path={Locations.DASHBOARD} element={
          <PrivateRoute element={<DashboardPage />} />
        } /> */}
        <Route path={Locations.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
