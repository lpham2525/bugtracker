document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/users', {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value
  })
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('user', data.id)
      console.log(data.id)
      window.location = `/dashboard/${data.id}`
    })
    .catch(err => console.error(err))
})

document.getElementById('login').addEventListener('click', event => {
  console.log(event)
  event.preventDefault()

  axios.get(`/api/login/${document.getElementById('lname').value}`)
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('user', data.id)
      window.location = `/dashboard/${data.id}`
    })
    .catch(err => console.error(err))
})