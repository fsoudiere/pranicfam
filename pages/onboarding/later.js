import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link';

function Later({ contentCards, updateFormData, ...formData }) {

  console.log(formData);

  return (
    <Layout>
    <div className={styles.main}>
        <Head>
        <title>Pranic Family - Onboarding</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

      <section className="bubble" id="apply-bubble">
           <p>Oops {formData.name}! Based on your answers, it looks like we might not be the right fit for you. Feel free to reapply at a later time. May you be joyful, and free!</p>
      </section>

      <Link href="/onboarding"><a>Back </a></Link>
    
    </div>
    </Layout>
    

  )
}



export default Later