import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; // Assuming theme.js is in the same directory as App.js

// Corrected imports for Context and Pages
// import { AuthContextProvider } from './context/AuthContext';
// import { CartContextProvider } from './context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext';

import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
// import theme from './theme';  // Ensure 'theme.js' is in the same folder


const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthContext>
      <CartContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </CartContext>
    </AuthContext>
  </ThemeProvider>
);

export default App;
