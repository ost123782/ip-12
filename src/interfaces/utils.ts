export interface IMoveSlider {
    distanceProp: number,
    moveDirection: 'left' | 'right',
    maxMoveDistance: number,
    minMoveDistance: number,
    moveDistance: number
}