import React from 'react';
import {Provider} from "./application/provider";
import {IndexPage} from "./presentation/container/IndexPage";
import AdminPage from "./presentation/container/AdminPage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Box} from "@chakra-ui/core/dist";

function App() {
  return (
    <Box height={"100vh"}>
      <Provider>
        <Router>
          <React.StrictMode>
            <Switch>
              <Route exact path={"/"}>
                <IndexPage />
              </Route>
              <Route path={"/admin"}>
                <AdminPage />
              </Route>
            </Switch>
          </React.StrictMode>
        </Router>
      </Provider>
    </Box>
  );
}

export const Admin = () => {
  return (
    <Provider>
      <React.StrictMode>
        <AdminPage />
      </React.StrictMode>
    </Provider>
  )
}

export default (App);
