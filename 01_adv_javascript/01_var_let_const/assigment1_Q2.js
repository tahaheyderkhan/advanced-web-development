
    // ================= VAR =================
    // var can be used again and again (redeclare is allowed)
    // it can be reassigned also
    // it is function scoped but not block scoped
    // it also supports hoisting

    var a = "Mohammad";   // declare with value
    var abc;              // only declare without value
    var a = "Faraz";      // redeclare (allowed with var)
    console.log(a);       // output => Faraz

    var a = "Muhammad";   // again redeclare
    console.log(a);       // output => Muhammad

    // function scope example with var
    function testVar() {
      var b = "I am inside function using var";
      console.log(b);
    }
    testVar();

    // block scope test with var (it ignores block scope)
    {
      var c = "Var is not block scoped";
    }
    console.log(c); // still accessible outside block


    // ================= LET =================
    // let cannot be redeclared in same scope
    // but we can reassign its value
    // it is block scoped
    // it is not hoisted

    let x = "Ali";
    x = "Hassan";         // reassignment works
    console.log(x);       // output => Hassan

    {
      let y = "I am block scoped (let)";
      console.log(y);     // works here
    }
    // console.log(y);    // error: y is not defined outside block


    // ================= CONST =================
    // const means fixed value (cannot reassign)
    // cannot be redeclared
    // it is also block scoped
    // not hoisted

    const pi = 3.1416;
    console.log(pi);      // output => 3.1416

    {
      const z = "I am block scoped (const)";
      console.log(z);     // works inside block
    }
    // console.log(z);    // error: z is not defined outside block

    // pi = 3.15;         // error: const cannot be reassigned

  
