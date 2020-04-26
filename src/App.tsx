import React from 'react';
import {ABC} from "./component/ABC";
import { withAuthenticator } from '@aws-amplify/ui-react';
import {PostAdd} from "./component/PostAdd";
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

export default withAuthenticator(App);
