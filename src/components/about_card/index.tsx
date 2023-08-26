'use client'

import { useInView } from 'react-intersection-observer'
import styles from './about_card.module.css'


export default function AboutCard ({children}: {children: React.ReactNode}) {

const { ref, inView,  } = useInView({
	triggerOnce: true,
	rootMargin: '-50px'
})


return (
	<article
		className={inView ? styles.about__card_active : styles.about__card}
		ref={ref}
	>
		{children}
	</article>
)
}
