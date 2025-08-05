function getOrderSummary(products) {
    let totalBefore = 0;
    let totalAfter = 0;
    let details = [];
    products.forEach(product => {
        const { name, price, discount, quantity, bulkDiscount } = product;
        totalBefore += price * quantity;
        let finalPrice = price * (1 - discount);
        if (bulkDiscount && quantity >= bulkDiscount.minQuantity) {
            finalPrice = finalPrice * (1 - bulkDiscount.extraDiscount);
        }
        finalPrice = Math.round(finalPrice);
        const subtotal = finalPrice * quantity;
        totalAfter += subtotal;
        details.push({
            name,
            finalPrice,
            quantity,
            subtotal
        });
    });
    return {
    totalBefore,
    totalAfter,
    details
    };
}
const products = [
    { name: "Sach", price: 120, discount: 0.1, quantity: 2 },
    { name: "But", price: 40, discount: 0.05, quantity: 5, bulkDiscount: { minQuantity: 5, extraDiscount: 0.01 } },
    { name: "Vo", price: 300, discount: 0, quantity: 3, bulkDiscount:{ minQuantity: 3, extraDiscount: 0.3} }
];
console.log(getOrderSummary(products));