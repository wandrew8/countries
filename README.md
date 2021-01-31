# Countries-getter NPM Package

# Installation

`npm i countries-getter --save`

## Available Functions
1. getCodeByName(nameOfCountry) 
    Returns an array of country codes for the country specified
    Ex. getCodeByName("Cambodia") // ["KH", "KHM"]

2. getNameByCode(countryCode)
    Returns the name of the country given the alpha-2 or alpha-3 country code
    Ex. getNameByCode("KH" || "KHM") // "Cambodia"

## How to use

const countriesGetter = require("countries-getter")

const countryCode = countriesGetter.getNameByCode("KH");
console.log(countryCode);

const countryName = countriesGetter.getCodeByName("Cambodia");
console.log(countryName);