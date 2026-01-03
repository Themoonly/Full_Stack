//  บทบาทของ__proto__และprototype

// ออบเจกต์ JavaScriptทุกตัวมีคุณสมบัติภายในที่เรียกว่า[[Prototype]]ซึ่งสามารถเข้าถึงได้ผ่าน__proto__คุณสมบัติ
// นี ้ชี ้ไปยังโปรโตไทป์ของออบเจกต์ สําหรับฟังก์ชันJavaScriptจะเพิ่มคุณสมบัติ prototypeโดยอัตโนมัติซึ่งอ้างอิงถึงออบเจ
// กต์ที ่อินสแตนซ์ของฟังก์ชันนั ้นจะสืบทอดมา

// ตัวอย่างของ__proto__และprototype

const person = {
    name: "John",
    greet: function(){
        console.log("Hello, " + this.name);
    }
};

const student = {
    course: "Math"
};

student.__proto__ = person;

console.log(student.name); // Output: John
student.greet(); // Output: Hello, john

// ในตัวอย่างนี ้ ออบเจกต์ studentสืบทอดจากออบเจกต์ personโดยตั ้งค่าstudent.__proto__เป็นperson
// ผลลัพธ์คือstudentสามารถเข้าถึงคุณสมบัติ nameและเมธอดgreetจากpersonได