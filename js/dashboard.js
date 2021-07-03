const addBtn = document.getElementById('addBtn')
const addModal = document.getElementById('addModal')

document.getElementById('addBtn').addEventListener('click', () => {
  document.getElementById('addModal').style.display = "block"
})

const getUser = () => {
  axios.get(`/api/users/${localStorage.getItem('user')}`)
    .then(({ data }) => {
      document.getElementById('userName').innerHTML = `
    <p>${data.name}</p> `
      document.getElementById('userRole').innerHTML = `
    <p>${data.role}</p>`

      data.tickets.forEach(ticket => {
        let ticketElem = document.createElement('tr')
        ticketElem.innerHTML = `
        <th scope="row">${ticket.id}</th>
        <td>${ticket.name}</td>
        <td>${ticket.project}</td>
        <td>${ticket.priority}</td>
        <td>Open</td>
        <td><a href="#">Edit</a></td>`
        document.getElementById('tickets').append(ticketElem)
      })
    })
    .catch(err => console.error(err))
}

document.getElementById('addticket').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/tickets', {
    name: document.getElementById('name').value,
    project: document.getElementById('project').value,
    priority: document.getElementById('priority').value,
    userId: localStorage.getItem('user')
  })
    .then(() => {
      let ticketElem = document.createElement('li')
      ticketElem.textContent = `Name: ${document.getElementById('name').value} | Project: ${document.getElementById('project').value} | Priority: ${document.getElementById('priority').value}`
      document.getElementById('tickets').append(ticketElem)
      document.getElementById('name').value = ''
      document.getElementById('project').value = ''
      document.getElementById('priority').value = ''
    })
    .catch(err => console.error(err))
})

getUser()