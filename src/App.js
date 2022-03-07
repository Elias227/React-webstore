import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/SignIn/SignIn';
import { useStateValue } from "./StateProvider";
import { auth } from './Firebase';
import SignUp from './Pages/SignIn/Signup/SignUp';
import { AuthProvider } from "./AuthContext"

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // user logged out

        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, []);

  console.log("USER IS >>> ", user);

  return (
    <AuthProvider>
    
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
          <Footer />
      </Router>

    </AuthProvider>
  );
}

export default App;
