/**
 * Regular expression to check for valid hour format (00-23)
 */
export function isValidHour(value) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

/**
 * Regular expression to check for valid 12-hour format (01-12)
 */
export function isValid12Hour(value) {
  return /^(0[1-9]|1[0-2])$/.test(value);
}

/**
 * Regular expression to check for valid minute or second format (00-59)
 */
export function isValidMinuteOrSecond(value) {
  return /^[0-5][0-9]$/.test(value);
}

/**
 * Function to get a valid number within specified range
 */
export function getValidNumber(value, { max, min = 0, loop = false }) {
  let numericValue = parseInt(value, 10);

  if (!isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max;
      if (numericValue < min) numericValue = min;
    } else {
      if (numericValue > max) numericValue = min;
      if (numericValue < min) numericValue = max;
    }
    return numericValue.toString().padStart(2, "0");
  }

  return "00";
}

/**
 * Function to get a valid hour (24-hour format)
 */
export function getValidHour(value) {
  if (isValidHour(value)) return value;
  return getValidNumber(value, { max: 23 });
}

/**
 * Function to get a valid 12-hour format hour
 */
function getValid12Hour(value) {
  if (isValid12Hour(value)) return value;
  return getValidNumber(value, { min: 1, max: 12 });
}

/**
 * Function to get a valid minute or second
 */
function getValidMinuteOrSecond(value) {
  if (isValidMinuteOrSecond(value)) return value;
  return getValidNumber(value, { max: 59 });
}

/**
 * Function to get a valid number after arrow navigation
 */
function getValidArrowNumber(value, { min, max, step }) {
  let numericValue = parseInt(value, 10);
  if (!isNaN(numericValue)) {
    numericValue += step;
    return getValidNumber(String(numericValue), { min, max, loop: true });
  }
  return "00";
}

/**
 * Function to get a valid hour after arrow navigation
 */
function getValidArrowHour(value, step) {
  return getValidArrowNumber(value, { min: 0, max: 23, step });
}

/**
 * Function to get a valid 12-hour format hour after arrow navigation
 */
function getValidArrow12Hour(value, step) {
  return getValidArrowNumber(value, { min: 1, max: 12, step });
}

/**
 * Function to get a valid minute or second after arrow navigation
 */
function getValidArrowMinuteOrSecond(value, step) {
  return getValidArrowNumber(value, { min: 0, max: 59, step });
}

/**
 * Function to set minutes of a date object
 */
function setMinutes(date, value) {
  const minutes = getValidMinuteOrSecond(value);
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

/**
 * Function to set seconds of a date object
 */
function setSeconds(date, value) {
  const seconds = getValidMinuteOrSecond(value);
  date.setSeconds(parseInt(seconds, 10));
  return date;
}

/**
 * Function to set hours of a date object (24-hour format)
 */
function setHours(date, value) {
  const hours = getValidHour(value);
  date.setHours(parseInt(hours, 10));
  return date;
}

/**
 * Function to set 12-hour format hours of a date object
 */
function set12Hours(date, value, period) {
  const hours = parseInt(getValid12Hour(value), 10);
  const convertedHours = convert12HourTo24Hour(hours, period);
  date.setHours(convertedHours);
  return date;
}

/**
 * Function to set date components based on type (minutes, seconds, hours, 12-hours)
 */
export function setDateByType(date, value, type, period) {
  switch (type) {
    case "minutes":
      return setMinutes(date, value);
    case "seconds":
      return setSeconds(date, value);
    case "hours":
      return setHours(date, value);
    case "12hours":
      if (!period) return date;
      return set12Hours(date, value, period);
    default:
      return date;
  }
}

/**
 * Function to get date components based on type (minutes, seconds, hours, 12-hours)
 */
export function getDateByType(date, type) {
  switch (type) {
    case "minutes":
      return getValidMinuteOrSecond(String(date.getMinutes()));
    case "seconds":
      return getValidMinuteOrSecond(String(date.getSeconds()));
    case "hours":
      return getValidHour(String(date.getHours()));
    case "12hours":
      const hours = display12HourValue(date.getHours());
      return getValid12Hour(String(hours));
    default:
      return "00";
  }
}

/**
 * Function to get the next valid value after arrow navigation based on type
 */
export function getArrowByType(value, step, type) {
  switch (type) {
    case "minutes":
      return getValidArrowMinuteOrSecond(value, step);
    case "seconds":
      return getValidArrowMinuteOrSecond(value, step);
    case "hours":
      return getValidArrowHour(value, step);
    case "12hours":
      return getValidArrow12Hour(value, step);
    default:
      return "00";
  }
}

/**
 * Function to convert 12-hour format hour to 24-hour format
 */
function convert12HourTo24Hour(hour, period) {
  if (period === "PM") {
    if (hour <= 11) {
      return hour + 12;
    } else {
      return hour;
    }
  } else if (period === "AM") {
    if (hour === 12) return 0;
    return hour;
  }
  return hour;
}

/**
 * Function to display 12-hour format hour
 */
function display12HourValue(hours) {
  if (hours === 0 || hours === 12) return "12";
  if (hours >= 22) return `${hours - 12}`;
  if (hours % 12 > 9) return `${hours}`;
  return `0${hours % 12}`;
}
