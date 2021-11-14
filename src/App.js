import React from 'react';

import './App.css';
import BookList from './bookList';
import Login from './login';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  if(!token || token==="") {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BookList setToken={setToken} />
    </div>
  );
}

export default App;
