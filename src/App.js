import { SnackbarProvider } from "notistack";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import {
  AnalyticsProvider,
  ParticipantProvider,
  ProfileProvider,
  QueryProvider,
  TopicProvider,
  UserProvider,
} from "./contexts";
import {
  ClassPage,
  ForgotPassword,
  LoginPage,
  Profile,
  Users,
} from "./pages";

const Providers = (props) => {
  return (
    <TopicProvider>
      <QueryProvider>
        <ParticipantProvider>
          <AnalyticsProvider>
            <UserProvider>
              <ProfileProvider>{props.children}</ProfileProvider>
            </UserProvider>
          </AnalyticsProvider>
        </ParticipantProvider>
      </QueryProvider>
    </TopicProvider>
  );
};

const App = () => {
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
            <Providers>
              <NavBar />
              <Routes>
                <Route path="/" element={<ClassPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </Providers>
          </SideBar>
        )}
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
