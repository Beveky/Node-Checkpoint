const generator = require('generate-password');

// Generate random password
const password = generator.generate({
  length: 10,
  numbers: true
});

console.log('Generated password:', password);