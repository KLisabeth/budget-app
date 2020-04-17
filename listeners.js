function eventListeners() {
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    //new instance of UI class
    const ui = new UI();
    //budget form submit form;
    budgetForm.addEventListener("submit", function (event) {
        event.preventDefault();
        ui.submitBudgetForm();
    });
}