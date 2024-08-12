const fs = require('fs');

test('Check if "Hello World!" is in index.html', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  expect(html).toContain('<h1>Hello World!</h1>');
});
