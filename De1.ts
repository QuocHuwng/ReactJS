// 1. Product (Abstract Class)
abstract class Product {
    private static nextId = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): void {
        if (quantity <= 0) return;
        if (quantity > this.stock) return;
        this.stock -= quantity;
    }

    restock(quantity: number): void {
        if (quantity <= 0) return;
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

// 2. ElectronicsProduct
class ElectronicsProduct extends Product {
    warrantyPeriod: number;
    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `${this.name} - Giá: ${this.price} - Bảo hành: ${this.warrantyPeriod} tháng`;
    }

    getShippingCost(distance: number): number {
        return distance * 5;
    }

    getCategory(): string {
        return "Electronics";
    }
}

// 3. ClothingProduct
class ClothingProduct extends Product {
    size: string;
    color: string;
    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `${this.name} - Giá: ${this.price} - Màu: ${this.color} - Size: ${this.size}`;
    }

    getShippingCost(distance: number): number {
        return distance * 2;
    }

    getCategory(): string {
        return "Clothing";
    }
}

// 4. Customer
class Customer {
    private static nextId = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, address: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = address;
    }

    getDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`);
    }
}

// 5. Order
class Order {
    private static nextId = 1;
    orderId: number;
    customer: Customer;
    products: { product: Product; quantity: number }[];
    totalAmount: number;

    constructor(customer: Customer, products: { product: Product; quantity: number }[]) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = products.reduce((sum, p) => sum + p.product.price * p.quantity, 0);
    }

    getDetails(): void {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer: ${this.customer.name}`);
        console.log("Products:");
        this.products.forEach(p => {
            console.log(`  - ${p.product.getProductInfo()} x${p.quantity}`);
        });
        console.log(`Total: ${this.totalAmount}`);
    }
}

// 6. Store
class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];

    addCustomer(): void {
        const name = prompt("Tên khách hàng: ")!;
        const email = prompt("Email: ")!;
        const address = prompt("Địa chỉ: ")!;
        this.customers.push(new Customer(name, email, address));
    }

    addProduct(): void {
        const type = prompt("Loại (E: Điện tử, C: Quần áo): ")!;
        const name = prompt("Tên sản phẩm: ")!;
        const price = parseFloat(prompt("Giá: ")!);
        const stock = parseInt(prompt("Số lượng: ")!);

        if (type.toUpperCase() === "E") {
            const warranty = parseInt(prompt("Bảo hành (tháng): ")!);
            this.products.push(new ElectronicsProduct(name, price, stock, warranty));
        } else if (type.toUpperCase() === "C") {
            const size = prompt("Size: ")!;
            const color = prompt("Màu: ")!;
            this.products.push(new ClothingProduct(name, price, stock, size, color));
        } else {
            console.log("Loại không hợp lệ");
        }
    }

    createOrder(): void {
        const customerId = parseInt(prompt("ID khách hàng: ")!);
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) return console.log("Không tìm thấy khách hàng");

        const n = parseInt(prompt("Số sản phẩm: ")!);
        const products: { product: Product; quantity: number }[] = [];
        for (let i = 0; i < n; i++) {
            const pid = parseInt(prompt(`ID sản phẩm #${i + 1}: `)!);
            const qty = parseInt(prompt("Số lượng: ")!);
            const prod = this.products.find(p => p.id === pid);
            if (prod && qty > 0 && qty <= prod.stock) {
                prod.sell(qty);
                products.push({ product: prod, quantity: qty });
            }
        }
        if (products.length > 0) this.orders.push(new Order(customer, products));
    }

    cancelOrder(): void {
        const oid = parseInt(prompt("ID đơn hàng: ")!);
        const index = this.orders.findIndex(o => o.orderId === oid);
        if (index >= 0) {
            const order = this.orders[index];
            order.products.forEach(p => p.product.restock(p.quantity));
            this.orders.splice(index, 1);
            console.log(`Đã hủy đơn hàng ${oid}`);
        } else console.log("Không tìm thấy đơn hàng");
    }

    listAvailableProducts(): void {
        this.products.filter(p => p.stock > 0)
            .forEach(p => console.log(`${p.id}: ${p.getProductInfo()} - Tồn: ${p.stock}`));
    }

    listCustomerOrders(): void {
        const cid = parseInt(prompt("ID khách hàng: ")!);
        this.orders.filter(o => o.customer.id === cid)
            .forEach(o => o.getDetails());
    }

    calculateTotalRevenue(): void {
        const total = this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
        console.log(`Tổng doanh thu: ${total}`);
    }

    countProductsByCategory(): void {
        const map = new Map<string, number>();
        this.products.forEach(p => {
            const cat = p.getCategory();
            map.set(cat, (map.get(cat) || 0) + 1);
        });
        map.forEach((count, cat) => console.log(`${cat}: ${count}`));
    }

    updateProductStock(): void {
        const pid = parseInt(prompt("ID sản phẩm: ")!);
        const stock = parseInt(prompt("Tồn kho mới: ")!);
        const p = this.products.find(p => p.id === pid);
        if (p) {
            p.stock = stock;
            console.log(`Cập nhật tồn kho: ${p.name} = ${stock}`);
        } else console.log("Không tìm thấy sản phẩm");
    }

    findProductById(): void {
        const pid = parseInt(prompt("ID sản phẩm: ")!);
        const p = this.products.find(p => p.id === pid);
        if (p) console.log(p.getProductInfo());
        else console.log("Không tìm thấy sản phẩm");
    }

    showProductInfo(): void {
        this.products.forEach(p => console.log(p.getProductInfo()));
    }
}

// 7. Menu
const store = new Store();
while (true) {
    console.log("\n--- MENU ---");
    console.log("1. Thêm khách hàng");
    console.log("2. Thêm sản phẩm");
    console.log("3. Tạo đơn hàng");
    console.log("4. Hủy đơn hàng");
    console.log("5. Danh sách sản phẩm còn hàng");
    console.log("6. Danh sách đơn hàng của khách");
    console.log("7. Tính tổng doanh thu");
    console.log("8. Thống kê sản phẩm theo danh mục");
    console.log("9. Cập nhật tồn kho");
    console.log("10. Tìm kiếm theo ID");
    console.log("11. Xem thông tin sản phẩm");
    console.log("0. Thoát");

    const choice = prompt("Chọn chức năng: ");
    switch (choice) {
        case "1": store.addCustomer(); break;
        case "2": store.addProduct(); break;
        case "3": store.createOrder(); break;
        case "4": store.cancelOrder(); break;
        case "5": store.listAvailableProducts(); break;
        case "6": store.listCustomerOrders(); break;
        case "7": store.calculateTotalRevenue(); break;
        case "8": store.countProductsByCategory(); break;
        case "9": store.updateProductStock(); break;
        case "10": store.findProductById(); break;
        case "11": store.showProductInfo(); break;
        case "0": console.log("Thoát chương trình"); process.exit(0);
        default: console.log("Chọn không hợp lệ");
    }
}
