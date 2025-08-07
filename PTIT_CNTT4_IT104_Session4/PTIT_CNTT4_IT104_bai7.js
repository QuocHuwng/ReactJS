function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            var num = Number(input);
            console.log(num * num);
        }
        else {
            var letter = input.match(/[a-zA-Z]/g);
            var count = letter ? letter.length : 0;
            console.log("".concat(count, " ky tu chu cai"));
        }
    }
    else if (typeof input === "number") {
        if (input < 2) {
            console.log("khong phai so nguyen to");
            return;
        }
        for (var i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                console.log("khong phai so nguyen to");
                return;
            }
        }
        console.log("La so nguyen to");
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Gia tri la true - tien hanh xu ly");
        }
        else {
            console.log("Gia tri la false - dung tien hanh xu ly");
        }
    }
}
processInput("456");
processInput("hello123!");
processInput("!@$%^");
processInput(7);
processInput(true);
processInput(false);
