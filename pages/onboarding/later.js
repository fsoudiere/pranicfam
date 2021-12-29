import styles from '../../styles/Home.module.scss'
import Link from 'next/link';

function Later({ contentCards, updateFormData, ...formData }) {

  console.log(formData);

  return (
    <div className={styles.main}>

      <section className="bubble" id="apply-bubble">
           <p>Oops {formData.name}! Based on your answers, it looks like we might not be the right fit for you. Feel free to reapply at a later time. May you be joyful, and free!</p>
      </section>

      <Link href="/onboarding"><a>Back </a></Link>
    
    </div>
    

  )
}



export default Later