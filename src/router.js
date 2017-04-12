import React, {PropTypes} from 'react';
import {Router, Route} from 'dva/router';

import Main from './components/layout/main';

import Index from './routes/index.js';
import Page01 from './routes/page01.js';
import Page02 from './routes/page02.js';
import Page03 from './routes/page03.js';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={Index} />
        <Route path="/page01" component={Page01} />
        <Route path="/page02" component={Page02} />
        <Route path="/page03" component={Page03} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
