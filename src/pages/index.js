import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import C26 from './c26.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLaptopHouse, faLock, faLaptopFile, faLegal } from '@fortawesome/free-solid-svg-icons';
import FiveEyes from './fiveEyes.js';
import FooterCard from './FooterCard.js';
import ThirdCard from './ThirdCard.js';


const inter = Inter({ subsets: ['latin'] });

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerIcon}>
        <FontAwesomeIcon icon={faLegal} />
      </div>
      <br/>
      <h1 className={styles.title}>Pass the <i>Cybersecurity Act (C-26)</i></h1>
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerlinks}>
          <a href="#">Made in Canada by Ashar Ahmed.</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Pass the Cybersecurity Act</title>
        <meta name="description" content="A site dedicated to displaying the importance of cyber." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          
          <Header />
          
          <div className={`${styles.padding} ${styles.cardcontainer}`}>
            <C26 /><br/>
            <FiveEyes/><br/>
            <ThirdCard/><br/>
            <FooterCard className={styles.footerCard}/>
          </div>
          
        </div>
        
      </main>
      
    </>
  );
}
