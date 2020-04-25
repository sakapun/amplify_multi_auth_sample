import React from 'react';
import './App.css';
import {ABC} from "./component/ABC";
import { withAuthenticator } from '@aws-amplify/ui-react';
import {PostAdd} from "./component/PostAdd";

function App() {
  return (
    <div className="App">
      <ABC />
      <PostAdd />
    </div>
  );
}

export default withAuthenticator(App);
