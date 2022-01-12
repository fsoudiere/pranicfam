import Image from 'next/image'
import styles from './actionbar.module.scss'
import Link from 'next/link'
import {  Button, Typography } from '@mui/material';
import { KeyboardDoubleArrowDown, PlayArrow, Menu, ArrowForwardIos } from '@mui/icons-material';




export  function ActionMenu({href}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="menu">
                    <Link href={href}>
                        <a><Menu className={styles.floatLeft}/>Menu</a>
                    </Link>
                </li>
            </ul>
        </div>


      </>
    )
}

export  function ActionNext({href, onClick}) {

    return (
      <>
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="submit">
                <Button variant="contained" color="neutral" endIcon={<ArrowForwardIos />} 
                onClick={onClick} >Next</Button>
                </li>
            </ul>
        </div>
      </>
    )
}

export  function ActionJoin({href}) {
  return (
    <>
      
      <div className={styles.nav} id="join">
          <ul className={styles.navmenu}>
              <li>
              <Link href={href}><a className={styles.joinBtn}>Join <ArrowForwardIos /></a></Link>
              </li>
              
          </ul>
          <Typography variant="subtitle2">7 days free then $10/month, cancel anytime.</Typography>
      </div>


    </>
  )
}

export  function ActionPlay({href}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="play" >
                    <Link href={href}>
                        <a><PlayArrow className={styles.floatLeft}/>Play</a>
                    </Link>
                </li>
            </ul>
        </div>


      </>
    )
}

export  function ActionNotif({href, onClick}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="swipe">
                <Button variant="outlined" type="submit" 
                onClick={onClick}>Scroll <KeyboardDoubleArrowDown /></Button>
                </li>
            </ul>
        </div>


      </>
    )
}



