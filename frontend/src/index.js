import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom' 
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen.jsx';

import { Provider } from 'react-redux'
import store from './store.js'


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App />}>
        <Route index={true} element={<HomeScreen />} /> 
        <Route path="/product/:id" element={<ProductScreen />} /> 
        <Route path='/cart' element={<CartScreen />} />
        <Route path="/test" element={<TestScreen />} /> 
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
