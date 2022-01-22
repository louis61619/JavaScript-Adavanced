// https://promisesaplus.com/

const PROMISE_STATUS_PENDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}

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
          if (this.stauts !== PROMISE_STATUS_PENDING) return
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
          if (this.stauts !== PROMISE_STATUS_PENDING) return
          this.stauts = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    // executor(resolve, reject)
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // 如果沒有 onRejected 給予默認函數
    const defaultOnRejected = err => {throw err}
    onRejected = onRejected || defaultOnRejected

    const defaultOnFulfilled = value => value
    onFulfilled = onFulfilled || defaultOnFulfilled

    return new MyPromise((resolve, reject) => {
      // 如果在 then 調用的時候狀態已經確定了
      if (this.stauts === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.stauts === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 將成功和失敗的回調放到陣列中
      if (this.stauts === PROMISE_STATUS_PENDING) {
        if (onFulfilled) this.onFulfilledFns.push(() => {
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        if (onRejected) this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve('1111')
  // reject('222')
  // throw new Error('----')
})

promise.then(res => {
  console.log(res)
  return '222'
}, err => {
  console.log('---')
}).catch(err => {
  console.log(err)
}).then(res => {
  console.log(res)
  return '000'
}).finally(() => {
  console.log('---')
})