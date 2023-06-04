import useBurger from '@/hooks/useBurger'
import { Burger_context } from './burger_context'

function BurgerContext({children} : {
    children : React.ReactNode
}) {
    const burger = useBurger()
  return (
    <Burger_context.Provider value={burger}>
        {children}
    </Burger_context.Provider>
  )
}

export default BurgerContext