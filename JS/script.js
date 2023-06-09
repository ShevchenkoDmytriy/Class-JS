// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
//   get radius() {
//     return this._radius;
//   }
//   set radius(radius) {
//     this._radius = radius;
//   }
//   get diameter() {
//     return this._radius * 2;
//   }
//   get area() {
//     return Math.PI * Math.pow(this._radius, 2);
//   }
//   get circumference() {
//     return 2 * Math.PI * this._radius;
//   }
// }
// let circle = new Circle(5);
// document.write("Новий радіус окружності:", circle.radius+"<br>"); 
// document.write("Новий діаметр окружності:", circle.diameter+"<br>"); 
// document.write("Нова площа окружності:", circle.area+"<br>"); 
// document.write("Нова довжина окружності:", circle.circumference+"<br>"); 

//////////////////////////////////

// class CssClass {
//   constructor(className) {
//     this._className = className;
//     this._styles = [];
//   }
//   setStyle(style) {
//     this._styles.push(style);
//   }
//   removeStyle(style) {
//     const index = this._styles.indexOf(style);
//     if (index !== -1) {
//       this._styles.splice(index, 1);
//     }
//   }
//   getCss() {
//     const stylesString = this._styles.join(";\n");
//     return `.${this._className} {\n${stylesString}\n}`;
//   }
// }
// let myClass = new CssClass("my-class");
// myClass.setStyle("color: red");
// myClass.setStyle("font-size: 16px");
// document.write(myClass.getCss());
// myClass.removeStyle("color: red");
// document.write(myClass.getCss());

//////////////////////////////////////

// class ShoppingItem {
//   constructor(name, quantity, purchased = false) {
//     this.name = name;
//     this.quantity = quantity;
//     this.purchased = purchased;
//   }
// }
// class ShoppingList {
//   constructor() {
//     this.items = [];
//   }
//   addItem(name, quantity) {
//     const existingItem = this.items.find(item => item.name === name);
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       const newItem = new ShoppingItem(name, quantity);
//       this.items.push(newItem);
//     }
//   }
//   purchaseItem(name) {
//     const item = this.items.find(item => item.name === name);
//     if (item) {
//       item.purchased = true;
//     }
//   }
//   displayList() {
//     const purchasedItems = [];
//     const nonPurchasedItems = [];
//     for (const item of this.items) {
//       if (item.purchased) {
//         purchasedItems.push(item);
//       } else {
//         nonPurchasedItems.push(item);
//       }
//     }
//     const sortedItems = [...nonPurchasedItems, ...purchasedItems];
//     document.write("Shopping List:<br>");
//     for (const item of sortedItems) {
//       const status = item.purchased ? "[x]" : "[ ]";
//       document.write(`${status} ${item.name} - ${item.quantity}`+"<br>");
//     }
//   }
// }
// let myList = new ShoppingList();
// myList.addItem("Apple", 2);
// myList.addItem("Banana", 3);
// myList.addItem("Apple", 5); 
// myList.purchaseItem("Banana"); 
// myList.displayList();

//////////////////////////////////////

class ReceiptItem {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

class Receipt {
  constructor() {
    this.items = [];
  }
  addItem(name, quantity, price) {
    const newItem = new ReceiptItem(name, quantity, price);
    this.items.push(newItem);
  }
  printReceipt() {
    console.log("Receipt:");
    for (const item of this.items) {
      document.write(`${item.name} - ${item.quantity} x ${item.price} = ${item.quantity * item.price}`+"<br>");
    }
  }
  getTotalSum() {
    let totalSum = 0;
    for (const item of this.items) {
      totalSum += item.quantity * item.price;
    }
    return totalSum;
  }
  getMostExpensiveItem() {
    let maxPrice = 0;
    let maxItem = null;
    for (const item of this.items) {
      if (item.price > maxPrice) {
        maxPrice = item.price;
        maxItem = item;
      }
    }
    return maxItem;
  }
  getAveragePrice() {
    if (this.items.length === 0) {
      return 0;
    }
    let totalSum = this.getTotalSum();
    return totalSum / this.items.length;
  }
}
let myReceipt = new Receipt();
myReceipt.addItem("Apple", 2, 5);
myReceipt.addItem("Banana", 3, 10);
myReceipt.addItem("Orange", 1, 8);
myReceipt.printReceipt();
document.write("Total sum:"+ myReceipt.getTotalSum()+"<br>");
document.write("Most expensive item:"+ myReceipt.getMostExpensiveItem()+"<br>");
document.write("Average price:"+ myReceipt.getAveragePrice()+"<br>");