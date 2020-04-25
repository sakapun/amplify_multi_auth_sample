import React from 'react';
import './App.css';
import Index from "./component/ABC";
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default withAuthenticator(App);
