type Product = {
    id: string
    name: string,
    price: number,
    category: {
        id: string
        name: string,
    };
    discount?: number;
};
const listProduct: Product[] = [
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
        category: {id: "C003", name: "Thoi trang mua he"},
        discount: 0.1
    }
];
function getFinalPrice(product: Product): number{
    if (product.discount) {
        return product.price *(1-product.discount);
    }
    return product.price;
}
function printProductInfo(product: Product): void {
    console.log(`Ten: ${product.name}`);
    console.log(`Gia goc: ${product.price.toLocaleString()} VND`);
    const finalPrice = getFinalPrice(product);
    if (finalPrice !== product.price){
        console.log(`Gia sau giam: ${finalPrice.toLocaleString()} VND`);
    }
    console.log(`Danh muc: ${product.category.name}`);
}
listProduct.forEach(printProductInfo);