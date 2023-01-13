import { SnackbarProvider } from "notistack";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { ClassPage, ForgotPassword, LoginPage } from "./pages";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
          </Routes>
        ) : (
          <SideBar>
            <NavBar />
            <Routes>
              <Route path="/" element={<ClassPage />} />
            </Routes>
          </SideBar>
        )}
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
