import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Question from './Question'
import Board from './Board'
import Create from './Create'
import Shared from './Shared'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Question" element={<Question />}></Route>  
          <Route path="/Board" element={<Board />}></Route>  
          <Route path="/Create" element={<Create />}></Route>  
          <Route path="/Shared" element={<Shared />}></Route>


        </Routes>
      
      </BrowserRouter>
    </div>
  );
}
export default App;
