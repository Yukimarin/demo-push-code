let form =document.getElementById("form");
let email ="nguyenxuanbach@gmail.com";
let password= "123456";
// lấy giá trị của ô input thông qua name
form.email.value;
form.password.value;
// 
form.onsubmit=function (event) {
    event.preventDefault();// chặn hành động mặc đỉnh của thẻ form 
    let x =form.email.value;
    let y =form.password.value;
    let blank = document.getElementById("blank-1");
    let blank1 = document.getElementById("blank-2");
    if (x == "" && y ==""){
         blank.innerHTML = "Email không được bỏ trống" ;
         blank.style.color="red";
         blank1.innerHTML = "Password không được bỏ trống" ;
         blank1.style.color="red";
    } else if (x === email && y === password ){
        blank.innerHTML = "Đăng nhập thành công";
        blank.style.color="green";
        blank1.innerHTML = "Đăng nhập thành công";
        blank1.style.color="green";
    } else {
        blank.innerHTML = "Sai Email";
        blank.style.color="red";
        blank1.innerHTML = "Sai Password";
        blank1.style.color="red";
    }
}

// Tiến hành validate form 
// Khi người dùng không nhập vào email -> hiển thị trên DOM một dòng text đỏ 
// "Email không được bỏ trống"
// Khi người dùng không nhập vào pass -> hiển thị trên DOM một dòng text đỏ 
// "Password không được bỏ trống"

// Khi người dùng nhập vào email và pass đầy đủ. Kiểm tra
// với biến email và biến passwword đặt sẵn trong file JS
// Nếu sai email -> hiển thị ra text đỏ trong DOM "Sai Email"
// Nếu sai password -> hiển thị ra text đỏ trong DOM "Sai Password"

// Nếu đúng cả 2 -> Clear hết text đỏ và hiển thị text xanh"Đăng nhập thành công"