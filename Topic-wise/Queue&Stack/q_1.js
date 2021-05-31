/*
Online Stock Span

Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards)

for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85],

then the stock spans would be [1, 1, 1, 2, 1, 4, 6].
*/

/*
For each element, we should find the index of Previous Greater Element and compute the distance from current element. 

We can do this using Stack.

We don't have index for elements since we don't maintain an array for elements. Hence,
we will record span for each price in stack.

Until stack's last element is greater element or empty, we keep popping elements from stack.
We add popped elements' span to current span.
Push current price and span as an object into stack and return span.
*/

var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1].price <= price
  ) {
    let popped = this.stack.pop();
    span += popped.span;
  }
  this.stack.push({ price: price, span: span });
  return span;
};
