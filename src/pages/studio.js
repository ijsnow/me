import createPage from './createPage';

import Studio from '../components/Studio';

const route = {
  path: '/studio',
  exact: true,
};

export default createPage(Studio, route);