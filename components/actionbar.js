import Image from 'next/image'
import styles from './actionbar.module.scss'
import Link from 'next/link'
import {  Button } from '@mui/material';
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
                <Button variant="outlined" type="submit" 
                onClick={onClick}>Next <ArrowForwardIos /></Button>
                </li>
            </ul>
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



