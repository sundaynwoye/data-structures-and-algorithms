/**
 * Dynamic Programming
 */


/*--------Best Time to Buy and Sell Stock----------*/
const maxProfit = (prices) => {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        let temProfit = prices[i+1] - prices[i];
        if (temProfit > 0) {
            if (prices[i] < buyPrice) {
                buyPrice = prices[i];
            }
            if (prices[i+1] - buyPrice > profit) {
                profit = prices[i+1] - buyPrice;
            }
        }
    }

    return profit;
}

console.log(maxProfit([7,1,5,3,6,4]));