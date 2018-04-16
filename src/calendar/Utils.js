function months(){
  return ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
}

export function monthNameToIndex(monthName) {
  return months().findIndex( (i) => i === monthName);
}

export function indexToMonthName(i) {
  return months()[i];
}
