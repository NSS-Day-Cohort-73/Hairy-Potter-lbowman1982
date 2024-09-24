const potteryToSell = []
const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked) {
        return potteryObject
    }
    else if (potteryObject.weight >= 6) {
        potteryObject.price = 40;
    } 
    else {potteryObject.price = 20;
    }
    
    potteryToSell.push(potteryObject);

     return potteryObject;

};

const usePottery = () => {
    return potteryToSell;
};
export {toSellOrNotToSell, usePottery}
