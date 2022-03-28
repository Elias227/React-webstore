import React/*, { useEffect }*/ from 'react';
import './App.css';
import { Navigate, Outlet, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignIn/Signup/SignUp';
import { AuthProvider, useAuth } from "./AuthContext";
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import PrivateRoute from './PrivateRoute';

// ˇˇˇhandles private routing for auth pagesˇˇˇ
function ProtectedRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : <Outlet />;
}

function App() {

  return (
    <AuthProvider>
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/about" element={<About />} />
          {/* ˇˇˇauth pages not showed when user signed in. Logic handled in app.jsˇˇˇ */}
          <Route element={<ProtectedRoute />}>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
          {/* ˇˇˇprivate route when user is logged out. Logic handled outside app.jsˇˇˇ */}
          <Route element={<PrivateRoute />}>
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
          <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
