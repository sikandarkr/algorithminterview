function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const original = { a: 1, b: { c: 2 } };
  const cloned = deepClone(original);
  
  console.log(cloned); // Output: { a: 1, b: { c: 2 } }
  