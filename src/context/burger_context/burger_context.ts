import IBurgerContext from '@/interfaces/inf_burger_context'
import { createContext, useState } from 'react'

const DEFAULT_BURGER_STATE ={
    isOpen: false,
    setOpen: () => {} 
}

export const Burger_context = createContext<IBurgerContext>(DEFAULT_BURGER_STATE)