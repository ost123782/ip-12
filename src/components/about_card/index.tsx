import styles from './about_card.module.css'
import Image from 'next/image'

export default function AboutCard ({imageSrc, articleText}: {imageSrc: string, articleText: string}) {


	return (
			<article
				className={styles.about__card}
			>
				<Image
					width={500}
					height={500}
					alt={'card__image'}
					src={imageSrc}
				/>	
				<p>
				{articleText}
				</p>
			</article>
		)
}
