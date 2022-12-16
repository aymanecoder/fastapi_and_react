
import './App.css';
// import './components/Login/Login';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Routes, Route,Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/registration/regist';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (

    <>
        <Routes>
          <Route path="/" element={ <Navigate to="/login" /> }/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<Dashboard />} />

       </Routes>

    </>

  );
}

export default App;
