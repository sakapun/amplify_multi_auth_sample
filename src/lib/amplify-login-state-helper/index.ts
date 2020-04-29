import {useEffect, useState} from "react";
import {Auth} from "aws-amplify";

export const useCheckLogin = (): [boolean, (nextAuthState: any, data?: object) => void] => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const res = (await Auth.currentCredentials())
      setIsLogin(res.authenticated)
    })();
  }, [])
  const onStateChangedCallback = (nextAuthState: any, data?: object) => {
    if (nextAuthState === "signedin") {
      setIsLogin(true);
      // console.log(isLogin)
    } else if (nextAuthState === "signedout") {
      setIsLogin(false)
      // console.log(isLogin)
    }
  }
  return [isLogin, onStateChangedCallback];
}
