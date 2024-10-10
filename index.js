/* 
-Unit tests: "Multiplication"

-A function called "multiplication" that returns the product of the two input numbers.

1. Expect multiplication(10, 3) to be 30.
2. Expect multiplication(0, 8) to be 0.
3. Expect multiplication(15, 3) to be 45.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

-Unit tests: "contactOdds"

-A function called "concatOdds" takes two arrays of integers as arguments. 
It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

1. Expect concatOdds([1, 2, 3], [4, 5, 6]) to return [1, 3, 5].
2. Expect concatOdds([7, 9, 11], [2, 4, 6]) to return [7, 9, 11].
3. Expect concatOdds([3, 1], [9, 15, -1]) to return [-1, 1, 3, 9, 15].

-------------------------------------------------------------------------------------------------------------------------------------------------------------

-Functional Tests: "Shopping Cart Checkout Feature"

-A shopping cart checkout feature that allows a user to check out as a guest (without an account) or as a logged-in user.
They should be asked if they want to create an account or log in if they check out as a guest.

1. When a guest checks out they should be given an option to log in or create an account.
2. When a logged-in user checks out they should be taken directly to the payment page.
3. When a user checks out with an empty cart, they should be shown an error message.
4. When a user completes payment, they should be shown an order confirmation page.
*/
