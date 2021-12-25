import styles from '../styles/Home.module.css'
import { useAppContext } from '../context/UserContext.js'
import { useState } from 'react';

const registerUser = async event => {
    const email = event.target.email.value;
    const fname = event.target.fname.value;
    const diet = event.target.diet.value;
    const motive = event.target.motive.value;
    const dry = event.target.dry.value;
    const initiated = event.target.initiated.value;
    event.preventDefault() // don't redirect the page
    const res = await fetch('/api/sendinblue', {
      body: JSON.stringify({
        email: email,
        fname: fname,
        diet: diet,
        motive: motive,
        initiated: initiated,
        dry: dry,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST'
    })
    const result = await res.json()
  }


// posts will be populated at build time by getStaticProps()
function Blog({ contentCards }) {
  const { user, login } = useAppContext();
  const [name, setName] = useState();

  return (
    <div className={styles.main}>
      <form id="register" method="post" onSubmit={registerUser}></form>

        <p>{contentCards[0].desc}</p>
        <label htmlFor="fname">{contentCards[0].name}</label>
        <input id="fname" 
        onChange={(event) => {setName(event.target.value);}}
        form="register" type="text" autoComplete="fname" required />
        <button onClick={() => login(name)}>Ok</button>

        <p>Hey {user.name}, {contentCards[1].desc}</p>
        <button onClick={(event) => alert('Hi')}>Continue</button>

        <p>{contentCards[2].desc}</p>
        <label htmlFor="diet">{contentCards[2].name}</label>
          <select id="diet" name="diet" form="register" required>
            <option value="omnivore">Omnivore/Pescatarian</option>
            <option value="vegan">Vegan/Vegetarian</option>
            <option value="raw">Raw Food</option>
            <option value="fruit">Fruitarian</option>
            <option value="liquid">Mostly Liquids</option>
          </select>


          <p>{contentCards[3].desc}</p>
          <label htmlFor="dry">{contentCards[3].name}</label>
          <select id="dry" name="dry" form="register" size="2" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <p>If NO, Well Here&apos;s our dry fasting guide!</p>
  
          <p>{contentCards[4].desc}</p>
          <label htmlFor="initiated">Have you ever done a Group Pranic Initiation?</label>
          <select id="initiated" name="initiated" form="register" size="2" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <p>{contentCards[6].desc}</p>
          <label htmlFor="teacher">If Yes would you like to teach with us?</label>
          <select id="teacher" name="teacher" size="2">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="practice">What do you practice daily?</label>
          <select id="practice" name="practice" size="4" multiple>
            <option value="yoga">Yoga</option>
            <option value="meditation">Meditation</option>
            <option value="breath">Breathwork</option>
            <option value="cold">Cold Therapy</option>
          </select>

          <p>{contentCards[5].desc}</p>
          <label htmlFor="motive">{contentCards[5].name}</label>
          <select id="motive" name="motive" form="register" size="3" required>
            <option value="body">Health & Body</option>
            <option value="spirit">Spiritual Growth</option>
            <option value="joy">Inner Joy & Freedom</option>
          </select>    
      
      
      <p>{contentCards[7].name}</p>
      <p>{contentCards[7].desc}</p>

      <p>{contentCards[8].name}</p>
      <p>{contentCards[8].desc}</p>

      <input id="email" form="register" type="text" autoComplete="email" required />
      <button type="submit" form="register">Ok</button>
    
    </div>
    

  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://trello.com/b/aOOx3O4Q.json')
  const posts = await res.json()
  let contentCards = posts.cards.filter(card => {
    return card.idList == '61ba2e77d9741d7fc9a75e4d' && !card.closed;
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      contentCards,
    },
  }
}

export default Blog