import styles from './link_button.module.css'
import { ILinkButton } from '@/interfaces/ui'
import Link from 'next/link'
import React from 'react'

function LinkButton({link, title} : ILinkButton) {
  return (
        <Link className={styles.link__button}  href={link}>{title}</Link>
  )
}

export default LinkButton