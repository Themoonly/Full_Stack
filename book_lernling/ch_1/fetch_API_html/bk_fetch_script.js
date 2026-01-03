// 1. อ้างอิงถึง Element ที่เราต้องการจะเอาข้อมูลไปใส่
const userListElement = document.getElementById("user-list");

// 2. ฟังก์ชันสำหรับดึงข้อมูล
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('เครือข่ายมีปัญหา');
        }
        return response.json();
    })
    .then(users => {
        // ล้างข้อความ "กำลังโหลด..." ออกก่อน
        userListElement.innerHTML = "";

        // 3. วนลูปข้อมูลที่ได้มา (users เป็น Array)
        users.forEach(user => {
            // สร้าง Element <li> ขึ้นมาใหม่
            const li = document.createElement("li");
            li.textContent = `ชื่อ: ${user.name} | อีเมล: ${user.email}`;
            
            // นำ <li> ไปใส่ใน <ul>
            userListElement.appendChild(li);
        });
    })
    .catch(error => {
        userListElement.innerHTML = `<li>เกิดข้อผิดพลาด: ${error.message}</li>`;
        console.error('Error:', error);
    });