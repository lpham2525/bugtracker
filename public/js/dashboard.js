const addBtn = document.getElementById('addBtn')
const addModal = document.getElementById('addModal')

document.getElementById('addBtn').addEventListener('click', () => {
  document.getElementById('addModal').style.display = "block"
})

const getUser = () => {
  axios.get(`/api/users/${localStorage.getItem('user')}`)
    .then(({ data }) => {
      console.log(data)
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

document.getElementById('addTicket').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/tickets', {

    name: document.getElementById('ticketName').value,
    project: document.getElementById('projectName').value,
    priority: document.getElementById('priority').value,
    userId: localStorage.getItem('user')
  })
    .then(({ data }) => {
      console.log(data)
      let ticketElem = document.createElement('tr')
      ticketElem.innerHTML = `
        <th scope="row">${data.id}</th>
        <td>${document.getElementById('ticketName').value}</td>
        <td>${document.getElementById('projectName').value}</td>
        <td>${document.getElementById('priority').value}</td>
        <td>Open</td>
        <td><a href="#">Edit</a></td>`
      document.getElementById('tickets').append(ticketElem)
      document.getElementById('ticketName').value = ''
      document.getElementById('projectName').value = ''
      document.getElementById('priority').value = ''
    })
    .catch(err => console.error(err))
})

getUser()