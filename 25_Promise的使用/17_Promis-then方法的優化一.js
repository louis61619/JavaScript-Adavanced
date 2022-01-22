// https://promisesaplus.com/

const PROMISE_STATUS_PENDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.stauts = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if(this.stauts === PROMISE_STATUS_PENDING) {
        // 使用微任務進行延遲以添加 then 的回調函數
        queueMicrotask(() => {
          this.stauts = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if(this.stauts === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          this.stauts = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // 如果在 then 調用的時候狀態已經確定了
    if (this.stauts === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.stauts === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }

    // 將成功和失敗的回調放到陣列中
    if (this.stauts === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled)
      this.onRejectedFns.push(onRejected)
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve('1111')
  // reject('222')
})

promise.then(res => {
  console.log(res)
}, err => {
  console.log(err)
})

promise.then(res => {
  console.log(res)
}, err => {
  console.log(err)
})

setTimeout(() => {
  promise.then(res => {
    console.log(res)
  })
})