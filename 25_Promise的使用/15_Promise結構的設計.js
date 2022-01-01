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
        console.log('resolve 被調用')
        this.value = value
        this.onFulfilled()
      }
    }

    const reject = (reason) => {
      if(this.stauts === PROMISE_STATUS_PENDING) {
        this.stauts = PROMISE_STATUS_REJECTED
        console.log('reject 被調用')
        this.reason = reason
        this.onRejected()
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
  resolve()
})