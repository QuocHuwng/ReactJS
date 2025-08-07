function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log("Don hang: #".concat(order.orderId));
    console.log("Khach hang: ".concat(order.customerName));
    console.log("San pham:");
    order.items.forEach(function (item) {
        var subtotal = item.product.price * item.quantity;
        console.log("- ".concat(item.product.name, " \u00D7 ").concat(item.quantity, " \u2192 ").concat(subtotal.toLocaleString(), " VND"));
    });
    var total = calculateOrderTotal(order);
    console.log("Tong cong: ".concat(total.toLocaleString(), " VND"));
    if (order.note) {
        console.log("Ghi chu: ".concat(order.note));
    }
}
var shirt = { id: "P001", name: "Ao so mi", price: 250000 };
var trousers = { id: "P002", name: "Quan tay", price: 400000 };
var order = {
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        { product: shirt, quantity: 2 },
        { product: trousers, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
