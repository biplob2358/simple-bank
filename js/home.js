document.getElementById("deposite-btn").addEventListener("click", function () {
  //input
  const depositeElement = document.getElementById("input-deposite");
  const newDepositeTotalString = depositeElement.value;
  const newDeposite = parseFloat(newDepositeTotalString);

  //previousDeposite
  const previousDepositeElement = document.getElementById("deposite");
  const previousDepositeString = previousDepositeElement.innerText;
  const previousDeposite = parseFloat(previousDepositeString);

  const currentDeposite = previousDeposite + newDeposite;
  previousDepositeElement.innerText = currentDeposite;

  //balance
  const balanceElement = document.getElementById("balance");
  const previousBalanceTotalSring = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalSring);

  const currentBalanceTotal = previousBalanceTotal + newDeposite;
  balanceElement.innerText = currentBalanceTotal;

  depositeElement.value = "";
});
