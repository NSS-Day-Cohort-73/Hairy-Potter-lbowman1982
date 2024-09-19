let i = 1

const makePottery = (shape, weight, height) => {

return {
    shape: shape,
    weight: weight,
    height: height,
    id: i++
}


}
export {makePottery}