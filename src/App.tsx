import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Provider} from "./application/provider";
import {IndexPage} from "./presentation/container/IndexPage";

function App() {
  return (
    <Provider>
      <React.StrictMode>
        <IndexPage />
      </React.StrictMode>
    </Provider>
  );
}

// export default withAuthenticator(App);
export default (App);
