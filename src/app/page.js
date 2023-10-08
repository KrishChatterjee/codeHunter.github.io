
import Blogs from '@/components/Blogs'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (

    
    <>

    <main>
      <div id={styles.homeHead} >
        <h1>Code Hunting</h1>
        <Image  className={styles.himg} src="/homeimg.jpg" width={192} height={128} alt="Picture of the author"/>
        <p>A blog for coders ready to hunt code</p>
      </div>
      <Blogs/>
    </main>
    </>
  )
}
