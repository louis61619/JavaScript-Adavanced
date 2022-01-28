
class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    if(value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key, value) {
    let value = this.storage.getItem(key)
    if(value) {
      value = JSON.parse(value)
      return value
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

export const LocalCache = new MyCache()
export const SessionCache = new MyCache(false)
