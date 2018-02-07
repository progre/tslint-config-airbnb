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

function rule15_3(isValid: boolean, name: string, collection: Object[]) {
  // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }

  // bad
  if (name) {
    // ...
  }

  // good
  if (name !== '') {
    // ...
  }

  // bad
  if (collection.length) {
    // ...
  }

  // good
  if (collection.length > 0) {
    // ...
  }
}

function rule15_7_bad(a: Object, b: Object, c: Object) {
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;
}

function rule15_7_good(a: Object, b: Object, c: Object) {
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
}
