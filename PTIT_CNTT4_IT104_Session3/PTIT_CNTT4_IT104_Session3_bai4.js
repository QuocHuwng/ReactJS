var str = "2";
var num = 2;
// so sánh lỏng
console.log(str == num);
//"==", typeScript sẽ tự động ép kiểu string thành number -> so sánh giá trị: 2==2-> true
// so sánh chặt chẽ
console.log(str === num);
//"===", không ép kiểu "2" là string, còn 2 là number->khác kiểu->false
