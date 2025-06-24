function memoize(fn) {
    let cache = {};

    return function(n) {
        if (n in cache) {
            return cache[n] + " from cache ✅";
        } else {
            const result = fn(n);
            cache[n] = result;
            return result + " freshly computed 🧮";
        }
    };
}
const square = memoize((num)=>num*num);


console.log(square(5));
console.log(square(5));