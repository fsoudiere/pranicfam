import Navbar from './navbar'
import Footer from './footer'
import NoiseBG from './noise'
import {ParticlesBG, ParticlesHearts} from './particles'
import { useSpring, animated } from 'react-spring'
import { useRouter } from 'next/router'


export default function Layout({ children }) {
  const router = useRouter()

    return (
      <>
        { router.pathname === '/business' ? null : <Navbar /> }
        <main>{children}</main>
        { router.pathname === '/apply/success' ? <ParticlesHearts/> : <ParticlesBG/> }
        <NoiseBG/>
        <Footer />

      </>
    )
}

