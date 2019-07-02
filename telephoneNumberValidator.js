// this algortihm puts a string through a number of regex validations
// to determine whether or not the string passed is a valid US number

function telephoneCheck(str) {
  // must have 10 or 11 digits
  let isValidNumber = true;
  // check for invalid characters
  if (str.match(/[^0-9\-() ]+/)) {
    isValidNumber = false;
    // check for incomplete parenthesis
  } else if (
    (str.match(/\({1}/) && !str.match(/\){1}/)) ||
    (!str.match(/\({1}/) && str.match(/\){1}/))
  ) {
    isValidNumber = false;
    // check if the string starts with a hyphen
  } else if (str.match(/^[\-]/)) {
    isValidNumber = false;
    // check if the string both starts and ends with a hyphen
  } else if (str.match(/^\(/) && str.match(/\)$/)) {
    isValidNumber = false;
  }
  const onlyDigits = str.replace(/[^0-9]/g, "").trim();
  // check if there are too many or too few digits
  if (onlyDigits.length < 10 || onlyDigits.length > 11) {
    isValidNumber = false;
    // check if string doesnt start with a one when the number of digits does not equal to 10
  } else if (onlyDigits.match(/^[^1]/) && onlyDigits.length !== 10) {
    isValidNumber = false;
  }
  return isValidNumber;
}

// Tests
telephoneCheck("555-555-5555"); // should return a boolean.
telephoneCheck("1 555-555-5555"); // should return true.
telephoneCheck("1 (555) 555-5555"); // should return true.
telephoneCheck("5555555555"); // should return true.
telephoneCheck("555-555-5555"); // should return true.
telephoneCheck("(555)555-5555"); // should return true.
telephoneCheck("1(555)555-5555"); // should return true.
telephoneCheck("555-5555"); // should return false.
telephoneCheck("5555555"); // should return false.
telephoneCheck("1 555)555-5555"); // should return false.
telephoneCheck("1 555 555 5555"); // should return true.
telephoneCheck("1 456 789 4444"); // should return true.
telephoneCheck("123**&!!asdf#"); // should return false.
telephoneCheck("55555555"); // should return false.
telephoneCheck("(6054756961)"); // should return false
telephoneCheck("2 (757) 622-7382"); // should return false.
telephoneCheck("0 (757) 622-7382"); // should return false.
telephoneCheck("-1 (757) 622-7382"); // should return false
telephoneCheck("2 757 622-7382"); // should return false.
telephoneCheck("10 (757) 622-7382"); // should return false.
telephoneCheck("27576227382"); // should return false.
telephoneCheck("(275)76227382"); // should return false.
telephoneCheck("2(757)6227382"); // should return false.
telephoneCheck("2(757)622-7382"); // should return false.
telephoneCheck("555)-555-5555"); // should return false.
telephoneCheck("(555-555-5555"); // should return false.
telephoneCheck("(555)5(55?)-5555"); // should return false.
