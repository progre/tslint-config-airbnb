class SampleClass {
  member: {};

  method ( ) {
    this.member = {};
    const shorthand = 1;
    const isValid: boolean = null;

    // bad
    if (isValid === true) {
      // ...
    }

    // good
    if (isValid) {
      // ...
    }

    new Promise((resolve, reject) => {
    });

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
