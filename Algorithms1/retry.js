function retry(fn, times){
    return new Promise((resolve, reject) => {
        function attempt(count) {
          fn()
            .then(resolve)
            .catch(err => {
              console.log(`Attempt failed. Remaining retries: ${count}`);
              if (count === 0) {
                reject(err);
              } else {
                attempt(count - 1);
              }
            });
        }
    
        attempt(times);
      });
}

let callCount = 0;

function unstableOperation() {
    return new Promise((resolve, reject) => {
      callCount++;
      console.log("Call attempt:", callCount);
      if (callCount >= 3) {
        resolve("✅ Success on attempt " + callCount);
      } else {
        reject("❌ Failed on attempt " + callCount);
      }
    });
  }

  retry(unstableOperation, 5)
  .then(result => console.log("Final Result:", result))
  .catch(error => console.error("Final Error:", error));