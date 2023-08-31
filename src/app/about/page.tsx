
import CardWrapper from '@/components/card_wrapper'
import styles from './about.module.css'
import image_welcome from '@/assets/image__welcome1.jpg'
import about__bg from '@/assets/about__bg.jpg'
import Image from 'next/image'
import Slider from '@/components/slider'
import ImageSection from '@/components/image_section'
import LinkButton from '@/ui/link_button'

export const metadata = {
    title: 'ІП-12, Про нас',
}


export default function AboutPage() {

	return (
			<main className={styles.main}>
				<ImageSection
					titleText={'Про нас'}
					image={about__bg.src}
				/>
				<div className={styles.main__container}>
					<CardWrapper >
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
					</CardWrapper>
					<CardWrapper >
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
					</CardWrapper>
					<CardWrapper>
						<h1>Test</h1>
						<ol
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
						</ol>
					</CardWrapper>
					<Slider images={[image_welcome.src, image_welcome.src, image_welcome.src, image_welcome.src]}/>

					<LinkButton link={'/'} title={'Далі'} />
				</div>

			</main>
		)
}