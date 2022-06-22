import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import Login from './Login';
import Dashboard from './Dashboard';
import CreateForm from './Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(props) {
  return (
    <div className='router'>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard/' element={<Dashboard />} />
            <Route path='/addjobs/' element={<CreateForm />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

{
  /* <Router>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/dashboard/" element={<Dashboard />}>
    <Route path="/form" element={<Form/>} />
  </Route> 
 </Routes>
</Router>  */
}
