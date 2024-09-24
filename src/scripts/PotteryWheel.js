let potteryId  = 1

const makePottery = (shape, weight, height) => {

return {
    shape: shape,
    weight: weight,
    height: height,
    id: potteryId++
}


}
export {makePottery}
// this function called makePottery will need (needs the parameters or defining attributes, that means a string 
// (words separated with commas) 
// in parenthesis) that directs to the function to => another function called potteryObject 
// which applies each defining attribute to its corresponding definition 
// which can in the future change but for the sake of just naming it all for now, the defining attribute 
// will equal its own defined name of the individual and corresponding attribute
// and will now be known collectively as potteryObject 
// id is an ambiguous attribute added to the list of potteryObjects that is equal to or defined as potteryId and its 
// definition is separately named as potteryId and is equal to 1
// so within the potteryObjects id is now equal to itself (potteryId) plus one every time it is Invoked or by name
// specifically implemented to achieve the result of itself (or whatever it is in the future referred to as) being 
// incremented by one each time it is invoked 
// 
//    
//  
//
//
//
//  
// 
//
//
//
//
//
//
//
//export makePottery 
//
//
//
//
//
//
//
//
