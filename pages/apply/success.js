import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'


function Success({ contentCards, updateFormData, ...formData }) {

  console.log(formData);

  return (
    <Layout>
        <div className={styles.main}>
        <Head>
        <title>Pranic Family - Welcome Aboard!</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bubble active" id="success-bubble">
           <p>Welcome to the Family {formData.name}! Here is the group Telegram where you can finalize your subscription:</p>
      </section>

      <Link href="http://telegram.com"><a>Join </a></Link>
    
    </div>
    </Layout>
    

  )
}



export default Success