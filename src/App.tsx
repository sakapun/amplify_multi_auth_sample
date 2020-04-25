import React from 'react';
import {ABC} from "./component/ABC";
import { withAuthenticator } from '@aws-amplify/ui-react';
import {PostAdd} from "./component/PostAdd";
import {Provider} from "./application/provider";

function App() {
  return (
    <Provider>
      <ABC />
      <PostAdd />
    </Provider>
  );
}

export default withAuthenticator(App);
