import Image from 'next/image'
import styles from './actionbar.module.scss'
import Link from 'next/link'
import {  Button } from '@mui/material';
import { KeyboardDoubleArrowDown, PlayArrow, Menu, ArrowForwardIos } from '@mui/icons-material';


export default function Actionbar({href, onClick}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="swipe">
                    <Link href={href}>
                        <a><KeyboardDoubleArrowDown className={styles.floatLeft} />Swipe Down</a>
                    </Link>
                </li>
                <li id="play" >
                    <Link href={href}>
                        <a><PlayArrow className={styles.floatLeft}/>Play</a>
                    </Link>
                </li>
                <li id="menu" >
                    <Link href={href}>
                        <a><Menu className={styles.floatLeft}/>Menu</a>
                    </Link>
                </li>
                <li id="next" className={styles.active}>
                    <Link href={href}>
                        <a><ArrowForwardIos className={styles.floatLeft}/>Next</a>
                    </Link>
                </li>
                <li id="submit">
                <Button variant="outlined" type="submit" form="register" 
                onClick={onClick}>Submit</Button>
                </li>
            </ul>
        </div>


      </>
    )
  }