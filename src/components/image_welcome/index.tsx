'use client'

import styles from './imageWelcome.module.css'
import {ImageWelcomeInf} from '@/interfaces/components'
import {useInView} from 'react-intersection-observer'

export default function ImageWelcome ({children, image, titleText, descriptionText}: ImageWelcomeInf) {

    const { ref, inView,  } = useInView({
        triggerOnce: true,
        rootMargin: '-50px'
    })

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