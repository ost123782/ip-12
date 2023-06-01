import styles from './imageWelcome.module.css'
import {ImageWelcomeInf} from '@/interfaces/image_welcome'

export default function image_welcome ({image, titleText, descriptionText}: ImageWelcomeInf) {
    return (
        <section
            style={{backgroundImage: `url(${image})`}}
            className={styles.image__welcome}
        >
            <div>
                <h1>{titleText}</h1>
                <p>{descriptionText}</p>
            </div>
        </section>
    )
}