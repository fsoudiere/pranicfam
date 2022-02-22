import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import { Typography, Grid } from '@mui/material';
import { SVG_air, SVG_earth, SVG_water, SVG_fire} from '../components/SVG/SVG_next'
import {SVG_hand} from '../components/SVG/SVG_hand'

function Home({contentCards}) {
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Welcome Home</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <meta property="og:url" content='https://pranicfamily.com/' key="ogurl" />
        <meta property="og:image" content='/images/joy.jpg' key="ogimage" />
        <meta property="og:title" content='Welcome Home' key="ogtitle" />
        <meta property="og:description" content='Inspiring being to live Joyfully Free' key="ogdesc" />
      </Head>

      <main className={styles.main}>
        <div className='push5'>
          </div>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

            <Grid item xs={10} sm={6} key={contentCards[0].id}>
            <Link href="/mission"><a>
                <SVG_air stroke="rgba(0, 0, 0, 0.87)" style={{width: 60, height: 60}}/>
                <Typography variant='h4'>{contentCards[0].name}</Typography>
                <p>{contentCards[0].desc}</p>
              
            </a></Link>
            </Grid>
            <Grid item xs={10} sm={6} key={contentCards[1].id}>
            <Link href="/coaching"><a>
              <SVG_fire stroke="rgba(0, 0, 0, 0.87)" style={{width: 60, height: 60}}/>
              <Typography variant='h4'>{contentCards[1].name}</Typography>
              <p>{contentCards[1].desc}</p>
            </a></Link>
            </Grid>
            <Grid item xs={10} sm={6} key={contentCards[2].id}>
            <Link href="/circles"><a>
               <SVG_water stroke="rgba(0, 0, 0, 0.87)" style={{width: 60, height: 60}}/>
              <Typography variant='h4'>{contentCards[2].name}</Typography>
              <p>{contentCards[2].desc}</p>
            </a></Link>
            </Grid>
            <Grid item xs={10} sm={6} key={contentCards[3].id}>
            <Link href="/events"><a>
            <SVG_earth stroke="rgba(0, 0, 0, 0.87)" style={{width: 60, height: 60}}/>
              <Typography variant='h4'>{contentCards[3].name}</Typography>
              <p>{contentCards[3].desc}</p>
            </a></Link>
            </Grid>
            <Grid item xs={10} sm={6} key={contentCards[4].id}>
            <Link href="/library"><a>
            <SVG_hand stroke="rgba(0, 0, 0, 0.87)" style={{width: 60, height: 60}}/>
              <Typography variant='h4'>{contentCards[4].name}</Typography>
              <p>{contentCards[4].desc}</p>
            </a></Link>
            </Grid>

        </Grid>

        </main>
    </div>
    </Layout>
  )
}

  // params will contain the id for each generated page.
  export async function getStaticProps() { 
  
    const res = await fetch('https://trello.com/b/aOOx3O4Q.json')
    const posts = await res.json() 
    let contentCards = posts.cards.filter(card => {
            return card.idList == '61e319776024995656aee657' && !card.closed;
        });

    return {
      props: {
        contentCards
      },
      revalidate: 1,
    }
}

export default Home

