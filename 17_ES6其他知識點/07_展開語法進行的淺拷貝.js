const info = {
  name: 'why',
  friend: { name: 'Kobe' }
}

const obj = { ...info, name: 'kkk' }


obj.friend.name = 'ejeje'

console.log(info)