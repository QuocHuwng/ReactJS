interface Product {
    readonly id: string;
    name: string;
    price: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
    note?: string;
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    deliveryAddress: string;
    isPaid: boolean;
}

interface Invoice {
    invoiceId: string;
    orders: Order[];
    createdAt: Date;
}

function calculateInvoiceTotal(invoice: Invoice): number {
    return invoice.orders.reduce((t, o) =>
        t + o.items.reduce((s, i) => s + i.product.price * i.quantity, 0), 0);
}

function getUnpaidOrders(invoice: Invoice): Order[] {
    return invoice.orders.filter(o => !o.isPaid);
}

function printInvoice(invoice: Invoice): void {
    console.log(`HOA DON: #${invoice.invoiceId} - Ngay tao: ${invoice.createdAt.toISOString().split("T")[0]}\n`);
    invoice.orders.forEach(o => {
        console.log(`DON HANG: #${o.orderId} - ${o.customerName}`);
        o.items.forEach(i => {
            const t = i.product.price * i.quantity;
            const n = i.note ? ` (note: ${i.note})` : "";
            console.log(`- ${i.product.name} × ${i.quantity} → ${t.toLocaleString("vi-VN")} VND${n}`);
        });
        const ot = o.items.reduce((s, i) => s + i.product.price * i.quantity, 0);
        console.log(`\nTong don: ${ot.toLocaleString("vi-VN")} VND`);
        console.log(`Trang thai: ${o.isPaid ? "DA THANH TOAN" : "CHUA THANH TOAN"}\n`);
    });
    console.log(`>> Tong cong hoa don: ${calculateInvoiceTotal(invoice).toLocaleString("vi-VN")} VND`);
}

const invoice: Invoice = {
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
