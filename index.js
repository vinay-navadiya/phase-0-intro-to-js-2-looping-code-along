// Code your solutions in this file

function writeCards(names, value) { //call the function
    const messageNames = []; // call an array and run the for loop
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames;
}
writeCards(['Guadalupe','Ollie','Aki'], 'surprise'); // feed the values of the function parameters

function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  