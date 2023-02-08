// let dog = {
//     name: "Snoppy",
//     numLegs: 2
//   };
// //   JavaScript object
// console.log(dog.name);

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
//   };
  
//   dog.sayLegs();

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };
  
//   dog.sayLegs();

// function Dog(name, color, numLegs) {
//     this.name = "Spot";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
  
//   let myDog = new Dog("Spot", "brown", 4);
//   let hound = new Dog("Rupert", "brown", 4);

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }
  
//   let myHouse = new House(3);
  
//   console.log(myHouse instanceof House);

// function Dog(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
//   }
  
//   let terrier = new Dog("Terrier", 4);
  
//   let ownProps = [];
  
//   for (let property in terrier) {
//     if (terrier.hasOwnProperty(property)) {
//       ownProps.push(property);
//     }
//   }
  
//   console.log(ownProps);

// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.numLegs = 4;
  
//   let beagle = new Dog("Snoopy");