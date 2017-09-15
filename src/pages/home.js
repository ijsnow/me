import createPage from './createPage';

import Home from '../components/Home';

const route = {
  path: '/',
  exact: true,
};

export default createPage(Home, route);