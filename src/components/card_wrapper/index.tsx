'use client'

import useViewComponent from '@/hooks/useViewComponent'
import styles from './card_wrapper.module.css'
import { ICardWrapper } from '@/interfaces/components'


export default function CardWrapper ({children}: ICardWrapper) {

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
