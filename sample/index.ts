class SampleClass {
  member: {};

  method ( ) {
    this.member = {};
  }
}

function main() {
  const sample = new SampleClass();
  sample.method();
}

main();
