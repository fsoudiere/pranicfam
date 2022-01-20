import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack } from '@mui/material';

function Mission({contentCards}) {

  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Mission</title>
        <meta property="og:url" content='https://pranicfamily.com/mission' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Mission' key="ogtitle" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Mission</Typography>
        <p className={styles.description}>
        Inspiring beings to live Joyfully Free</p>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 1, sm: 4 }} columns={{ xs: 12, sm: 12 }}>

        {contentCards.map((data)=>{
            return (
              <Grid item xs={12} sm={12} key={data.id} justifyContent="center">
              <h2>{data.name}</h2>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
            </Grid>
            

            )
          })}

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
            return card.idList == '61bbabe2538a9876241897ec' && !card.closed;
        });

    return {
      props: {
        contentCards,
      },
      revalidate: 1,
    }
}

export default Mission