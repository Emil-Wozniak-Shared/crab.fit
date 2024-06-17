import localFont from 'next/font/local'
import Link from 'next/link'

import { useTranslation } from '/src/i18n/server'
import { makeClass } from '/src/utils'

import styles from './Header.module.scss'

const samuraiBob = localFont({
  src: './samuraibob.woff2',
  fallback: ['sans-serif'],
})
const molot = localFont({
  src: './molot.woff2',
  fallback: ['sans-serif'],
})

interface HeaderProps {
  /** Show the full header */
  isFull?: boolean
  isSmall?: boolean
}

const IMG = `https://static.vecteezy.com/system/resources/previews/017/371/859/original/canoeing-minimal-infographic-banner-vector.jpg`;

const Header = async ({ isFull, isSmall }: HeaderProps) => {
  const { t } = await useTranslation(['common', 'home'])
  return <header className={styles.header} data-small={isSmall}>
            <img style={{width: "100%"}} src={IMG} />
         </header>;

  // return <header className={styles.header} data-small={isSmall}>
  //   {isFull ? <>
  //     <span className={makeClass(styles.subtitle, samuraiBob.className, !/^[A-Za-z ]+$/.test(t('home:create')) && styles.hasAltChars)}>{t('home:create')}</span>
  //     <h1 className={makeClass(styles.bigTitle, molot.className)}>CRAB FIT</h1>
  //   </> : <Link href="/" className={styles.link}>
  //     <div className={styles.top}>
  //       <span className={makeClass(styles.title, molot.className)}>CRAB FIT</span>
  //     </div>
  //     <span className={styles.tagline}>{t('common:tagline')}</span>
  //   </Link>}
}

export default Header
