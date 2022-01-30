class EventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArg
    })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if(handlers) {
      this.eventBus[eventName] = handlers.filter(handler => handler.eventCallback !== eventCallback)
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if(!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    })
  }
}

const eventBus = new EventBus()

function bbb(payload) {
  console.log('----', payload)
}

eventBus.on('aaa', bbb, { name: 'Louis' })

eventBus.off('aaa', bbb)

eventBus.emit('aaa', 123)