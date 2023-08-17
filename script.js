const propertiesInput = document.getElementById("propertiesInput");
const equipmentInput = document.getElementById("equipmentInput");
const carpoolInput = document.getElementById("carpoolInput");
const bankInput = document.getElementById("bankInput");
const checkoutInput = document.getElementById("checkoutInput");
const requirementsInput = document.getElementById("requirementsInput");
const goodsInput = document.getElementById("goodsInput");
const capitalInput = document.getElementById("capitalInput");
const loanInput = document.getElementById("loanInput");
const servicesInput = document.getElementById("servicesInput");
const shortTermLoanInput = document.getElementById("shortTermLoanInput");
const sendBtn = document.getElementById("sendBtn");

const liquidity1Result = document.getElementById("liquidity1Result");
const liquidity2Result = document.getElementById("liquidity2Result");
const liquidity3Result = document.getElementById("liquidity3Result");
const equityRatioResult = document.getElementById("equityRatioResult");
const leverageResult = document.getElementById("leverageResult");

const liquidity1Field = document.getElementById("liquidity1Field");
const liquidity2Field = document.getElementById("liquidity2Field");
const liquidity3Field = document.getElementById("liquidity3Field");
const equityRatioField = document.getElementById("equityRatioField");
const leverageField = document.getElementById("leverageField");

const calculateLiquidity1 = () => {
  let top = parseInt(checkoutInput.value) + parseInt(bankInput.value);
  let bottom =
    parseInt(servicesInput.value) + parseInt(shortTermLoanInput.value);
  let result = parseInt((top / bottom) * 100);
  return result;
};

const calculateLiquidity2 = () => {
  let top =
    parseInt(checkoutInput.value) +
    parseInt(bankInput.value) +
    parseInt(requirementsInput.value);
  let bottom =
    parseInt(servicesInput.value) + parseInt(shortTermLoanInput.value);
  let result = parseInt((top / bottom) * 100);
  return result;
};

const calculateLiquidity3 = () => {
  let top =
    parseInt(checkoutInput.value) +
    parseInt(bankInput.value) +
    parseInt(requirementsInput.value) +
    parseInt(goodsInput.value);
  let bottom =
    parseInt(servicesInput.value) + parseInt(shortTermLoanInput.value);
  let result = parseInt((top / bottom) * 100);
  return result;
};

const calculateInvestmentCoverage = () => {
  let investmentAsset =
    parseInt(propertiesInput.value) +
    parseInt(equipmentInput.value) +
    parseInt(carpoolInput.value);
  let result = (parseInt(capitalInput.value) / investmentAsset) * 100;
  return parseInt(result);
};

const calculateUseOfFundsSum = () => {
  result =
    parseInt(propertiesInput.value) +
    parseInt(equipmentInput.value) +
    parseInt(carpoolInput.value) +
    parseInt(bankInput.value) +
    parseInt(checkoutInput.value) +
    parseInt(requirementsInput.value) +
    parseInt(goodsInput.value);
  return result;
};

const calculateSourceOfFundsSum = () => {
  result =
    parseInt(capitalInput.value) +
    parseInt(loanInput.value) +
    parseInt(servicesInput.value) +
    parseInt(shortTermLoanInput.value);
  return result;
};

const calculateEquityRatio = (sourceOfFundsSum) => {
  result = (parseInt(capitalInput.value) / sourceOfFundsSum) * 100;
  return parseInt(result);
};

const calculateLeverage = () => {
  let borrowedCapital =
    parseInt(loanInput.value) +
    parseInt(servicesInput.value) +
    parseInt(shortTermLoanInput.value);
  result = (borrowedCapital / parseInt(capitalInput.value)) * 100;
  return parseInt(result);
};

const setAlertFieldClass = (FieldElement, Field, minField) => {
  if (Field < minField) {
    FieldElement.classList.add("alert-danger");
    FieldElement.classList.remove("alert-success");
    FieldElement.getElementsByTagName("img")[0].src = "sad.png";
  } else {
    FieldElement.classList.remove("alert-danger");
    FieldElement.classList.add("alert-success");
    FieldElement.getElementsByTagName("img")[0];
    FieldElement.getElementsByTagName("img")[0].src = "happiness.png";
  }
};

const setAlertFieldClassMax = (FieldElement, Field, maxField) => {
  if (Field >= maxField) {
    FieldElement.classList.add("alert-danger");
    FieldElement.classList.remove("alert-success");
    FieldElement.getElementsByTagName("img")[0].src = "sad.png";
  } else {
    FieldElement.classList.remove("alert-danger");
    FieldElement.classList.add("alert-success");
    FieldElement.getElementsByTagName("img")[0];
    FieldElement.getElementsByTagName("img")[0].src = "happiness.png";
  }
};

const setWarningField = (useOfFundsSum, sourceOfFundsSum) => {
  if (parseInt(useOfFundsSum) - parseInt(sourceOfFundsSum) == 0) {
    document.getElementById("sums-warning").classList.add("hide");
  } else {
    document.getElementById("sums-warning").classList.remove("hide");
  }
};

// calculate all Values and add to DOM
sendBtn.addEventListener("click", () => {
  let useOfFundsSum = calculateUseOfFundsSum();
  let sourceOfFundsSum = calculateSourceOfFundsSum();
  let liquidity1 = calculateLiquidity1();
  let liquidity2 = calculateLiquidity2();
  let liquidity3 = calculateLiquidity3();
  let investmentCoverage = calculateInvestmentCoverage();
  let equityRatio = calculateEquityRatio(sourceOfFundsSum);
  let leverage = calculateLeverage();

  liquidity1Result.innerText = liquidity1 + "%";
  liquidity2Result.innerText = liquidity2 + "%";
  liquidity3Result.innerText = liquidity3 + "%";
  document.getElementById("investmentCoverageResult").innerText =
    investmentCoverage + "%";
  equityRatioResult.innerText = equityRatio + "%";
  leverageResult.innerText = leverage + "%";
  setAlertFieldClass(liquidity1Field, liquidity1, 10);
  setAlertFieldClass(liquidity2Field, liquidity2, 100);
  setAlertFieldClass(liquidity3Field, liquidity3, 120);
  setAlertFieldClass(
    document.getElementById("investmentCoverageField"),
    investmentCoverage,
    100
  );
  setAlertFieldClass(equityRatioField, equityRatio, 100);
  setAlertFieldClassMax(leverageField, leverage, 100);
  setWarningField(useOfFundsSum, sourceOfFundsSum);
});
