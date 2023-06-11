'use client'

import styles from './slider.module.css'
import Image from 'next/image'
import about__image from '@/assets/about__card_1.jpg'
import about__image2 from '@/assets/about__card_2.jpg'
import about__image3 from '@/assets/vitalya.jpg'
import { useState } from 'react'
import { moveSlider } from '@/utils/slider'

function Slider({images} : {images: string[]}) {

    const [moveDistance, setMoveDistance] = useState(0)



  return (
        <div className={styles.slider}>
            <div className={styles.slider__container}>
                <div 
                style={{
                    transform: `translateX(${moveDistance}px)`,
                    width: `${images.length * 700}px`
                    }}
                className={styles.slider__line}
                >
                    {images.map((image, index) => 
                            <Image
                            width={700}
                            height={500}
                            src={image}
                            key={image + index}
                            alt='test'
                            />
                        )
                    }
                </div>
            </div>
            <div className={styles.slider__navigation}> 
                <button className={styles.slider__button}
                onClick={() => 
                    setMoveDistance(moveSlider({
                        distanceProp: 700, 
                        moveDirection: 'right',
                        maxMoveDistance: 0,
                        minMoveDistance: -700 * (images.length - 1),
                        moveDistance
                    }))    
                    }
                    >{'<'}
                </button>

                <button className={styles.slider__button}
                onClick={() =>
                    setMoveDistance(moveSlider({
                        distanceProp: 700,
                        moveDirection: 'left',
                        maxMoveDistance: -700 * (images.length - 1),
                        minMoveDistance: 0,
                        moveDistance
                    }))
                    }
                    >{'>'}
                </button>
            </div>
    </div>
  )
}

export default Slider