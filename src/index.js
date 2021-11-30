import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Provider from "./Context/Provider"

//30/12
/* Bringing in work from codesandbox (split mui theme toggle with react context) */
//TODO : Add Toggle to NavBar + set up theme inside provider along with Mode use state manipulate navstyles to work with mui theming


ReactDOM.render(
  <React.StrictMode>

    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

