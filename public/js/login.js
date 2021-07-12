document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()

  let role = document.getElementById('role')
  axios.post('/api/users', {
    name: document.getElementById('registerName').value,
    role: role.options[role.selectedIndex].text
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

  axios.get(`/api/login/${document.getElementById('loginName').value}`)
    .then(({ data }) => {
      console.log(data)
      localStorage.setItem('user', data.id)
      window.location = `/dashboard/${data.id}`
    })
    .catch(err => console.error(err))
})