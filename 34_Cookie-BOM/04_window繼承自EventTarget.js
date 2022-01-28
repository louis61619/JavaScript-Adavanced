console.log(window.__proto__.__proto__.__proto__)

const clickHandler = () => {
  console.log('window 發生點擊')
}

window.addEventListener("click", clickHandler)

window.removeEventListener("click", clickHandler)



window.addEventListener("myEvent", () => {
  console.log("myEvent~")
})

window.dispatchEvent(new Event("myEvent"))