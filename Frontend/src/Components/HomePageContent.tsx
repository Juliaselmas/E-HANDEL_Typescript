import HomePageImage from './HomePageImage'
import HomePageTextContainer from './HomePageTextContainer'

import styles from "./HomePageContent.module.css" 

const HomePageContent = () => {
  return (
    <section className={styles.homePageContent}>
      <HomePageImage/>
      <HomePageTextContainer/>
      
   
    </section>
  )
}

export default HomePageContent