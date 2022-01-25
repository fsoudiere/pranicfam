import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack } from '@mui/material';

function Resources({contentCards}) {
  console.log(contentCards)
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Resources</title>
        <meta property="og:url" content='https://pranicfamily.com/resources' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Resources' key="ogtitle" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Reads</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Studying & entertaining the mind together through various books</p>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

        {contentCards.map((data)=>{
            return (
              <Grid item xs={10} sm={4} key={data.id}>
              <div className='img'>
                <Image
                src={data.attachments[0].url}
                width="130"
                height="200"
                alt={data.name}
                priority
                className=""/>
              </div>
              <h2>{data.name}</h2>
              <Typography variant='h6'>Author: {data.customFieldItems[2].value.text}</Typography>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant="contained" href='/'>Download</Button>
              </Stack>
            </Grid>
            

            )
          })}

        </Grid>
        <div className='push5' ></div>
        <Button variant='outlined' href="/en">Back to Menu</Button>
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
            return card.idList == '61effee2102ffb21ea79a6ff' && !card.closed;
        });

    return {
      props: {
        contentCards
      },
      revalidate: 1,
    }
}

export default Resources

