function add(a) {
    return function (b) {
        return a + b;
    }
}

// const add2 = a => b => a + b;
add(5)(10);
