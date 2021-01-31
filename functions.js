const { countries } = require("./countries");

const getNameByCode = (code) => {
    // Can take the alpha-2 or alpha-3 code
    for(let i = 0; i < countries.length; i++) {
        if (countries[i]["alpha-2"].toLowerCase() === code.toLowerCase() || countries[i]["alpha-3"].toLowerCase() === code.toLowerCase()) {
            return countries[i].name;
        }
    }
    return "Cannot find this country"
    
}

const getCodeByName = (name) => {
    for(let i = 0; i < countries.length; i++) {
        if (countries[i].name.toLowerCase() === name.toLowerCase()) {
            return [countries[i]["alpha-2"], countries[i]["alpha-3"]];
        }
    }
    return "Cannot find this country"
}

exports.getCodeByName = getCodeByName;
exports.getNameByCode = getNameByCode;

