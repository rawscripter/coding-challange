// Create function to convert given string to the output below

// Input
const optionRule = '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339}) ';

// Output Example
// const output = {
//     and: [
//         1069,
//         { or: [1070, 1071, 1072] },
//         1244,
//         { or: [1245, 1339] },
//     ]
// };


function convertString(optionRule) {
    optionRule = optionRule.replace("{", " ");
    optionRule = optionRule.replace("}", " ");
    optionRule = optionRule.replace("(", " ");
    optionRule = optionRule.replace(")", " ");
    andRules = optionRule.split(" AND ");

    let output = {};
    output.and = andRules.map(function (item) {
        if (item.includes("OR")) {
            item = item.split(" OR ");
            // /[' {1070}', '{1071}', '{1072} ']
            item = item.map(function (item) {
                return Number(item.replace(/\D/g, ''));
            });
            return { or: item };
        } else {
            item = Number(item.replace(/\D/g, ''));
            return item;
        }
    });

    return output;
}

const result = convertString(optionRule);

console.log(result);