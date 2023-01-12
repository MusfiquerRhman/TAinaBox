import { SnackbarProvider } from 'notistack';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from './pages';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
          {!isLoggedIn && (
            <>
              <Routes>
                <Route path='/' element={<LoginPage />} />
              </Routes>
            </>
          )}
          {isLoggedIn && (
            <>

            </>
          )}
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
