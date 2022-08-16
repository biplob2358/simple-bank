document.getElementById("deposite-btn").addEventListener("click", function () {
  //input
  const depositeElement = document.getElementById("input-deposite");
  const newDepositeTotalString = depositeElement.value;
  const newDeposite = parseFloat(newDepositeTotalString);
  if (isNaN(newDeposite)) {
    alert("Please provide a valid ammount");
    return;
  }

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

//withdraw

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawElement = document.getElementById("input-withdraw");
  const newWithdrawTotalString = newWithdrawElement.value;
  const newWithdrawTotal = parseFloat(newWithdrawTotalString);

  newWithdrawElement.value = "";

  if (isNaN(newWithdrawTotal)) {
    alert("Please Enter valid ammount");
    return;
  }

  //previouswithdraw
  const previousWithdrawElement = document.getElementById("withdraw");
  const previousWithdrawTotalString = previousWithdrawElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //balance
  const previousBalanceElement = document.getElementById("balance");
  const previousBalanceTotalSring = previousBalanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalSring);

  if (previousBalanceTotal < newWithdrawTotal) {
    alert("insufecent balance");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;
  previousWithdrawElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
  previousBalanceElement.innerText = newBalanceTotal;
});
document.getElementById("logut").addEventListener("click", function () {
  window.location.href = "index.html";
});
