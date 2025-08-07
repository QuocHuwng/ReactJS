function calculateInvoiceTotal(invoice) {
    return invoice.orders.reduce(function (t, o) {
        return t + o.items.reduce(function (s, i) { return s + i.product.price * i.quantity; }, 0);
    }, 0);
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter(function (o) { return !o.isPaid; });
}
function printInvoice(invoice) {
    console.log("HOA DON: #".concat(invoice.invoiceId, " - Ngay tao: ").concat(invoice.createdAt.toISOString().split("T")[0], "\n"));
    invoice.orders.forEach(function (o) {
        console.log("DON HANG: #".concat(o.orderId, " - ").concat(o.customerName));
        o.items.forEach(function (i) {
            var t = i.product.price * i.quantity;
            var n = i.note ? " (note: ".concat(i.note, ")") : "";
            console.log("- ".concat(i.product.name, " \u00D7 ").concat(i.quantity, " \u2192 ").concat(t.toLocaleString("vi-VN"), " VND").concat(n));
        });
        var ot = o.items.reduce(function (s, i) { return s + i.product.price * i.quantity; }, 0);
        console.log("\nTong don: ".concat(ot.toLocaleString("vi-VN"), " VND"));
        console.log("Trang thai: ".concat(o.isPaid ? "DA THANH TOAN" : "CHUA THANH TOAN", "\n"));
    });
    console.log(">> Tong cong hoa don: ".concat(calculateInvoiceTotal(invoice).toLocaleString("vi-VN"), " VND"));
}
var invoice = {
    invoiceId: "INV001",
    createdAt: new Date("2024-05-14"),
    orders: [
        {
            orderId: "ORD001",
            customerName: "Nguyen Van A",
            deliveryAddress: "Ha Noi",
            isPaid: true,
            items: [
                { product: { id: "P1", name: "Ao so mi", price: 250000 }, quantity: 2 },
                { product: { id: "P2", name: "Quan jean", price: 400000 }, quantity: 1 }
            ]
        },
        {
            orderId: "ORD002",
            customerName: "Tran Thi B",
            deliveryAddress: "Ha Noi",
            isPaid: false,
            items: [
                { product: { id: "P3", name: "Vay hoa", price: 700000 }, quantity: 1, note: "size M" }
            ]
        }
    ]
};
printInvoice(invoice);
