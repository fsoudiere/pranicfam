import Image from 'next/image'
import styles from './actionbar.module.scss'
import {SVG_next} from './SVG/SVG_next'
import Link from 'next/link'
import {  Button, Typography } from '@mui/material';
import { KeyboardDoubleArrowDown, PlayArrow, Menu, ArrowForwardIos } from '@mui/icons-material';
import { SVG_scroll } from './SVG/SVG_scroll';




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
                <Button variant="contained" color="primary" endIcon={<SVG_next stroke="rgba(0, 0, 0, 0.87)" style={{width: 20, height: 20}}/>} 
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
              <Link href={href}><a className={styles.joinBtn}>Join <SVG_next stroke='white' style={{width: 20, height: 20}}/></a></Link>
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

export  function ActionScroll({href, onClick}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="swipe">
                <Button variant="outlined" type="submit" endIcon={<SVG_scroll style={{width: 20, height: 20}}/>}
                onClick={onClick}>Scroll</Button>
                </li>
            </ul>
        </div>


      </>
    )
}



