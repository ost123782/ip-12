import { useInView } from 'react-intersection-observer'


export default function useViewComponent () {
  
  const { ref, inView, ...other } = useInView({
	  triggerOnce: true,
	  rootMargin: '-50px'
  })

  return {ref, inView, ...other}
}
