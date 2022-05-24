import { Routes as AppRoutes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <AppRoutes>
    <Route path="/" element={<Dashboard />} />
  </AppRoutes>
);

export default Routes;
