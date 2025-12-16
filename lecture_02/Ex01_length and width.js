// สูตรการหาความยาวรอบรูปของสี่เหลี่ยมผืนผ้าคือ $P = 2 \times (L + W)$ . เราจะใช้ฟังก์ชันรับค่าความยาว (L) และความกว้าง (W) แล้วคำนวณตามสูตร

function findperimeter(length, width){
    const perimeter = 2 * (length + width);
    return perimeter;
}

const result1 = findperimeter(6, 7);
console.log(`findperimeter(6, 7) result1: ${result1}`);

const result2 = findperimeter(20, 10);
console.log(`findperimeter(20, 10) result1: ${result2}`);

const result3 = findperimeter(2, 9);
console.log(`findperimeter(6, 9) result1: ${result3}`);

const result4 = findperimeter(5, 5);
console.log(`findperimeter(5, 5) result1: ${result4}`);