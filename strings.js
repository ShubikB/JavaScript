let fullName = "Shubik"  + " Bhatt";
console.log(fullName);

console.log(`Hello! my name is ${fullName}. ande i am a student.`);


const productName = new String (`Headphones`);
console.log(productName.length);
console.log(productName.toUpperCase());
console.log(productName.charAt(3));
console.log(productName.indexOf("p")); //unmatche wii return -1 as a result



const newProduct = productName.substring(0,4) // "Head" wil be displayed
console.log(newProduct);

// Headphones | .length = 10

// from Start Index to the End index (exclusive)
productName.slice(-3); // 'nes'
productName.slice(-3, -1); // 'ne'
productName.slice(0, -1); // 'Headphone'
productName.slice(4, -1); // 'pone'


const address = "     Homebush     "
// console.log(address);
console.log(address.trim());



const url = " https://github.com/ShubikB%20Online "
console.log( url.includes('Shubik'));
console.log(url.replace('%20', ' '));

