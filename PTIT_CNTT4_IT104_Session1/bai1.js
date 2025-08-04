for (let i = 0; i < 5;i++){
    console.log("Gia tri i cua vong lap", i);
}
console.log("Gia tri i ngoai vong lap", i);
// lỗi: i không được định nghĩa ở phạm vi này vì let chỉ có phạm vi trong vòng lặp 
// do đó biến i không thể truy cập dược bên ngoài vòng lặp for