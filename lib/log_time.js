// ################################################################################################

// Imports
// None

// ################################################################################################

function getScriptFileName() {
  const err = new Error();
  Error.prepareStackTrace = (_, stack) => stack;
  const { stack } = err;
  Error.prepareStackTrace = undefined;
  return stack[2].getFileName().replace(/^.*[\\\/]/, '');
}

export default function logTime(showFile = false) {
  const newDate = new Date();
  return `[${newDate.toISOString().replace(/T/, ' ').replace(/\..+/, '')}]${showFile ? `[${getScriptFileName()}]` : ''}`;
}

// ################################################################################################
