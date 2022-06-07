// let bestArr = [15, 10, 22, 1, 9]
// function best(bestArr){
//     for(i = 0; i < bestArr.length; i++)
//      return Math.max(...bestArr) - Math.min(...bestArr)
//     }
//     console.log(best(bestArr))
//     console.log(`Buy at ${Math.min(...bestArr)}, sell at ${Math.max(...bestArr)}`)
// doesnt work
// function best(bestArr, lenghtArr) {
//     let ind1 = 0;
//     for (i = lenghtArr - 1; i > 0; i--){
//         if (bestArr[0] !== bestArr[i]) {
//             ind1 = i;
//             break;
//         }
//     }

//     let ind2 = 0;
//     for (i = 0; i < lenghtArr - 1; i++){
//         if (bestArr[lenghtArr - 1] !== bestArr[i]) {
//             ind2 = (lenghtArr - 1 - i);
//             break;
//         }
//     }

//     return Math.max(ind1, ind2) - Math.min(ind1, ind2);
// }

// let bestArr = [15, 10, 22, 1, 9]
// let lenghtArr = bestArr.length
// console.log(best(bestArr, lenghtArr))


let bestArr = [15, 10, 22, 1, 9]

function best(arr) {
    let maxProfit = 0

    for(let i = 0; i < arr.length; i++){
        let currentBuyValue = arr[i]
        for (let k = i + 1; k < arr.length; k++){
        let currentSellValue = arr[k]
        let currentProfit = currentSellValue - currentBuyValue
        if (currentProfit > maxProfit){
            maxProfit = currentProfit
        }
    }
    }
}
console.log(best(bestArr))