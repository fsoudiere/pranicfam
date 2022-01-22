import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack, ImageList, ImageListItem } from '@mui/material';



function Mission({contentCards}) {

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    }; 
  }

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
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Inspiring beings to live Joyfully Free</p>
        <div className='push5'>
          <Image
          src={'/images/ceremony.jpg'} // Route of the image file
          height={380} // Desired size with correct aspect ratio
          width={1024} // Desired size with correct aspect ratio
          alt="Fam"
        /></div>

        <Grid container direction="row" justifyContent="center" alignItems="center" 
        spacing={{ xs: 1, sm: 4 }} columns={{ xs: 12, sm: 12 }}>

        {contentCards.map((data)=>{
          console.log(data);
            return (
              <Grid item xs={12} sm={12} key={data.id} justifyContent="center">
              {
              data.attachments.length > 0
              ?
              <div>
                  <Image
                    src={data.attachments[0].url}
                    width='620'
                    height='400'
                    layout='responsive'
                    alt={data.name}
                    priority
                    />
                </div>
              : <div><h2>{data.name}</h2>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.desc}</ReactMarkdown></div>
              }
            </Grid>
            

            )
          })}

        </Grid>
        <Button variant='contained' href="/en"><a>Back to Menu</a></Button>

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