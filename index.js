// 1. Initialize the `employee` object with name and streetAddress keys
const employee = {
    name: "Sara BEGACHE",
    streetAddress: "Algiers Algeria",
  };
  
  // 2. Create the `updateEmployeeWithKeyAndValue` function
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with the updated key-value pair using the spread operator
    return { ...employee, [key]: value };
  }
  
  // 3. Create the `destructivelyUpdateEmployeeWithKeyAndValue` function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original object with the new key-value pair
    employee[key] = value;
    return employee;
  }
  
  // 4. Create the `deleteFromEmployeeByKey` function
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object without the specified key using the spread operator
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 5. Create the `destructivelyDeleteFromEmployeeByKey` function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original object
    delete employee[key];
    return employee;
  }
  
  