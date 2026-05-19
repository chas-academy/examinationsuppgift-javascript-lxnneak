let balance = 0

const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balanceDisplay = document.getElementById("balance")

function addTransaction(type) {
  const desc = descInput.value.trim()
  const amount = parseFloat(amountInput.value)

  if (desc === "" || amountInput.value.trim() === "" || isNaN(amount)) {
    return
  }

  const listItem = document.createElement("li")

  if (type === "income") {
    listItem.textContent = `${desc} - ${amount} kr (Inkomst)`
    incomeList.appendChild(listItem)
    balance += amount
  } else {
    listItem.textContent = `${desc} - ${amount} kr (Utgift)`
    expenseList.appendChild(listItem)
    balance -= amount
  }

  balanceDisplay.textContent = balance.toString()

  descInput.value = ""
  amountInput.value = ""
}

incomeBtn.addEventListener("click", function () {
  addTransaction("income")
})

expenseBtn.addEventListener("click", function () {
  addTransaction("expense")
})
