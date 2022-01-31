import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Page.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Box, Tab, Typography, Button, Grid, Stack, IconButton, List, ListItem, ListItemAvatar, ListItemText, ClickAwayListener } from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { useState, useEffect } from 'react';
import {TabList, TabContext, TabPanel} from '@mui/lab';


function Library({contentCards, videoCards, meditCards}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
  return (
    <Layout>
    <div className={styles.container}>
    <Head>
        <title>Pranic Family - Library</title>
        <meta property="og:url" content='https://pranicfamily.com/library' key="ogurl" />
        <meta property="og:title" content='Pranic Family - Library' key="ogtitle" />
      </Head>
    
      <main className={styles.main}>
        <Typography variant='h1'>Library</Typography>
        <div className={styles.dash}></div>
        <p className={styles.description}>
        Studying & entertaining the mind together through various books</p>

        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5 }}>
          <TabList onChange={handleChange}
          //variant="scrollable"
          //scrollButtons
          //allowScrollButtonsMobile
          centered
          >
            <Tab label="Books" value="1" />
            <Tab label="Videos" value="2" />
            <Tab label="Practices" value="3" />
            <Tab label="Recipes" value="4" disabled />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>   
          {contentCards.map((data)=>{
              return (
                
                  <ListItem key={data.id}
                    secondaryAction={
                      data.attachments[1] 
                      ?
                      <IconButton edge="end" aria-label='download' href={data.attachments[1].url}>
                      <AttachFileOutlinedIcon />
                      </IconButton>
                      : ''
                    }
                  >
                    <ListItemAvatar>
                    <Image
                      src={data.attachments[0].url}
                      width="60"
                      height="90"
                      alt={data.name}
                      priority
                      className=""/>
                    </ListItemAvatar>
                    <ListItemText
                      primary={data.name}
                      secondary={`${data.desc}` + ' - Suggested by ' + `${data.labels[0].name}`}
                    />
                  </ListItem>         
              )
            })}
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

          {videoCards.map((data)=>{
              return (
                <Grid item xs={10} sm={6} key={data.id}>
                <iframe width="400" height="225" 
                src={'https://youtube.com/embed/' + `${ data.attachments[0].name ? data.attachments[0].name : 'aR_C2NNB-wI'}`}
                title="YouTube video player" 
                loading='lazy'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
                <h2>{data.name}</h2>
              </Grid>
              )
          })}

        </Grid>
        
        </TabPanel>
        <TabPanel value="3">
          <Grid container direction="row" justifyContent="center" alignItems="center" 
          spacing={{ xs: 1, sm: 4 }} columns={{ xs: 6, sm: 12 }}>

          {meditCards.map((data)=>{
              return (
                <Grid item xs={10} sm={6} key={data.id}>
                <iframe width="400" height="225" 
                src={'https://youtube.com/embed/' + `${ data.attachments[0].name ? data.attachments[0].name : 'aR_C2NNB-wI'}`}
                title="YouTube video player" 
                loading='lazy'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
                <h2>{data.name}</h2>
              </Grid>
              )
          })}

        </Grid>
        
        </TabPanel>

        <TabPanel value="4">Recipes coming soon</TabPanel>
      </TabContext>
    </Box>
        
        


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
    let videoCards = posts.cards.filter(card => {
          return card.idList == '61f406d163af42120d10d605' && !card.closed;
      });
    let meditCards = posts.cards.filter(card => {
        return card.idList == '61f83937828c6d60b1f87158' && !card.closed;
    });

    return {
      props: {
        contentCards, videoCards, meditCards
      },
      revalidate: 1,
    }
}

export default Library

