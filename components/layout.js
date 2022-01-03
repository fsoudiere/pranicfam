import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from './navbar'
import Actionbar from './actionbar'


export default function Layout({ children }) {
    return (
      <>
        
        <Navbar />
        <main>{children}</main>

      </>
    )
  }