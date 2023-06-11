import { IMoveSlider } from "@/interfaces/utils"

export function moveSlider({distanceProp, moveDirection, maxMoveDistance, minMoveDistance, moveDistance} : IMoveSlider) : number {

       if (maxMoveDistance === moveDistance && moveDirection) {
           return minMoveDistance
       }

       if (moveDirection === 'left') {
           return moveDistance - distanceProp                
       }

       if (moveDirection === 'right') {
           return moveDistance + distanceProp             
       }

       return 0
}
