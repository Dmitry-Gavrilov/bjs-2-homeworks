function parseCount(text) {
   let x = Number.parseInt(text, 10)
    if (isNaN(x)) {
        throw new Error ("Невалидное значение");
    } 
  return x;
}

function validateCount(text) {
   try {
   return parseCount(text);
     
  } catch(Error) {
     return Error;
}

}

//Задача 2



class Triangle {
  constructor(a,b,c) {
    
    if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
     
    
    getPerimeter() {
     return this.a + this.b + this.c;
         }
  
    getArea() {
      const p = this.getPerimeter() / 2;
      const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number(square.toFixed(3));
    }
   
}


function getTriangle(a, b, c) {
  
    try {
      let triangle = new Triangle(a, b, c);
      return triangle;
    } catch (Error) {
      return {
        getPerimeter() {
          return "Ошибка! Треугольник не существует"
        },
  
        getArea() {
          return "Ошибка! Треугольник не существует"
        }
      }
    }
  }
