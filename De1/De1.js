var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Product (Abstract Class)
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.sell = function (quantity) {
        if (quantity <= 0)
            return;
        if (quantity > this.stock)
            return;
        this.stock -= quantity;
    };
    Product.prototype.restock = function (quantity) {
        if (quantity <= 0)
            return;
        this.stock += quantity;
    };
    Product.nextId = 1;
    return Product;
}());
// 2. ElectronicsProduct
var ElectronicsProduct = /** @class */ (function (_super) {
    __extends(ElectronicsProduct, _super);
    function ElectronicsProduct(name, price, stock, warrantyPeriod) {
        var _this = _super.call(this, name, price, stock) || this;
        _this.warrantyPeriod = warrantyPeriod;
        return _this;
    }
    ElectronicsProduct.prototype.getProductInfo = function () {
        return "".concat(this.name, " - Gi\u00E1: ").concat(this.price, " - B\u1EA3o h\u00E0nh: ").concat(this.warrantyPeriod, " th\u00E1ng");
    };
    ElectronicsProduct.prototype.getShippingCost = function (distance) {
        return distance * 5;
    };
    ElectronicsProduct.prototype.getCategory = function () {
        return "Electronics";
    };
    return ElectronicsProduct;
}(Product));
// 3. ClothingProduct
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct(name, price, stock, size, color) {
        var _this = _super.call(this, name, price, stock) || this;
        _this.size = size;
        _this.color = color;
        return _this;
    }
    ClothingProduct.prototype.getProductInfo = function () {
        return "".concat(this.name, " - Gi\u00E1: ").concat(this.price, " - M\u00E0u: ").concat(this.color, " - Size: ").concat(this.size);
    };
    ClothingProduct.prototype.getShippingCost = function (distance) {
        return distance * 2;
    };
    ClothingProduct.prototype.getCategory = function () {
        return "Clothing";
    };
    return ClothingProduct;
}(Product));
// 4. Customer
var Customer = /** @class */ (function () {
    function Customer(name, email, address) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = address;
    }
    Customer.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, ", Address: ").concat(this.shippingAddress));
    };
    Customer.nextId = 1;
    return Customer;
}());
// 5. Order
var Order = /** @class */ (function () {
    function Order(customer, products) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = products.reduce(function (sum, p) { return sum + p.product.price * p.quantity; }, 0);
    }
    Order.prototype.getDetails = function () {
        console.log("Order ID: ".concat(this.orderId));
        console.log("Customer: ".concat(this.customer.name));
        console.log("Products:");
        this.products.forEach(function (p) {
            console.log("  - ".concat(p.product.getProductInfo(), " x").concat(p.quantity));
        });
        console.log("Total: ".concat(this.totalAmount));
    };
    Order.nextId = 1;
    return Order;
}());
// 6. Store
var Store = /** @class */ (function () {
    function Store() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    Store.prototype.addCustomer = function () {
        var name = prompt("Tên khách hàng: ");
        var email = prompt("Email: ");
        var address = prompt("Địa chỉ: ");
        this.customers.push(new Customer(name, email, address));
    };
    Store.prototype.addProduct = function () {
        var type = prompt("Loại (E: Điện tử, C: Quần áo): ");
        var name = prompt("Tên sản phẩm: ");
        var price = parseFloat(prompt("Giá: "));
        var stock = parseInt(prompt("Số lượng: "));
        if (type.toUpperCase() === "E") {
            var warranty = parseInt(prompt("Bảo hành (tháng): "));
            this.products.push(new ElectronicsProduct(name, price, stock, warranty));
        }
        else if (type.toUpperCase() === "C") {
            var size = prompt("Size: ");
            var color = prompt("Màu: ");
            this.products.push(new ClothingProduct(name, price, stock, size, color));
        }
        else {
            console.log("Loại không hợp lệ");
        }
    };
    Store.prototype.createOrder = function () {
        var customerId = parseInt(prompt("ID khách hàng: "));
        var customer = this.customers.find(function (c) { return c.id === customerId; });
        if (!customer)
            return console.log("Không tìm thấy khách hàng");
        var n = parseInt(prompt("Số sản phẩm: "));
        var products = [];
        var _loop_1 = function (i) {
            var pid = parseInt(prompt("ID s\u1EA3n ph\u1EA9m #".concat(i + 1, ": ")));
            var qty = parseInt(prompt("Số lượng: "));
            var prod = this_1.products.find(function (p) { return p.id === pid; });
            if (prod && qty > 0 && qty <= prod.stock) {
                prod.sell(qty);
                products.push({ product: prod, quantity: qty });
            }
        };
        var this_1 = this;
        for (var i = 0; i < n; i++) {
            _loop_1(i);
        }
        if (products.length > 0)
            this.orders.push(new Order(customer, products));
    };
    Store.prototype.cancelOrder = function () {
        var oid = parseInt(prompt("ID đơn hàng: "));
        var index = this.orders.findIndex(function (o) { return o.orderId === oid; });
        if (index >= 0) {
            var order = this.orders[index];
            order.products.forEach(function (p) { return p.product.restock(p.quantity); });
            this.orders.splice(index, 1);
            console.log("\u0110\u00E3 h\u1EE7y \u0111\u01A1n h\u00E0ng ".concat(oid));
        }
        else
            console.log("Không tìm thấy đơn hàng");
    };
    Store.prototype.listAvailableProducts = function () {
        this.products.filter(function (p) { return p.stock > 0; })
            .forEach(function (p) { return console.log("".concat(p.id, ": ").concat(p.getProductInfo(), " - T\u1ED3n: ").concat(p.stock)); });
    };
    Store.prototype.listCustomerOrders = function () {
        var cid = parseInt(prompt("ID khách hàng: "));
        this.orders.filter(function (o) { return o.customer.id === cid; })
            .forEach(function (o) { return o.getDetails(); });
    };
    Store.prototype.calculateTotalRevenue = function () {
        var total = this.orders.reduce(function (sum, o) { return sum + o.totalAmount; }, 0);
        console.log("T\u1ED5ng doanh thu: ".concat(total));
    };
    Store.prototype.countProductsByCategory = function () {
        var map = new Map();
        this.products.forEach(function (p) {
            var cat = p.getCategory();
            map.set(cat, (map.get(cat) || 0) + 1);
        });
        map.forEach(function (count, cat) { return console.log("".concat(cat, ": ").concat(count)); });
    };
    Store.prototype.updateProductStock = function () {
        var pid = parseInt(prompt("ID sản phẩm: "));
        var stock = parseInt(prompt("Tồn kho mới: "));
        var p = this.products.find(function (p) { return p.id === pid; });
        if (p) {
            p.stock = stock;
            console.log("C\u1EADp nh\u1EADt t\u1ED3n kho: ".concat(p.name, " = ").concat(stock));
        }
        else
            console.log("Không tìm thấy sản phẩm");
    };
    Store.prototype.findProductById = function () {
        var pid = parseInt(prompt("ID sản phẩm: "));
        var p = this.products.find(function (p) { return p.id === pid; });
        if (p)
            console.log(p.getProductInfo());
        else
            console.log("Không tìm thấy sản phẩm");
    };
    Store.prototype.showProductInfo = function () {
        this.products.forEach(function (p) { return console.log(p.getProductInfo()); });
    };
    return Store;
}());
// 7. Menu
var store = new Store();
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
    var choice = prompt("Chọn chức năng: ");
    switch (choice) {
        case "1":
            store.addCustomer();
            break;
        case "2":
            store.addProduct();
            break;
        case "3":
            store.createOrder();
            break;
        case "4":
            store.cancelOrder();
            break;
        case "5":
            store.listAvailableProducts();
            break;
        case "6":
            store.listCustomerOrders();
            break;
        case "7":
            store.calculateTotalRevenue();
            break;
        case "8":
            store.countProductsByCategory();
            break;
        case "9":
            store.updateProductStock();
            break;
        case "10":
            store.findProductById();
            break;
        case "11":
            store.showProductInfo();
            break;
        case "0":
            console.log("Thoát chương trình");
            process.exit(0);
        default: console.log("Chọn không hợp lệ");
    }
}
