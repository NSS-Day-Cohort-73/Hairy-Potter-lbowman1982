import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Imports go first



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4)
let platter = makePottery("platter", 4, 6)
let cup = makePottery("cup", 6, 8)
let plate = makePottery("plate", 8, 10)
let bowl = makePottery("bowl", 12, 14)





// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2300)
platter = firePottery(platter,700)
cup = firePottery(cup,5)
plate = firePottery(plate,7000)
bowl = firePottery(bowl,50)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

