import IBurgerContext from '@/interfaces/context'
import { useCallback, useState } from 'react'

export default function useBurger (): IBurgerContext {
    const [isOpen, setStOpen] = useState(false)

    const setOpen = useCallback((currentStOpen: boolean): void => {
        setStOpen(currentStOpen)
        document.body.style.overflow = !currentStOpen ? 'auto' : 'hidden'
    }, [])

    return {
        isOpen,
        setOpen
    }
}