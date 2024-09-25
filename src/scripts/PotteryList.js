import { usePottery } from "./PotteryCatalog.js";

const potteryArray = usePottery ();







export const PotteryList = () => {
    let pottery = usePottery ()
    let res = "" 
    for (let each of pottery) {
        res += `<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">${each.shape}</h2>
  <div class="pottery__properties">
    Item weighs ${each.weight} grams and is ${each.height} cm in height
  </div>
  <div class="pottery__price">Price is \$${each.price}</div>
</section>`
    }
 return res
}
