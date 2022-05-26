import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login';
import Layout from '@/pages/Layout';
import './App.css';
import { AuthComponent } from '@/components/AuthComponent'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<AuthComponent><Layout /></AuthComponent>}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
