import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack } from '@mui/material';

function Channels({contentCards}) {
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Channels</title>
        <meta property="og:url" content='https://pranicfamily.com/channels' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Channels' key="ogtitle" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Channels</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Reflecting our essence in a multitude of colors, sounds, tastes, smells, and touches.</p>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 4, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

        {contentCards.map((data)=>{
            return (
              <Grid item xs={10} sm={4} key={data.id} justifyContent="center">
              <div className='img'>
                <Image
                src={data.attachments[0].url}
                width="200"
                height="200"
                alt={data.name}
                priority
                className="clipped-circle"/>
              </div>
              <h2>{data.name}</h2>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained" href='https://t.me/PFInviteBot'>Join Group</Button>
              </Stack>
            </Grid>
            

            )
          })}

        </Grid>
        <Link href="/en"><a>Back to Menu</a></Link>
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
            return card.idList == '61ba2ee5c826d224197512a6' && !card.closed;
        });


    return {
      props: {
        contentCards
      },
      revalidate: 1,
    }
}

export default Channels

