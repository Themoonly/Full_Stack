//  เมธอดทั่วไปของอาเรย์

// JavaScript มีเมธอดหลายตัวสําหรับการจัดการอาเรย์ เช่น:
// 1. กลุ่มการเพิ่ม-ลบ ข้อมูล (Mutator Methods)
    // push(6): เพิ่มสมาชิกใหม่เข้าไปที่ "ท้าย" ของอาเรย์
    // pop(): ดึงสมาชิกตัว "ท้ายสุด" ออกไป
    // shift(): ดึงสมาชิกตัว "แรกสุด" ออกไป (ในโค้ดคือเลข 1 ถูกดึงออกมาเก็บไว้ใน firstNumber)
    // unshift(0): เพิ่มสมาชิกใหม่เข้าไปที่ "หน้าสุด" ของอาเรย์
// 2. กลุ่มการตัดและจัดการตำแหน่ง (Slice & Splice)
    // slice(1, 3): คัดลอกสมาชิกเริ่มจาก Index ที่ 1 ถึงก่อน Index ที่ 3 (ได้ตัวที่ 1 และ 2) ออกมาเป็นอาเรย์ใหม่ โดยไม่กระทบของเดิม
    // splice(2, 1): อันนี้ต่างจาก slice เพราะมันคือการ "ผ่าตัด" ลงไปที่ตำแหน่ง Index ที่ 2 และลบทิ้งไป 1 ตัว (ในโค้ดคือเลข 3 ถูกลบออกไป)
// 3. กลุ่มการประมวลผลข้อมูล (Iteration Methods)
    // กลุ่มนี้เป็นหัวใจสำคัญของการเขียนโปรแกรมสมัยใหม่ (Functional Programming) ครับ
    // map(): คือการสร้างอาเรย์ใหม่ โดยนำสมาชิกทุกตัวไปผ่านกระบวนการบางอย่าง (ในโค้ดคือจับทุกตัวมายกกำลังสอง num * num)
    // filter(): คือการ "คัดกรอง" เฉพาะตัวที่ผ่านเงื่อนไข (ในโค้ดคือ num % 2 === 0 หมายถึงเอาเฉพาะเลขคู่)
    // reduce(): คือการ "ยุบ" ข้อมูลทั้งอาเรย์ให้เหลือค่าเดียว (ในโค้ดคือการนำเลขทุกตัวมาบวกสะสมกันจนได้ผลรวม sum เท่ากับ 11)
// ตัวอย่างของเมธอดอาเรย์:

let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

let firstNumber = numbers.shift();

console.log(firstNumber); // 1
console.log(numbers); // [2, 3, 4, 5]

numbers.unshift(0); 
console.log(numbers); // [0, 2, 3, 4, 5]

let slicenumbers = numbers.slice(1, 3);
console.log(slicenumbers); // [2, 3]

numbers.splice(2, 1);
console.log(numbers); // [0, 2, 4, 5]

let squarenumbers = numbers.map(num => num * num);
console.log(squarenumbers); // [0, 4, 16, 25]

let even_number = numbers.filter(num => num % 2  === 0);
console.log(even_number); // [0, 2, 4]

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 11
