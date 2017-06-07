class SampleClass {
  member: {};

  method ( ) {
    this.member = {};
    const shorthand = 1;
    return {
      a: 1,
      shorthand,
      b: 1
    };
  }
}

function main() {
  const sample = new SampleClass();
  sample.method();
}

main();
