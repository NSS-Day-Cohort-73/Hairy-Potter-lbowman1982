const firePottery = (obj, temp) => {
    obj.fired = true
    if (temp>2200) {
        obj.cracked = true 
    }
        else {
            obj.cracked = false
        }
        return obj
}











export {firePottery}