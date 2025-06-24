function greatesCommonDiviser(n1, n2) {

    while (n2 !== 0) {

        let temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }
    return n1;

}

console.log(greatesCommonDiviser(20, 18));


