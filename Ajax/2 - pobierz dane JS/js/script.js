const getData = () => {
  fetch('https://akademia108.pl/api/ajax/get-post.php', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      document.body.appendChild(document.createElement('div'));
      let div = document.querySelector('div');
      div.innerHTML = `ID: ${data.id} <br> ${data.userId} <br> ${data.title} <br> ${data.body}`
    })
}
document.querySelector('button').addEventListener('click', getData);