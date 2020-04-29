import React from 'react';
import {Box} from "@chakra-ui/core/dist";
import {AmplifySignIn, AmplifySignOut} from "@aws-amplify/ui-react";
import {useCheckLogin} from "../../../lib/amplify-login-state-helper";

export const LoginHeader = () => {
  const [isLogin, callBack] = useCheckLogin();

  return (
    <Box>
      {isLogin
        ? <AmplifySignOut handleAuthStateChange={callBack}/>
        : <AmplifySignIn handleAuthStateChange={callBack} />}
    </Box>
  );
};

