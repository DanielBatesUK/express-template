// ################################################################################################

// Imports (None)

// ################################################################################################

// Time stamp
export default function timeStamp() {
  try {
    const newDate = new Date();
    return newDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
  } catch (error) {
    console.error(error);
    return false;
  }
}

// ################################################################################################
