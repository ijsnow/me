import createPage from './createPage';

import Accordion from '../components/Accordion';

const route = {
  path: '/accordion',
  exact: true,
};

export default createPage(Accordion, route);