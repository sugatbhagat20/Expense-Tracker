const path = require("path");

const Expense = require("../models/ExpenseModel");

exports.getHomePage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"));
};

exports.addExpense = (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const amount = req.body.amount;
  const expense = req.body.expense;

  Expense.create({
    name: name,
    amount: amount,
    expense: expense,
  })
    .then((result) => {
      console.log("Added to Expense");
      res.redirect("/get");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getExpenses = (req, res, next) => {
  Expense.findAll()
    .then((expenses) => {
      res.json(expenses);
      // console.log(users);
    })
    .catch((err) => console.log(err));
};

exports.deleteExpense = (req, res, next) => {
  const expenseId = req.params.id;
  Expense.findByPk(expenseId)
    .then((expense) => {
      return expense.destroy();
    })
    .then((result) => res.redirect("/get"))
    .catch((err) => console.log(err));
};
