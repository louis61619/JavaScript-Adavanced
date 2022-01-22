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

  static resolve(value) {
    return new MyPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promises.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }

  static allSettiled(promises) {
    return new MyPromise((resolve, reject) => {
      const results = []
      promises.forEach(promise => {
        promise.then(res => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          results.push({ status: PROMISE_STATUS_REJECTED, reason: err })
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve, reject)
      })
    })
  }

  static any(promises) {
    // resolve 必須等到有一個成功的結果
    // reject 所有都失敗
    const reasons = []
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve, err => {
          reasons.push(err)
          if(reasons.length === promises.length) {
            reject(new AggregateError(reasons))
          }
        })
      })
    })
  }
}


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('1111')
  }, 500)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('2222')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('333')
  }, 700)
})

// MyPromise.all([p1, p2, p3]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })


MyPromise.any([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.errors)
})