
import AboutCard from '@/components/about_card'
import styles from './about.module.css'
import image_welcome from '@/assets/image__welcome1.jpg'
import Image from 'next/image'

export const metadata = {
    title: 'ІП-12, Про нас',
}

export default function AboutPage() {

	return (
			<main className={styles.main}>
				<div className={styles.main__container}>
					<AboutCard >
						<Image
						width={400}
						height={400}
						alt={'card__image'}
						src={image_welcome.src}
						className={styles.card__image}
						/>	
						<p>
							lorem ispum dolor sit amet
						</p>	
					</AboutCard>
					<AboutCard >
						<Image
						width={400}
						height={400}
						alt={'card__image'}
						src={image_welcome.src}
						className={styles.card__image}
						/>	
						<p>
							lorem ispum dolor sit amet
						</p>	
					</AboutCard>
					<AboutCard>
						<h1>Test</h1>
						<ul 
							style={{listStyleType: 'none'}}
						 	className={styles.card__list}
						 >
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
							<li>test</li>
						</ul>
					</AboutCard>
				</div>
			</main>
		)
}