var navbar_right_menu = document.getElementById('navbar_right_menu');
var i = 0;
var len;
var navbar = document.getElementById('navbar');
i=0;
len = navbar_right_menu.children.length;
for (; i< len ; i++){
    var li = navbar_right_menu.children[i];
    li.onclick=rightMenuLiClick;
}

function rightMenuLiClick(e) {

    for (var j = 0, len = navbar_right_menu.children.length; j< len ; j++){
        var li = navbar_right_menu.children[j];
         li.className=li.className.replace('li_selected','');
         navbar.style.backgroundColor='#1ABC9C';
        li.style.backgroundColor='';
    }
    this.className+=(' li_selected');
    this.style.backgroundColor='#fee121';

    e.stopPropagation();
}

var alt_change= document.getElementById('alt_change');

alt_change.onclick = function (e) {
  if(e.altKey==true){
      this.innerText='其实真人比他帅';
  }
};

var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000,//可选选项，自动滑动
});