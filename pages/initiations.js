import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { Typography, Button, Grid, Stack } from '@mui/material';

function Events({contentCards}) {
  console.log(contentCards)

  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Pranic Family Initiations</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h4'>Initiations</Typography>
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
                className="clipped"/>
              </div>
              <h2>{data.name}</h2>
              <p>{data.desc}</p>
              <Stack spacing={2} direction="row">
                <Button variant="contained" href='/'>Register</Button>
                <Button href='/'>Contact {data.labels[0].name}</Button>
              </Stack>
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
            return card.idList == '61df2f74cb4cd415e23bb8ef' && !card.closed;
        });


    const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(contentCards[1].desc)
    const contentHtml = processedContent.toString()

    return {
      props: {
        contentCards, contentHtml
      },
      revalidate: 1,
    }
}

export default Events

