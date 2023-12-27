const fs = require('fs');

// Create a file named welcome.txt with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created');
});

// Read and log data from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from hello.txt:', data);
});