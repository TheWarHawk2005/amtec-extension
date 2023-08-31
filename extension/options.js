// chrome.storage.sync.set({ string: 'hello world' }, function () {
// 	console.log('saved')
// })

let xmh = new XMLHttpRequest()
xmh.open('GET', 'https://json.extendsclass.com/bin/d82f2b494e76',true)
xmh.setRequestHeader(
    'Content-type', 'application/json');
xmh.onload = function() {
    console.log(JSON.parse(xmh.responseText))
}
xmh.send()