import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider, } from './providers/AuthProvider'
import 'semantic-ui-css/semantic.min.css'
import { initMiddleware, } from 'devise-axios';

initMiddleware();

ReactDOM.render(

<AuthProvider>
  <Router>
    <AppRouter /> 
  </Router> 
</AuthProvider>,
  
document.getElementById('root'));