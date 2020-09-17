// const input = prompt("nhập dữ liệu từ bàn phím");
// console.log(`__________________
// < ${input} >
//  ------------------
//         \\   ^__^
//          \\  (oo)\\_______
//             (__)\\       )\\/\\
//                 ||----w |
//                 ||     ||`);
        // muốn in ra dấu \ thì phải thêm 1 dấu \ 
// tìm hiểu về OOP: khái niệm ? 4 tính chất ?
// Lập trình hướng đối tượng (OOP) là một mô hình lập trình máy tính tổ chức thiết kế phần mềm xung quanh dữ liệu, 
// hoặc các đối tượng, chứ không phải là functions và logic.
//  Một đối tượng có thể được định nghĩa là một trường dữ liệu có các thuộc tính và hành vi duy nhất.
// 4 tính chất 
// 
// Có 4 tính chất chính tạo nên một ngôn ngữ Hướng đối tượng: 
// Đóng gói:Là cách để che dấu những tính chất xử lý bên trong của đối tượng, những đối tượng khác không thể tác động trực tiếp làm thay đổi trạng thái chỉ có thể tác động thông qua các method public của đối tượng đó.
// Trừu tượng hóa dữ liệu:Là phương pháp trừu tượng hóa định nghĩa lên những hành động, tính chất của loại đối tượng nào đó cần phải có.
// Đa hình:Là một đối tượng thuộc các lớp khác nhau có thể hiểu cùng một thông điệp theo cách khác nhau
// Kế thừa:Là kỹ thuật cho phép kế thừa lại những tính năng mà một đối tượng khác đã có, giúp tránh việc code lặp dư thừa mà chỉ xử lý công việc tương tự
//  Đây cũng được gọi là bốn trụ cột của Lập trình hướng đối tượng.


// thuật toán cho 1 mảng gồm các phần tử nhập vào. hãy xoá những phần tử trùng nhau
 let number = [1, 2, 3, 2, 4, 1 , 5 , 4 , 6];
 function dupNumber(data) {
        
       return [...new Set(data)]
                
}
// console.log(dupNumber(number));

// let dupNumber = number.filter((item, index) => number.indexOf(item) == index);
// console.log(dupNumber)
