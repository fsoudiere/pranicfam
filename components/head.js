import Head from 'next/head'

export default function HeadTags() {

    return (
        <Head>
        <title>Pranic Family</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content='https://pranicfamily.com' key="ogurl" />
        <meta property="og:image" content='/images/joy.jpg' key="ogimage" />
        <meta property="og:site_name" content='Pranic Family' key="ogsitename" />
        <meta property="og:title" content='Join the Pranic Family for Loving Support' key="ogtitle" />
        <meta property="og:description" content='Inspiring being to live Joyfully Free is our mission. We re-connect to these values through meaningful conversations, weekly dry fasting, intensive workshops and pranic initiations.' key="ogdesc" />
      </Head>

    )
  }
