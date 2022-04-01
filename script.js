function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

//Create an array from the list of dogs
let navContainer = document.querySelectorAll(".breed")

//function for fetching dog image from API via click event listener
navContainer.forEach((dogButton) => {
  dogButton.addEventListener("click", (e) => {
    let name = e.target.getAttribute('name')
    
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((response) => response.json()).then((data) => {
        let image = document.querySelector('.randomDogImage');
        image.src = data.message
      })
  })
})

