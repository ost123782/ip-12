import { IBurgerContext } from '@/interfaces/context'
import { createContext, useState } from 'react'

const DEFAULT_BURGER_STATE ={
    isOpen: false,
    setOpen: () => {} 
}

export const Burger_context = createContext<IBurgerContext>(DEFAULT_BURGER_STATE)