// Code your solution here
// Find all drivers matching the name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Find all drivers whose names begin with the provided string
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Find all drivers whose name property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Export the functions so they can be used in tests
  module.exports = { findMatching, fuzzyMatch, matchName };  