# Budget app

This site was build as a study project for Asynchronous Programming

## 0. Setup


- Need to create all separate files like `index.html`, `css` folder, `img` folder(just because it was there), `handlers` & `listeners`.

- In `index.html` build a skeleton of the app with fully customized classes connecting it with my `scripts` and `styles` files.
- In `css` folder, create `all.css` file with Font Awesome 5.3.1 ,  `bootstrap.min.css` file with Bootstrap v4.1.1 and `main.css` for customizing html
- In `handlers` i will define class `IU`
- In `listeners` will create `new UI` and will have in listen for the handler functions  

## 1. User Story: As a user I want to be able to submit budget.

- In `handlers` create `submitBudgetForm` function, have to give warning message if input has nothing or negative input 
In `listeners` have to prevent default , and when you press `submit` button, fire `submitBudgetForm` function.

## 2. User Story: As a user I want to be able to see my balance.

- In `handlers` create `showBalance` function, and have it show the balance different colors

## 3. User Story: As a user I want to be able to submit my expenses.

- In `handlers` create `submitExpenseForm` function, have to give warning message if input has nothing or negative input .
In `listeners` have to prevent default, and when you press  `submit` button, fire `submitExpenseForm` function.

## 4. User Story: As a user I want to be able to add expenses with it's title and value.

- In `handlers` create `addExpense` function, and have it show each expense in a new < div > element.

## 5. User Story: As a user I want to be able to be able to see how much money is left in balance.

- In `handlers` create `totalExpense` function, and have it show the amount that's left by counting total expenses.

## 6. User Story: As a user I want to be able to be able to edit or delete my expenses. 

- In `handlers` create `editExpense` function, and define editing and create `deleteExpense` function to delete .
- In `listeners` have function fire when it's clicked and listen for `edit-icon` click to edit  or `delete-icon` clicked to delete.