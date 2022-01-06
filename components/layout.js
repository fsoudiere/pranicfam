import Navbar from './navbar'
import Nav from './nav'


export default function Layout({ children }) {
    return (
      <>
        
        <Navbar /><Nav />
        <main>{children}</main>

      </>
    )
  }