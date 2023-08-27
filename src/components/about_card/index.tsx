'use client'

import useViewComponent from '@/hooks/useViewComponent'
import styles from './about_card.module.css'
import { IAboutCard } from '@/interfaces/components'


export default function AboutCard ({children}: IAboutCard) {

  const { ref, inView } = useViewComponent()

  return (
	  <article
		  className={inView ? styles.about__card_active : styles.about__card}
		  ref={ref}
	  >
		  {children}
	  </article>
  )
}
