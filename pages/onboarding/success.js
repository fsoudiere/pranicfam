import styles from '../../styles/Home.module.css'
import Link from 'next/link';

function Success({ contentCards, updateFormData, ...formData }) {

  console.log(formData);

  return (
    <div className={styles.main}>

      <section className="bubble" id="success-bubble">
           <p>Welcome to the Family {formData.name}! Here is the group Telegram where you can finalize your subscription:</p>
      </section>

      <Link href="http://telegram.com"><a>Join </a></Link>
    
    </div>
    

  )
}



export default Success