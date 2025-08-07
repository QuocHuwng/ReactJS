function accept(value) {
    if (typeof value === "string") {
        console.log("".concat(value.length, " ky tu"));
    }
    else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("Day la so chan");
        }
        else {
            console.log("Day la so le");
        }
    }
}
accept("NguyenQuocHung");
accept(29);
