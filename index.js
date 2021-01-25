#!/usr/bin/env node

console.log("Hello, Node.JS!");


const axios = require('axios').default;
const countryList = require('country-list');
let argmt = process.argv.slice(2);
let year = argmt[0];
let name = argmt [1];

async function getUser(year, name) {
    try {
        if(countryList.getCode(name)!= undefined)
        {
            let code = countryList.getCode(name);
            const response = await axios.get('https://date.nager.at/api/v2/publicholidays/'+year + "/"+code+'');
            console.log(response);
        }
        else
        {
            console.log("flute, votre code pays est incorrect");
        } 
      
    } catch (error) {
      console.error(error);
      console.log("aie aie aie");
      
    }
  }
getUser(year,name);
 
  
  
