import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Login from '../views/Login';
import Navbar from '../components/Navbar';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
          email: authed.email,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default Initialize;
