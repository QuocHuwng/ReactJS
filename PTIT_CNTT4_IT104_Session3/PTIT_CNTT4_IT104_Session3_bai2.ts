let username: string = "Alice";
username = 123;
// lỗi ở đây là Type 'number' is not assignable to type 'string'.
// kiểu dữ liệu được kiểm tra ngay tại thời điểm biên dịch
// khi đã khai báo biến username có kiểu là string =>> typeScript sẽ khóa kiểu lại
// khi đó gán 123 (kiểu number) cho 1 biến string =>> typeScript phát hiện sai kiểu và và báo lỗi