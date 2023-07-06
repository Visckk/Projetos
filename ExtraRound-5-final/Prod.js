var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});

function slider (anything){
    document.querySelector('.one') .src = anything;
  };
  let menu = document.querySelector ('#menu-icon');
  let navbar = document.querySelector ('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.clasList.toggle('open')}

function menuShow(){
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
   } else {
   menuMobile.classList.add('open');
}
}

