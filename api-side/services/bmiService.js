// require the database connection


// for documentation see: https://www.npmjs.com/package/validator
const validator = require('validator');

// functio to validate an id
// An id is a positive number with no sign (+,-, etc.)
// return Not a number or else cast as Number and return
//
function validateData(num) {
    if (validator.isNumeric(num, { no_symbols: true })) {
        return Number(num);
    }
    return NaN;
}



function calculateBMI(height, weight) {

    if (validateData(height, { no_symbols: true }) && validateData(weight, { no_symbols: true })) {

        let newHeight = height * height;

        let result = height / (weight * weight);

        if (result < 18.5) {

            var obj = JSON.parse(`{ "value":"${result}", "result":"underweight"}`);
            return obj
            data: { data2: f }

            return
            // `
            // "
            // "value":${result},
            // result: 'underweight'
            // "
            // `
        }
        else if (result < 24.9 && result > 18.5) {

            var obj = JSON.parse(`{ "value":"${result}", "result":"underweight"}`);
            return obj
        }
        else if (result < 29.9 && result > 25.0) {

            var obj = JSON.parse(`{ "value":"${result}", "result":"overwirght"}`);
            return obj
        }
        else if (result > 30.0) {

            var obj = JSON.parse(`{ "value":"${result}", "result":"pbese"}`);
            return obj
        }
    }

    // return product
    else {
        return "Invalid Data";
    }

}





// Module exports
// expose these functions
module.exports = {
    calculateBMI
}