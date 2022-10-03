
function newImage (url, left, bottom){
let object = document.createElement('img')
object.src = url
object.style.position = 'fixed'
object.style.left = left +'px'
object.style.bottom = bottom + 'px'
document.body.append(object)
return object
}


newImage('assets/green-character.gif', 100., 100)
newImage('assets/pine-tree.png', 200, 300)
