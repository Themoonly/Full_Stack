fetch('https://jsonplaceholder.typicode.com/posts/1')  // (1) ส่งคำขอไปยัง URL ที่ระบุ
    .then(Response => Response.json()) // (2) เมื่อได้รับคำตอบ ให้แปลงข้อมูลเป็นรูปแบบ JSON
    .then(data => console.log(data))   // (3) เมื่อแปลงเสร็จ ให้นำข้อมูล (data) มาแสดงใน Console
    .catch(error => console.error('Error:', error)); // (4) ถ้าเกิดปัญหาในขั้นตอนใดก็ตาม ให้มาทำงานที่นี่