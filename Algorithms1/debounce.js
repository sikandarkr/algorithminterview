function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  
  const log = debounce(() => console.log("Called!"), 1000);
  log(); log(); log(); // Only one "Called!" after 1s
  