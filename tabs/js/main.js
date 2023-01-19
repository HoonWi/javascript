var targetLink = document.querySelectorAll('.tab-menu a')
var tabContent = document.querySelectorAll('#tab-content > div')
console.log(tabContent)
console.log(targetLink)

for(var i = 0; i < targetLink.length; i++){
  targetLink[i].addEventListener('click',function(e){
    e.preventDefault();
    var orgTarget = e.target.getAttribute('href')
    console.log(orgTarget)

    var tabTarget=orgTarget.replace('#','')

    for(var x = 0; x < tabContent.length ; x++){
      tabContent[x].style.display='none'
    }
    document.getElementById(tabTarget).style.display='block'

    for(var j = 0; j<targetLink.length; j++){
      targetLink[j].classList.remove('active')
      e.target.classList.add('active')
    }
  })  
}
document.getElementById('tabs-1').style.display='block'

// var orgTarget='#tabs-1'
// var tabTarget=orgTarget.replace('#','')
// document.getElementById(tabTarget).style.display='block'
