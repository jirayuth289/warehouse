import express from 'express';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    // แสดงข้อความออกทาง terminal
    console.log('handling GET request...');
    // res.send() ใช้ส่งข้อมูลกลับไปยัง client ตามชนิดข้อมูลที่ส่งไป
    res.send('Hello from Express');
  
    // แต่ถ้าต้องการส่งข้อมูลที่เป็น json ใช้ res.json() แทนดีกว่า
    // res.json({name: "Somprasong", nickName: "Ball"});
  });

app.listen(PORT, () => {
    console.log('server start on port '+ PORT);
})