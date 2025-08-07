var listProduct = [
    {
        id: "001",
        name: "Ao",
        price: 1000,
        category: { id: "C001", name: "Thoi trang nam" },
    },
    {
        id: "002",
        name: "Quan",
        price: 2000,
        category: { id: "C002", name: "Thoi trang nu" }
    },
    {
        id: "003",
        name: "Giay",
        price: 3000,
        category: { id: "C003", name: "Thoi trang mua he" },
        discount: 0.1
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    console.log("Ten: ".concat(product.name));
    console.log("Gia goc: ".concat(product.price.toLocaleString(), " VND"));
    var finalPrice = getFinalPrice(product);
    if (finalPrice !== product.price) {
        console.log("Gia sau giam: ".concat(finalPrice.toLocaleString(), " VND"));
    }
    console.log("Danh muc: ".concat(product.category.name));
}
listProduct.forEach(printProductInfo);
