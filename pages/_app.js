import '../styles/globals.scss'
import Layout from '../components/layout'
import { AppWrapper } from '../context/UserContext.js'
import { useState } from 'react'
import { CookiesProvider } from "react-cookie"

const AppComponent = ({ Component, pageProps }) => {

    const [formData, setFormData] = useState({});
    const updateFormData = (newData) => {
      setFormData({ ...formData, ...newData });
    };
    return (
  <>
  <CookiesProvider><AppWrapper>
  <Layout>
  <Component {...pageProps} {...formData} updateFormData={updateFormData} />
  </Layout>
  </AppWrapper></CookiesProvider>    
  </>
  );
}




export default AppComponent
