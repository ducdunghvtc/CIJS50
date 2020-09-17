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
// Có 4 tính chất chính tạo nên một ngôn ngữ Hướng đối tượng. Đó là Đóng gói,Trừu tượng hóa dữ liệu, Đa hình và Kế thừa.
//  Đây cũng được gọi là bốn trụ cột của Lập trình hướng đối tượng.


// thuật toán cho 1 mảng gồm các phần tử nhập vào. hãy xoá những phần tử trùng nhau
 let number = [1, 2, 3, 2, 4, 1 , 5 , 4 , 6];
 function dupNumber(data) {
        
       return [...new Set(data)]
                
}
// console.log(dupNumber(number));

// let dupNumber = number.filter((item, index) => number.indexOf(item) == index);
// console.log(dupNumber)
