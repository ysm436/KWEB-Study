function isValidNumber(n) {
  const num = parseInt(n);
  if (isNaN(num) || num != n) return false;
  else if (num < 1 || num > 9) return false;
  else return true;
}
