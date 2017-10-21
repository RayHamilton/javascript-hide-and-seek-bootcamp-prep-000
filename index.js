function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n){
const rank = document.querySelectorAll('.ranked-list')
for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = (i + n).toString()
}

}

function deepestChild(){
//div#grand-node
var deepest = ''
var levelCount = 0
const all = document.querySelectorAll('div#grand-node')
for (let i = 0; i < all.length; i++){

}
return deepest
}
