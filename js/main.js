var yellowBox = document.querySelector(".change-color")

var setBlue = function() {
  yellowBox.classList.add('is-blue')
}

yellowBox.addEventListener('click', setBlue)