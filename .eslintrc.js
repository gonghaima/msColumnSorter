module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // {{ Possible Errors, Style
    // The following rules point out areas where you might have made mistakes.
    "comma-dangle": 2, // disallow or enforce trailing commas
    "no-cond-assign": 2, // disallow assignment in conditional expressions
    "no-control-regex": 2, // disallow control characters in regular expressions
    "no-dupe-args": 2, // disallow duplicate arguments in functions
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    "no-duplicate-case": 2, // disallow a duplicate case label.
    "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
    "no-extra-semi": 2, // disallow unnecessary semicolons
    "no-func-assign": 2, // disallow overwriting functions written as function declarations
    "no-shadow": 2, // disallow declaration of variables already declared in the outer scope
    "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
    "max-depth": [2, 5], // specify the maximum depth that blocks can be nested (off by default)
    "max-params": [2, 5], // limits the number of parameters that can be used in the function declaration. (off by default)
    "no-unused-vars": [1, { "vars": "all", "args": "none" }], // ingore function parameters but other variable can't be unused
    "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
    "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": 2, // disallow sparse arrays
    "no-unreachable": 1, // disallow unreachable statements after a return, throw, continue, or break statement
    "indent": [1, 2],
    "use-isnan": 2, // disallow comparisons with the value NaN
    "valid-jsdoc": 2, // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string
    // mock.js contains tons of data from json response, it's not reasonable to force check the files
    // "quotes": ["error", "single"],
    // }}

    // {{ Best Practices
    // These are rules designed to prevent you from making mistakes.
    // They either prescribe a better way of doing something or help you avoid footguns.
    "block-scoped-var": 0, // treat var statements as if they were block scoped (off by default). 0: deep destructuring is not compatible https://github.com/eslint/eslint/issues/1863
    "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 2, // require return statements to either always or never specify values
    "curly": 2, // specify curly brace conventions for all control statements
    "default-case": 2, // require default case in switch statements (off by default)
    "dot-notation": 2, // encourages use of dot notation whenever possible
    "eqeqeq": 2, // require the use of === and !==
    "guard-for-in": 2, // make sure for-in loops have an if statement (off by default)
    "no-alert": 2, // disallow the use of alert, confirm, and prompt
    "no-caller": 2, // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 2, // disallow else after a return in an if (off by default)
    "no-labels": 2, // disallow use of labels for anything other then loops and switches
    "no-eq-null": 2, // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 2, // disallow use of eval()
    "no-extend-native": 2, // disallow adding to native types
    "no-extra-bind": 2, // disallow unnecessary function binding
    "no-fallthrough": 2, // disallow fallthrough of case statements
    "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 2, // disallow use of eval()-like methods
    "no-iterator": 2, // disallow usage of __iterator__ property
    "no-labels": 2, // disallow use of labeled statements
    "no-lone-blocks": 2, // disallow unnecessary nested blocks
    "no-loop-func": 2, // disallow creation of functions within loops
    "no-multi-spaces": 2, // disallow use of multiple spaces
    "no-multi-str": 2, // disallow use of multiline strings
    "no-native-reassign": 2, // disallow reassignments of native objects
    "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": 2, // disallow use of new operator for Function object
    "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
    "no-octal": 2, // disallow use of octal literals
    "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-proto": 2, // disallow usage of __proto__ property
    "no-redeclare": 2, // disallow declaring the same variable more then once
    "no-script-url": 2, // disallow use of javascript: urls.
    "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 2, // disallow use of comma operator
    "no-throw-literal": 2, // restrict what can be thrown as an exception (off by default)
    "no-unused-expressions": 2, // disallow usage of expressions in statement position
    "no-void": 2, // disallow use of void operator (off by default)
    "no-warning-comments": [0, {"terms": ["todo", "fixme"], "location": "start"}], // disallow usage of configurable warning terms in comments": 2, // e.g. TODO or FIXME (off by default)
    "no-with": 2, // disallow use of the with statement
    "radix": 2, // require use of the second argument for parseInt() (off by default)
    "vars-on-top": 2, // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
    // }}

    // {{ ECMAScript 6
    // These rules are only relevant to ES6 environments and are off by default.
    "no-var": 2, // require let or const instead of var (off by default)
    // }}

    // {{ eslint-plugin-react
    // React specific linting rules for ESLint
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-wrap-multilines": 2, // Prevent missing parentheses around multilines JSX
    "react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
    // "react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
    "react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
    "react/no-unknown-property": 2, // Prevent usage of unknown DOM property
    "react/self-closing-comp": 2, // Prevent extra closing tags for components without children
    "react/jsx-uses-react": 1, // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-vars": 1 // Prevent variables used in JSX to be incorrectly marked as unused
    // }}
  }
};
