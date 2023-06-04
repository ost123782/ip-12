import IBurgerContext from '@/interfaces/inf_burger_context'
import { useCallback, useState } from 'react'

export default function useBurger (): IBurgerContext {
    const [isOpen, setStOpen] = useState(false)

    const setOpen = useCallback((currentStOpen: boolean): void => {
        setStOpen(currentStOpen)
    }, [])

    return {
        isOpen,
        setOpen
    }
}