import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import { ParticipantProvider } from "./contexts/ParticipantsContext";
import { QueryProvider } from "./contexts/QueryContext";
import { TopicProvider } from "./contexts/TopicContext";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TopicProvider>
      <QueryProvider>
        <ParticipantProvider>
          <AnalyticsProvider>
            <App />
          </AnalyticsProvider>
        </ParticipantProvider>
      </QueryProvider>
    </TopicProvider>
  </React.StrictMode>
);
