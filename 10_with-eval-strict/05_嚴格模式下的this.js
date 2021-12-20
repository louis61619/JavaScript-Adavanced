'use strict'

function foo() {
  console.log(this)
}

foo()

const bar = () => {
  console.log(this)
}

bar()