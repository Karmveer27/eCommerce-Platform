import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom' 
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App />}>
        <Route index={true} element={<HomeScreen />} /> 
        <Route path="/test" element={<TestScreen />} /> 
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
