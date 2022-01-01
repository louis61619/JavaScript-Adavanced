// https://promisesaplus.com/

const PROMISE_STATUS_PENDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.stauts = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if(this.stauts === PROMISE_STATUS_PENDING) {
        this.stauts = PROMISE_STATUS_FULFILLED
        // 使用微任務進行延遲以添加 then 的回調函數
        queueMicrotask(() => {
          this.value = value
          this.onFulfilled && this.onFulfilled(this.value)
        })
      }
    }

    const reject = (reason) => {
      if(this.stauts === PROMISE_STATUS_PENDING) {
        this.stauts = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected && this.onRejected(this.reason)
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}

const promise = new MyPromise((resolve, reject) => {
  // resolve('1111')
  reject('222')
})

promise.then(res => {
  console.log(res)
}, err => {
  console.log(err)
})