import React from 'react';
import { Route } from 'react-router-dom';

import Goals from './views/Goals/Goals';
import GoalStatistic from './views/GoalStatistic/GoalStatistic';
import UserPage from './views/UserPage/UserPage';
import Map from './views/Map/Map';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Goals} />
      <Route path="/goal-statistic" component={GoalStatistic} />
      <Route path="/map" component={Map} />
      <Route path="/user" component={UserPage} />
    </>
  );
};

export default Routes;
