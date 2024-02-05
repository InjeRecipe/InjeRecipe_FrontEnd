import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin'
export const useSignIn =()=>{
    const googleSigninConfigure = () => {
        GoogleSignin.configure({
        webClientId:'1061735857952-hfskjefce69p4msarih2vr714kto3res.apps.googleusercontent.com',
        iosClientId:'1061735857952-hfskjefce69p4msarih2vr714kto3res.apps.googleusercontent.com', //파이어베이스 서버 이용을 안할경우 필요한듯
        
        });
    }
    const _signIn = async () => {
    
        try {
          await GoogleSignin.hasPlayServices()
          
            await GoogleSignin.signIn()
          //setState({ userInfo, error: undefined });
        } catch (error:any) {
         
           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('Errrr1')
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('Errrr2')
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Errrr3')
          // play services not available or outdated
        } else {
          console.log('Errrr4')
          // some other error happened
        }
        }
      };
    const onPressGoogleSignIn = () =>{
        _signIn()
    }
    return{
        googleSigninConfigure,
        onPressGoogleSignIn
    }
}