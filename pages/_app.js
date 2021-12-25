import '../styles/globals.css'
import { AppWrapper } from '../context/UserContext.js'

console.log(process.env.REACT_APP_SENDIN_API_KEY)

function MyApp({ Component, pageProps }) {
  return (
  <>
  <AppWrapper>
  <Component {...pageProps} />
  </AppWrapper>    
  </>
  );
}

export default MyApp
