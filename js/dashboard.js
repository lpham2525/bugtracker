const addBtn = document.getElementById('addBtn')
const addModal = document.getElementById('addModal')

document.getElementById('addBtn').addEventListener('click', () => {
  console.log("testing button")
  event.preventDefault()
  console.log("showing modal")
  document.getElementById('addModal').style.display = "block"
})