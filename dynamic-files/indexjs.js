// The online version of this file will be dynamically checked for updates
/* -------------------------------------------------------------------------- */


//* SET UP
addButton()
chrome.storage.sync.get(
	(items) => {
		if (items.autoFullscreen == true) toggleFullscreen()
	}
)

function addButton() {
	let container = document.querySelector('.py-3.contents')
	container.firstChild.style.padding = '0px'
	childElement = container.firstChild.firstChild
	console.log(childElement)
	
	fullscreenButton = document.createElement('BUTTON')
	fullscreenButton.id = 'fullscreen'
	fullscreenButton.innerHTML = 'Toggle Fullscreen'
	fullscreenButton.style.position = "absolute"
	fullscreenButton.style.top = '0px'
	fullscreenButton.style.zIndex = "1"
	fullscreenButton.addEventListener("click", function () { toggleFullscreen(fullscreenButton) })
	childElement.appendChild(fullscreenButton)
}

function toggleFullscreen(fullscreenButton) {
	parent = fullscreenButton.parentElement
	parent.style.width = '100%'
	parent.style.height = '100%'
	parent.scrollIntoView(true)

	container = parent.parentElement
	container.style.width = '100%'
	container.style.height = '95vh'
	console.log('Toggled fullscreen')
}