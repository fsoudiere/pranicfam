import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { StoryRandom } from '../components/actionbar'
import styles from '../styles/Home.module.scss'
import Button from '@mui/material/Button'
import { ArrowForwardIos } from '@mui/icons-material'
import cookieCutter from 'cookie-cutter'


function Home() {

  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Pranic Family</title>
        <meta name="description" content="Inspiring beings to live joyfully free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div>

        <p className={styles.description}>
          Inspiring beings to live joyfully free
        </p>
        
          <Image
          src="/images/ceremony.jpg" // Route of the image file
          height={420} // Desired size with correct aspect ratio
          width={1200} // Desired size with correct aspect ratio
          alt="Fam"
        />
        </div>
        <Button variant="contained" endIcon={<ArrowForwardIos />} 
          href={"/story/" + members[random]}  >
            Apply</Button>
        <div><h1>Values we share</h1></div>
        <div className={styles.grid}>

            <h2>Inner Joy</h2>
            <p>Life is exuberant and so after surrendering our body, our mind, our will, there’s only peace, playfulness and gratitude that pervades.</p>
            <h2>Freedom</h2>
            <p>Through non-attachment, we find freedom. We cultivate that by avoiding all dependencies on people, food, activities, self, shelter. </p>
              <h2>Compassion</h2>
            <p>Like the sun, we shine on all creatures, good and bad, without conditions. Connection is what’s most important, so we are always embracing change. All is one.</p>
              <h2>Simplicity</h2>
            <p>We are not intellectuals, we live in the present, here and now. Contemplative and without the need to judge or to accumulate knowledge. </p>
              <h2>Natural</h2>
            <p>All is a spontaneous happening, so are we. There is no agenda or comparison, thus there is nothing to change. We accept the natural aspect of all things, simply untouched.</p>
              <h2>Harmony</h2>
            <p>Collectively we can slip, so we accept some rules, ethics, principles for the respect of all life on earth. Non-violence in all action, speech and thoughts.</p>
        </div>
        <div className={styles.grid}>
        <h1>America, Europe, Asia!</h1>
        <Image
          src="/images/together.jpg" // Route of the image file
          height={749} // Desired size with correct aspect ratio
          width={1200} // Desired size with correct aspect ratio
          alt="Together"
        />
            
            <p>After having run many weekly dry fasting at a timing (7pm Paris) rather difficult for other timezones (than Paris), we are improving! We have decided to create 3 private groups and 3 different times to dry fast together, no matter what! Now if you are in the Pranic Family Asia you can start your Weekly Dry Fast on Sunday evening with a group of supportive beings on the pranic journey!</p>
            </div>
        <div className={styles.grid}>
            <h1>Consciousness of the Group</h1>
            <Image
          src="/images/joy.jpg" // Route of the image file
          height={1250} // Desired size with correct aspect ratio
          width={1400} // Desired size with correct aspect ratio
          alt="Being Joy"
        />
            <p>Whether it is in one physical location or virtually connected, the power of a group suddenly reveals the energy of the Beloved, the ungraspable and unspeakable connection between us all. That force can move mountains and is the only reason why we are all here, and thanks to That Grace, each of us can easily flow with Life joyfully.

It requires much more determination to stay on the pranic path as the temptations keep on increasing. Doubt, agitation and idleness then surface and pull us back into our old habits. With this group, you don’t have to fear the obstacles on the path. We are all going through them together and supporting this common enthusiasm through the collective group consciousness. Simply being part of such a group will nourish you from its collective consciousness. The primary food which gives Life to your mind-body is Consciousness.

When you feed on the Consciousness of Joy, you become Joy.</p>

        </div>
        <div className={styles.grid}>
            <h1>Pranic Practices for Inner Joy</h1>
            <p>Inner Joy must be cultivated every instant, now after now. Each day we shall water the seed of Joy in us by practicing a set of sadhanas which varies from one being to another. Not one practice will ever truly free you from the bondage to your mind-body. ‘Freedom’ is a creation of your mind. All is already free, perfect and complete. We don’t intend to give a recipe of rituals to follow but rather accept all practices as long as it respects the community principles.

All the practices are only meant to loosen up the grip with mind or with body until the Inner Joy naturally shines on its own. The clouds covering this innate Joy are all due to our falling back into ignorance. When we nurture this Joy day after day as a community, we can observe the clouds passing without affecting our Inner joy and peace. 

As part of the culture of this community, we share these seeds of joy, these practices, with each other and from generation to generation. Without being attached to any one practice in particular, each being can naturally create his own flow, his own routine.</p>
        </div>
        <div className={styles.grid}>

            <h1>Joining the Family</h1>
            <p>To realize and talk is one thing. To integrate and walk is another. Realizing can happen in a retreat, an event and it usually is a temporary experience. If you want to walk every day as being Joy itself, you can join our joyful community and receive ongoing love to cultivate that Joy. To make this possible is not free, we have put some softwares in place to meet and practice together online each week. That has a little cost. And, we are also planning to split on the acquisition of a land in which we will also need to cover some costs for development (shelters, seeds, equipment) and maintenance of the land. 

We think it’s best we open our doors to all beings. However, we will offer more energy to those who are already on the pranic journey, ready to volunteer and to initiate others through content and events. To help us cover the cost of maintaining this community, we need to ask for a small membership fee of $10/mo. For anyone who would love to live with us on land, we will ask for a $200/mo rent fee in the near future.</p>
        </div>
        <Button variant="contained" endIcon={<ArrowForwardIos />} 
          href={"/story/" + members[random]}  >
            Apply</Button>
        <div className={styles.grid}>
            <h1>May you all be joyful and free!</h1>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const members = ["fabi", "kamilla"];
  const random = Math.floor(Math.random() * members.length);
  const path = members[random];
  // or use context.resolvedUrl for conditional redirect
  // if(context.resolvedUrl == "/")
    return {
      redirect: {
        destination: `/story/${path}`,
        permanent: false,
      },
    }
}


export default Home
