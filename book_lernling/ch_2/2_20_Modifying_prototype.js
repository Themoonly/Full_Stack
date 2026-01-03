// การแก้ไขโปรโตไทป

// คุณสามารถเพิ ่มคุณสมบัติหรือเมธอดใหม่ให้กับโปรโตไทป์ได้ ซึ ่งจะทําให้พร้อมใช้งานกับอินสแตนซ์ทั ้งหมดที ่สืบทอดจากโปรโต
// ไทป์นั ้น

// ตัวอย่างของการแก้ไขโปรโตไทป์ :

function Cars(brand) {
    this.brand = brand;
}

Cars.prototype.start = function(){
    console.log(this.brand + "is starting");
};

const myCars = new Cars("Toyota");

myCars.start(); // Toyota is starting

Cars.prototype.stop = function(){
    console.log(this.brand + "is stopping");
};

myCars.stop(); //Toyota is stopping


// ในตัวอย่างนี ้ โปรโตไทป์ของฟังก์ชันสร้าง Car ถูกแก้ไขหลังจากที ่อินสแตนซ์ถูกสร้างขึ ้น เมธอด stop ใหม่พร้อมใช้งาน
// ทันทีสําหรับอินสแตนซ์ทั ้งหมดของ Car รวมถึง myCar