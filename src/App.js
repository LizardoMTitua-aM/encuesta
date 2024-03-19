import './App.css';
import { useState } from 'react';
import appFirebase from './tokens/credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainPage from './components/mainPage';
import Login from './components/Login';

const auth = getAuth(appFirebase);  // Initialize Firebase

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    }
    else {
      setUser(null);
    }
  } );

  return (
    <div className="App">
      {user ? <MainPage  mailUser = {user.email}/> : <Login />}
      
    </div>
  );
}

export default App;
