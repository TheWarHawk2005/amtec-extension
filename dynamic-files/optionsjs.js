document.querySelector('#options-container').innerHTML = `
    <label for="auto-fullscreen">Auto Fullscreen</label>
    <input type="checkbox" id="auto-fullscreen" name="auto-fullscreen" value="auto-fullscreen">
`

document.querySelector('#save-options').addEventListener('click', function () {
    console.log('click')
})