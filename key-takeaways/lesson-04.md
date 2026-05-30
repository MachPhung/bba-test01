# **Phạm vi của biến**
- Có 3 loại phạm vi:
  + Block scope 
  + Function scope
  + Toàn cục
- Trong đó: 
  + var không bị giới hạn bởi cặp ngoặc nhọn
  + let/const: bị giới hạn bởi cặp ngoặc nhọn. Ra ngoài bị **undefined**
# **Break and continue
- Break dùng để thoát khỏi vòng lặp hoàn toàn ngay lập tức
- Continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo
# ** Cầu điều kiện nâng cao
- if...else if...else: kiểm tra nhiều điều kiện theo thứ tự
# **Vòng lặp nâng cao
- for ... in: dùng để duyệt qua các thuộc tính của một object

const person = {
  name: "John",
  age: 30,
  city: "HCM"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// output:
name: John
age: 30
city: HCM

- for...in: dùng để duyệt qua các thuộc tính của một object

//Với Array (ko khuyến khích)

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index + ": " + colors[index])
}

// output
0: red
1: green
2: blue

- forEach: method của Array để thực thi 1 funnction cho mỗi phần tử. KHông thể dùng break hoặc continue

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value)) {
  console.log(value)
};


