'use client'

import styles from './imageSection.module.css'
import {ImageSectionInf} from '@/interfaces/components'
import useViewComponent from '@/hooks/useViewComponent'

export default function ImageSection ({children, image, titleText, descriptionText}: ImageSectionInf) {
    const {ref, inView} = useViewComponent()

    return (
        <section
            style={{backgroundImage: `url(${image})`}}
            className={styles.image__welcome}
            ref={ref}
        >
            <div className={inView ? styles.active : undefined}>
                <h1>{titleText}</h1>
                {descriptionText && <p>{descriptionText}</p>}
                {children}
            </div>
        </section>
    )
}
