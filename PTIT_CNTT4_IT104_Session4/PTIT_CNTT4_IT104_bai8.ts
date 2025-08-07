type Product = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

function calculateOrderTotal(order: Order): number {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}

function printOrder(order: Order): void {
    console.log(`Don hang: #${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log("San pham:");
    order.items.forEach(item => {
        const subtotal = item.product.price * item.quantity;
        console.log(`- ${item.product.name} × ${item.quantity} → ${subtotal.toLocaleString()} VND`);
    });
    const total = calculateOrderTotal(order);
    console.log(`Tong cong: ${total.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chu: ${order.note}`);
    }
}
const shirt: Product = { id: "P001", name: "Ao so mi", price: 250000 };
const trousers: Product = { id: "P002", name: "Quan tay", price: 400000 };

const order: Order = {
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        { product: shirt, quantity: 2 },
        { product: trousers, quantity: 1 }
    ],
    note: "Giao sau 18h"
};

printOrder(order);