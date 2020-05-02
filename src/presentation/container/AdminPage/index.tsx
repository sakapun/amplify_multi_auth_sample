import React from 'react';
import {Box, Link} from "@chakra-ui/core/dist";
import {AmplifySignOut, AmplifySignIn} from "@aws-amplify/ui-react";
import {useCheckLogin} from "../../../lib/amplify-login-state-helper";


const AdminPage = () => {
  const [isLogin, callBack] = useCheckLogin();

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"100%"} flexDirection={"column"}>
      {isLogin ? <AmplifySignOut handleAuthStateChange={callBack}/> : <AmplifySignIn handleAuthStateChange={callBack} />}
      <Link href={"/"}>home</Link>
    </Box>
  );
};

export default AdminPage;
