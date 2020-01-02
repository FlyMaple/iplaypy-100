function hello_nodejs() {
  console.log('nodejs');
}

function three_hello() {
  for (var i = 0; i < 10; i++) {
    hello_nodejs();
  }
}

if (require.main === module) {
  three_hello();
}
