import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import LogIn from './pages/login'; // Ensure this path is correct
import SignUp from './pages/signUp';
import Detail from './pages/detail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} /> 
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={< SignUp/>} />
          <Route path="/detail" element={< Detail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
