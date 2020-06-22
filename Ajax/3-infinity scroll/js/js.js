let preloading = false;

const showPreloader = () => {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'block'
  preloading = true
}
const hidePreloader = () => {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  preloading = false
}
const getData = () => {
  if (!preloading) {
    showPreloader();
    console.log('get data');
    fetch(' https://akademia108.pl/api/ajax/get-users.php', {})
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        for (let user of data) {
          let pID = document.createElement('p');
          let pName = document.createElement('p');
          let pWeb = document.createElement('p');

          pID.innetText = `User id: ${user.id}`;
          pName.innetText = `Name: ${user.name}`;
          pWeb.innerHTML = `Website: ${user.website}<br>-------------`;

          document.body.appendChild(pID);
          document.body.appendChild(pName);
          document.body.appendChild(pWeb);
        }

        hidePreloader()
      })
      .catch(error => {
        console.log(error);

      })
  }

}

const scrollToEndOfPage = () => {
  const docElement = document.documentElement;
  let scrollHeight = docElement.scrollHeight; //szerokość całej strony
  let scrollTop = docElement.scrollTop; // przescrollowany obszar od góry -liczba pikseli
  let clientHeight = docElement.clientHeight; //wewnętrzna wysokość okna przeglądarki
  let sumScrollTopClientHeight = Math.ceil(clientHeight + scrollTop); //jestem na dole strony
  console.log(`cała strona:${scrollHeight} top: ${scrollTop}  szerokość widoku:${clientHeight} ${sumScrollTopClientHeight}`);


  if (sumScrollTopClientHeight >= scrollHeight) {
    //jestem na dole strony
    console.log('end of web');
    // showPreloader();
    getData();

  }
}
window.addEventListener('scroll', scrollToEndOfPage)