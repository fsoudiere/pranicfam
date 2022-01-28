import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack } from '@mui/material';


function Members({contentCards}) {
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Members</title>
        <meta property="og:url" content='https://pranicfamily.com/members' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Members' key="ogtitle" />
      </Head>

      <main className={styles.main}>
        <Typography variant='h1'>Members</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        From every corner of the world, we are here to remind each other of the Love we are.</p>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

        {contentCards.map((data)=>{
            return (
              <Grid item xs={10} sm={4} key={data.id}>
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
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown>
                {data.attachments[1] 
                ?
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button href={data.attachments[1].url}>Contact {data.attachments[1].name}</Button>
                </Stack>
                : ''
                }

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
            return card.idList == '61ba2edabce7c0409a317adc' && !card.closed;
        });

    return {
      props: {
        contentCards,
      },
      revalidate: 1,
    }
}

export default Members

