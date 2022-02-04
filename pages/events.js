import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack } from '@mui/material';

function Events({contentCards}) {

  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Events</title>
        <meta property="og:url" content='https://pranicfamily.com/events' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Events' key="ogtitle" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Events</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Re-connecting deeply to our values through intensive workshops and pranic initiations.</p>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

        {contentCards.map((data)=>{
            return (
              <Grid item xs={10} sm={6} key={data.id}>
              <div className='img'>
                <Image
                src={data.attachments[0].url}
                width="200"
                height="200"
                alt={data.name}
                priority
                className="clipped-triangle"/>
              </div>
              <h2>{data.name}</h2>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained" href='/'>Join the Fam</Button>
                <Button href={`${ data.attachments[1].url ? data.attachments[1].url : 'https://t.me/PFInviteBot'}`}>Contact {data.labels[0].name} </Button>
              </Stack>
            </Grid>
            

            )
          })}

        </Grid>
        <div className='push5'></div>
        <Button variant='outlined' href="/en"><a>Back to Menu</a></Button>
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
            return card.idList == '61df2f74cb4cd415e23bb8ef' && !card.closed;
        });

    return {
      props: {
        contentCards
      },
      revalidate: 1,
    }
}

export default Events

