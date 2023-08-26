'use client'

import styles from './imageWelcome.module.css'
import {ImageWelcomeInf} from '@/interfaces/components'
import useViewComponent from '@/hooks/useViewComponent'

export default function ImageWelcome ({children, image, titleText, descriptionText}: ImageWelcomeInf) {

    const {ref, inView} = useViewComponent()

    return (
        <section
            style={{backgroundImage: `url(${image})`}}
            className={styles.image__welcome}
            ref={ref}
        >
            <div className={inView ? styles.active : undefined}>
                <h1>{titleText}</h1>
                <p>{descriptionText}</p>
                {children}
            </div>
        </section>
    )
}
