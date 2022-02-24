
 const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]
 function createCounter(students, key) {
     const result = [];
     for (let i = 0; i < students.length; i++) {
         const obj = students[i];
         result.push(obj[key]);
         if (obj[key] === undefined)
         {
         result.pop(obj[key]);
         }
     }
     return result;
 }
 const res = createCounter(students, 'name')
 console.log(res);
