import { SnackbarProvider } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import {
  AnalyticsProvider,
  FeedBackProvider,
  ParticipantProvider,
  ProfileProvider,
  QueryProvider,
  TopicProvider,
} from "./contexts";
import {
  ClassPage,
  FeedBack,
  ForgotPassword,
  LoginPage,
  Profile,
  Users,
} from "./pages";

import { UserContext } from "./contexts/UserContext";

const Providers = (props) => {
  return (
    <TopicProvider>
      <QueryProvider>
        <ParticipantProvider>
          <AnalyticsProvider>
              <ProfileProvider>
                <FeedBackProvider>{props.children}</FeedBackProvider>
              </ProfileProvider>
          </AnalyticsProvider>
        </ParticipantProvider>
      </QueryProvider>
    </TopicProvider>
  );
};

const App = () => {
  const { userState } = useContext(UserContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(userState.isLoggedIn)
}, [userState.isLoggedIn])

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
                <Route path="/feedback" element={<FeedBack />} />
              </Routes>
            </Providers>
          </SideBar>
        )}
      </SnackbarProvider>
    </BrowserRouter>
  );
};

export default App;
