import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography, Button, Grid, Stack } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

function Business({contentCards}) {
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Business</title>
        <meta property="og:url" content='https://pranicfamily.com/business' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Business' key="ogtitle" />
      </Head>

      <main className={styles.main}>

      <section className='biz active' id="intro">
          <Typography variant='h1'>{contentCards[0].name}</Typography>
          <div className={styles.dash}></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[0].desc}</ReactMarkdown>
          <ul className='bizSlides'>
            <li className='img tobias'><Image src={contentCards[0].attachments[3].url}
            width="200" height="200" priority className="clipped"/></li>
          <li className='img luiza'><Image src={contentCards[0].attachments[4].url}
            width="260" height="260" priority className="clipped"/></li>
          <li className='img hrefna'><Image src={contentCards[0].attachments[7].url}
            width="300" height="300" priority className="clipped-triangle"/></li>
          <li className='img kamilla'><Image src={contentCards[0].attachments[5].url}
            width="360" height="360" priority className="clipped-circle"/></li>
          <li className='img monika'><Image src={contentCards[0].attachments[1].url}
            width="320" height="320" priority className="clipped-circle"/></li>
          <li className='img nathan'><Image src={contentCards[0].attachments[6].url}
            width="200" height="200" priority className="clipped-circle"/></li>
          <li className='img rai'><Image src={contentCards[0].attachments[0].url}
            width="260" height="260" priority className="clipped"/></li>    
          <li className='img fabi'><Image src={contentCards[0].attachments[2].url}
            width="360" height="360" priority className="clipped-triangle"/></li>
            </ul>   
      </section>

      <div className='push5'></div>
      <section className='biz active' id="why">
          <Typography variant='h1'>{contentCards[1].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[1].desc}</ReactMarkdown>
          <div className='img toright'>
            <Image src={contentCards[1].attachments[0].url}
            width="620" height="620" priority className="clipped-triangle"/>
          </div>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="how">
          <Typography variant='h1'>{contentCards[2].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[2].desc}</ReactMarkdown>
          <div className='img toleft'>
            <Image src={contentCards[2].attachments[0].url}
            width="620" height="620" priority className="clipped-triangle"/>
          </div>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="when">
          <Typography variant='h1'>{contentCards[3].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[3].desc}</ReactMarkdown>
          <div className='img toright'>
            <Image src={contentCards[3].attachments[0].url}
            width="620" height="620" priority className="clipped"/>
          </div>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="where">
          <Typography variant='h1'>{contentCards[4].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[4].desc}</ReactMarkdown>
          <div className='img'>
            <Image src={contentCards[4].attachments[0].url}
            width="1200" height="400" priority className=""/>
          </div>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="employee">
          <Typography variant='h1'>{contentCards[5].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[5].desc}</ReactMarkdown>
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 4, sm: 4 }} columns={{ xs: 6, sm: 12 }}>
            { contentCards[6].attachments.map((url)=> {
              
              return (
                <Grid item xs={10} sm={4} key={url.id} justifyContent="center">                
                  <Image src={url.url} width="200" height="200" priority className="clipped-circle" />
                  <Typography variant='h6'>{url.name}</Typography>
                </Grid>
              )
            })}
            </Grid>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="company">
          <Typography variant='h1'>{contentCards[6].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[6].desc}</ReactMarkdown>
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 4, sm: 4 }} columns={{ xs: 6, sm: 12 }}>
            { contentCards[6].attachments.map((url)=> {
              
              return (
                <Grid item xs={10} sm={4} key={url.id} justifyContent="center">                
                  <Image src={url.url} width="200" height="200" priority className="clipped-circle" />
                  <Typography variant='h6'>{url.name}</Typography>
                </Grid>
              )
            })}
            </Grid>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="team">
          <Typography variant='h1'>{contentCards[7].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[7].desc}</ReactMarkdown>
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 4, sm: 4 }} columns={{ xs: 6, sm: 12 }}>
            { contentCards[0].attachments.map((url)=> {
              
              return (
                <Grid item xs={3} sm={3} key={url.id} justifyContent="center">                
                  <Image src={url.url} width="200" height="200" priority className="clipped" />
                  <Typography variant='h6'>{url.name}</Typography>
                </Grid>
              )
            })}
            </Grid>
      </section>

      <div className='push5'></div>
      <section className='biz active' id="practices">
          <Typography variant='h1'>{contentCards[8].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[8].desc}</ReactMarkdown>
          
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 4, sm: 4 }} columns={{ xs: 6, sm: 12 }}>
            { contentCards[8].attachments.map((url)=> {
              
              return (
                <Grid item xs={3} sm={3} key={url.id} justifyContent="center">                
                  <Image src={url.url} width="200" height="200" priority className="clipped-circle" />
                  <Typography variant='h6'>{url.name}</Typography>
                </Grid>
              )
            })}
            </Grid>
            
          
      </section>

      <div className='push5'></div>
      <section className='biz active' id="expenses">
          <Typography variant='h1'>{contentCards[9].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[9].desc}</ReactMarkdown>
      </section>


        <div className='push5'></div>
        <Stack spacing={2} className='bottomFixed' direction="row" justifyContent="center">
        <Button variant='contained' href="mailto:fabi@pranicfamily.com">Get in touch</Button>
        <Button variant='outlined' href="https://docs.google.com/presentation/d/1BRxaGS2_G8OrAtYW6iDw5Q7SXbvUfu-uWUf4T_pbfig/edit?usp=sharing" 
        endIcon={<PrintIcon/>}>Print</Button>
        </Stack>

        <div className='push5'></div>
        <section className='active' id="thankyou">
          <Typography variant='h1'>{contentCards[10].name}</Typography>
          <div className={styles.dash}></div>
          <div className='push5'></div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentCards[10].desc}</ReactMarkdown>
      </section>

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
            return card.idList == '61bbabd2d14937093c788a7e' && !card.closed;
        });


    return {
      props: {
        contentCards
      },
      revalidate: 1,
    }
}

export default Business

