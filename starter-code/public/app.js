$.ajax({
  url: 'https://api.github.com/users/repos?type=owner',
  method: 'GET',
  headers: {
    Authorization: `token ${githubToken}`
  }
})
.then(
  data => {
    data.forEach(repo => $('#repo-template').append(`<p>${repo.name}</p>`))
  },
  err => {
    console.error(err)
  })
