'use client'

import useViewComponent from '@/hooks/useViewComponent'
import styles from './about_card.module.css'


export default function AboutCard ({children}: {children: React.ReactNode}) {

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
