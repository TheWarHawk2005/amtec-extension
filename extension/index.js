let xmh = new XMLHttpRequest()
xmh.open('GET', 'https://raw.githubusercontent.com/TheWarHawk2005/amtec-upgrade/main/index.js',true)
xmh.onload = function() {
    console.log(xmh.responseText)
}
xmh.send()