# The Hairy Potter

In this project, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show. Then you will display the pottery to be sold in the DOM.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

```sh
cd hairy-potter
cd src
code .
```

1. Run the `serve` command to start the web server.
1. Open the URL provided by `serve` in your browser.

## Requirements

### Making Pottery at the Wheel

1. Create a `scripts/PotteryWheel.js` module.
1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
   1. Shape of the piece of pottery (e.g. "Mug", "Platter")
   1. Weight of the piece (e.g. 1, 5)
   1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
   1. `shape`
   1. `weight`
   1. `height`
   1. `id` _(increment this value each time the function is invoked)_

#### Checking Your Work

In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

Once you have it working, make 5 pieces of pottery in `main.js`.

**THEN PUSH YOUR CODE TO GITHUB**

### Firing the Pottery in the Kiln

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
   1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
   1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object.
1. The function must add a new property of `cracked` to the object.
   1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
   1. If the temperature of the kiln is at, or below, 2200 degrees then `cracked` property must have a value of `false`.
1. After both of the new properties have been added, return the augmented object.

#### Checking Your Work

In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

**THEN PUSH YOUR CODE TO GITHUB**

### Pricing Uncracked Pottery

1. Create a `scripts/PotteryCatalog.js` module.
1. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the piece of pottery is cracked, do not add a `price` property to it.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Return the augmented object.
1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

#### Checking Your Work

In the `main.js` module, invoke the `toSellOrNotToSell` function for each of the 5 pieces of pottery you created. Ensure you provide the required value as an argument.

**THEN PUSH YOUR CODE TO GITHUB**

### Display the Catalog

Your next task is to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

#### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `potteryList`.

#### Create Pottery HTML

1. Create a `scripts/PotteryList.js` module.
1. Define and export a `PotteryList` function.
1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
   ```html
   <section class="pottery" id="pottery--1">
     <h2 class="pottery__shape">Mug</h2>
     <div class="pottery__properties">
       Item weighs 3 grams and is 6 cm in height
     </div>
     <div class="pottery__price">Price is $20</div>
   </section>
   ```
1. The `PotteryList` function must then return a single string that contains ALL of the pottery HTML representation.

#### Checking Your Work

In the `main.js` module, invoke the `PotteryList` component function. Take its return value and update the inner HTML of the article element you created above. When you start your web server, you should see your non-cracked pottery list appear (_example below_).

![example output](./src/images/pottery.png)

**THEN PUSH YOUR CODE TO GITHUB**


## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Explain how you got the HTML, with the correct data, displayed in the browser?
   > In the index tab I added potteryList as an article and then referenced the main.js module as the source of that article. When referenced in the main.js module I invoked the functions of the creation of the PotteryList and the list itself as well as referenced the article asking it to refer to the document by element tag name in the innerHTML and exported the function for the un-cracked pottery to be used to retrieved the specific information to be shown on the browser. 
2. In the **PotteryList** module, when you iterate your pottery, you need to show the evidence of what the **weight** property's value is for the 2nd piece of pottery. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   > https://www.loom.com/share/cc7ff12eca3e4a30a2bd9e7b8df6ce73?sid=29d4acc0-e870-4299-9c15-c18d7805594f
3. The **PotteryWheel** module has a single function named `makePottery`. Why doesn't that module have all of the other code in it?
   > The single function makePottery is the only function in this module, following a common principle in JAVA script called the single responsibility principle.  By the nature of a function itself it defines many different defining attributes associated with the given pottery as well as the definition of those attributes.  The following is an explanation of the inner workings of the function makePottery as it relates to the single responsibility principle. 

   This function called makePottery contains parameters (defining attributes), that will be shown as string (words separated with commas). 
This string then directs that function to (=>) another function called potteryObject, which applies each defining attribute to its corresponding definition. The single responsibility principle is clear in the following description of this particular function:  
These attributes can  and will change in the future but according to the single responsibility principle (for the sake of just assigning them each a definition), the defining attribute will equal its own defined name of the individual and corresponding attribute and will now be known collectively as the function potteryObject.  This allows for any of these attributes and or their definitions to be used interchangeably in future modules and functions by referring to this one function that has but one purpose, to name and define the parameters of the function only thus allowing it to be used as a reference or guide for information that can change in its contents but not its parameters.  This can be useful for projects with frequently changing information that needs to be applied to different operations and functions.    

The id is an ambiguous attribute added to the list of potteryObjects that is equal to or defined as potteryId and its definition is separately named as potteryId and is equal to 1. Therefor within the potteryObjects function the id is now equal to itself (potteryId) plus one every time it is invoked (id++) or by name. This is specifically implemented to achieve the result of itself (or whatever it is, in the future referred to as) being 
incremented by one each time it is invoked. 

4. The pottery shop has learned that there is a set of customers that are willing to buy cracked pottery at a discounted price of $2.50. That means that the cracked pottery should now be displayed in the catalog. Explain the changes that this new business strategy would cause to your algorithm.
   > The algorithm currently states that if not even one piece of pottery is cracked the flow of operations must continue unless the weight of the pottery is greater than 6.  If this is the case, the price will be 40 dollars.  The current algorithm further states that if there is no cracked pottery and no pieces weigh more than 6 the price will be 20 dollars.  This is represented in the for loop function containing if, else if and else functions. If the current algorithm were changed to allow for cracked pottery to be bought at a price of 2 dollars and 50 cents, the following changes would need to be made to this for loop function:
   1.  Change the if statement to represent un-cracked pottery.  
   This would, in the proposed algorithim, lead the operation to the conclusion that no pieces of uncracked pottery do exsist, or that in fact there are pieces of cracked pottery available to sell, it would then flow to  
   2. an else if function stating that if there are no cracked pottery to sell    
5. In the **Kiln** module, you have a `firePottery()` function. You need to demonstrate how to use the debugger to verify the values of the parameters for that function when your code runs. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   > https://www.loom.com/share/56cce49cf857487ea02eb4fdb160a6c8?sid=4ad262f5-a492-4e86-be17-0d52851ce46a
