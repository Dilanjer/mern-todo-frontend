import PagePreloader from 'components/PagePreloader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'store';
import './index.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<PagePreloader />}>
          <App />
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
