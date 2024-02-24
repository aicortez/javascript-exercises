const finalList = [];
const removeFromArray = function(listOfNumbers, ...numbersToRemove) {
    for (let i = 0; i < listOfNumbers.length; i++) {
        for (let j = 0; j < numbersToRemove.length; j++) {
            if (listOfNumbers[i] == numbersToRemove[j]) {
                listOfNumbers.splice(listOfNumbers.indexOf(listOfNumbers[i]),1);
                finalList.push(listOfNumbers[i])
            }
        }
    }
    return finalList
};

//  console.log(listOfNumbers.indexOf(2)) -> Identify index of the number that needs to be removed

// removeFromArray([1,2,3,4],3,2);
// console.log("Final list: ",finalList);

// Do not edit below this line
module.exports = removeFromArray;