import React, {Component} from 'react';

import Layout from '../components/Layout';

function createPage(PageComponent, route) {
  class Page extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return (
        <Layout>
          <PageComponent />
        </Layout>
      );
    }
  }

  return {
    ...route,
    component: Page,
  };
}

export default createPage;