function accept(value: string | number): void {
    if (typeof value === "string") {
        console.log(`${value.length} ky tu`);
    }else if(typeof value === "number"){
        if (value % 2 === 0) {
            console.log("Day la so chan");
        } else {
            console.log("Day la so le");
        }
    }
}
accept("NguyenQuocHung");
accept(29);