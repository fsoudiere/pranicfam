import styles from '../styles/Home.module.css'

// posts will be populated at build time by getStaticProps()
function Blog({ contentCards }) {
  console.log(contentCards)
  return (
    <div className={styles.main}>
      <p>{contentCards[0].desc}</p>
      <p>{contentCards[0].name}</p>
      <p>{contentCards[1].desc}</p>
      <p>{contentCards[1].name}</p>
      <p>{contentCards[2].desc}</p>
      <p>{contentCards[2].name}</p>
      <p>{contentCards[3].desc}</p>
      <p>{contentCards[3].name}</p>
      <p>{contentCards[4].desc}</p>
      <p>{contentCards[4].name}</p>
      <p>{contentCards[5].desc}</p>
      <p>{contentCards[5].name}</p>
      <p>{contentCards[6].desc}</p>
      <p>{contentCards[6].name}</p>
      <p>{contentCards[7].desc}</p>
      <p>{contentCards[7].name}</p>
      <p>{contentCards[8].desc}</p>
      <p>{contentCards[8].name}</p>
    
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