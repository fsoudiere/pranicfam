import Layout from '../components/layout'
import Loader from '../components/loader'
import styles from '../styles/Home.module.scss'
import React, { useEffect,useState } from "react";
import Router from 'next/router'

function Home({updateFormData, ...formData}) {

    const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        const {pathname} = Router
        const members = ["fabi", "kamilla", "monika", "luiza", "nathan", "rai", "hrefna"];
        const random = Math.floor(Math.random() * members.length);
        const path = members[random];
        if(pathname == '/' ){
            updateFormData({ page: path });
            Router.push(`/story/${path}`)
        }else{
            setLoaded(true)
        }
      },[]);

    if(!loaded){
        return <Loader/> //show nothing or a loader
    }

  return (
    <Layout>
    <div className={styles.container}>
      <main className={styles.main}>
      </main>
    </div>
    </Layout>
  )
}



export default Home
