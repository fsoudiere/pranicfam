import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography } from '@mui/material';

function Mission({contentCards}) {

  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Pranic Family</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Typography variant='h1'>Mission</Typography>
        <p className={styles.description}>
          Inspiring beings to live joyfully free
        </p>
        <div className={styles.grid}>
            <h1>May you all be joyful and free!</h1>
        </div>
        
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
            return card.idList == '61ba2edabce7c0409a317adc' && !card.closed;
        });

    return {
      props: {
        contentCards,
      },
      revalidate: 1,
    }
}

export default Mission