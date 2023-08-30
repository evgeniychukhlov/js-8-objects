"use strict";

const priceData = {
  apples: '23.4',
  bANANAS: '48',
  oRAngGEs: '48.7584',
};

let updatedPriceData = {};
for (const key in priceData){
       
 const lowerCasedKey = key.toLowerCase();
   
 const updatedPrice = parseFloat(priceData[key]).toFixed(2);
 updatedPriceData [lowerCasedKey] = updatedPrice;
  }


console.log(updatedPriceData);


