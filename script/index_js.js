var navbar_right_menu = document.getElementById('navbar_right_menu');
var i = 0;
var len;
var navbar = document.getElementById('navbar');
var iframes= getTags('iframe');
var loadingbar=getId('loading_bar');
iframes[0].src="http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d385387.70417984686!2d120.22111249390957!3d31.440414715435203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b384344d95ebd5%3A0xbc3734bbf9b13ffd!2z5rGf5Y2X5aSn5a2m!5e0!3m2!1szh-CN!2scn!4v1532694596445"
i=0;
len = navbar_right_menu.children.length;
var model_show_caption,model_show_file;
for (; i< len ; i++){
    var li = navbar_right_menu.children[i];
    li.onclick=rightMenuLiClick;
}
var alt_change= document.querySelectorAll('.alt_key');
i=0;len=alt_change.length;
for (;i<len;i++){
    alt_change[i].altKey=i+1;
    alt_change[i].onclick = function (e) {
        e=e||window.event;
        if(e.altKey==true){
            if (this.altKey===1)
            this.innerText='我从小到大喜欢过很多女生，全是那种学习超级棒的，而且超级可爱。渐渐的长大了，她们的面容也逐渐在我脑海里变得模糊，而没有变的是她们的身影。这类女生是我一生追求的目标，不期望她有多么崇高和善良，只希望有共同步伐，共同的心，一同面对未来的，不管是美好还是风雨。她一直是我前进的基础和源动力。只是这种女生还是在梦里有，温婉而恬静，不浓也不淡，舒畅的感觉...qjx，czy，wzm, 如果有一天再梦到你们，只能是梦魇之时，一个成年人蜷缩在幼时的摇摇椅上慢慢酣睡.....';
            else if (this.altKey===2)this.innerText='17361730169';
        }
    };
}
/**li标签点击滑动事件**/
var backtotop= getId('backtoTop');
backtotop.onclick=function () {
  scrollTo('html',1000);
};
/**输入框判断*/
var fakebtn=getId('fakebtn');
var fakebtn2=getId('fakebtn2');
var model1=getId('model-1');
var model2=getId('model-2');
var model3=getId('model-3');
var model4=getId('model-4');
var model5=getId('model-5');
var input_name = getId('input_name');
fakebtn.onclick=function(){
    modelShow(0);
    if (input_name.value.length < 2){
        console.log('l:'+input_name.value.length);
        model2.style.display = 'none';
        model1.style.display = 'none';
        model3.style.display = 'none';
        model4.style.display = 'block';
        if (input_name.value.length === 0) {

            model4.children[0].innerText = '兄弟，你没输入东西你点我干什么！';
        }else {
            model4.children[0].innerText = '您的名字不会就一个字吧....我不信';
        }

    }else {
        if(input_name.value === '王文文'|| input_name.value === 'www'){
            model3.children[0].innerText='Only For You';
            model3.style.display = 'block';
            model3.children[1].children[0].innerText=input_name.value;
            model3.children[2].innerHTML = '<p>&nbsp;&nbsp;&nbsp;&nbsp;首先很高兴你能够来我的博客，对此表示深深的感谢！（鞠躬）</p><p>&nbsp;&nbsp;&nbsp;&nbsp;这里有一首小诗：</p><p>&nbsp;&nbsp;&nbsp;&nbsp;低的头走在路一旁的是我</p><p>&nbsp;&nbsp;&nbsp;&nbsp;别人不明白我内心是悲还是喜</p><p>&nbsp;&nbsp;&nbsp;&nbsp;商店的布偶又是谁的新欢</p><p>&nbsp;&nbsp;&nbsp;&nbsp;雨停，停下脚步，原来是你</p><p>&nbsp;&nbsp;&nbsp;&nbsp;（相视）...</p>'
        }else{
            model2.style.display = 'block';
            if(input_name.value.includes('爸爸')){
                model2.children[1].children[0].innerText= input_name.value.replace('爸爸','儿子');
            }else if(input_name.value.includes('父亲')){
                model2.children[1].children[0].innerText=input_name.value.replace('父亲','儿子');
            }else if(input_name.value.includes('亲爹')){
                model2.children[1].children[0].innerText=input_name.value.replace('亲爹','儿子');
            }else{
                model2.children[1].children[0].innerText=input_name.value;
            }
        }
    }
    return false;
};

// 赞助的事情哈哈哈哈
fakebtn2.onclick = function () {
    modelShow(0);
    model3.style.display = 'block';
    model3.children[1].children[0].innerText='同学';
    model3.children[0].innerText='在线资助山区少年';
    model3.children[2].innerHTML = '<p>&nbsp;&nbsp;&nbsp;&nbsp;首先很高兴你能够来我的博客，对此表示深深的感谢！（鞠躬）</p><p>&nbsp;&nbsp;&nbsp;&nbsp;其实进入网页的时候相信你也发现了，加载网页的过程比较长</p><p>&nbsp;&nbsp;&nbsp;&nbsp;因为我这个网站是借助Github的一个功能实现的</p><p>&nbsp;&nbsp;&nbsp;&nbsp;而且由于天朝的种种原因，访问起来比设在国内的站点速度较慢</p><p>&nbsp;&nbsp;&nbsp;&nbsp;假如有一台服务器的话，这个速度就可以提升不少，而且再借助添加AJAX的话速度会更快</p><p>&nbsp;&nbsp;&nbsp;&nbsp;而且有服务器之后，就可以完成网页与用户之间的交互，比如评论功能，访客量，根据不同用户分发功能等等。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;如果您有兴趣的话可以选择<span class="w3-flat-nephritis" style="cursor: pointer">赞助</span>我</p>'
};

function zanZhu() {

    modelShow(0);
    model5.children[0].innerText='资助山区少年买个服务器';
    model5.style.display = 'block';
}


/**图标点击事件**/
var model_box = getId("model_box");
model_box.onclick = function () {
    $(this).animate({opacity:0},500);
    setTimeout(function () {
        model_box.style.display='none';
        model4.style.display = 'none';
    },500);
};
var qqIcon=getId('QQ_icon');
var WeChatIcon=getId('WeChat_icon');
var sinaIcon=getId('sina_icon');
qqIcon.onclick = function(){
    model_show_caption = ' Q Q ';
    model_show_file= 'pic/QQ.jpg';
    modelShow();
};
WeChatIcon.onclick = function(){
    model_show_caption = ' WeChat ';
    model_show_file= 'pic/wechat.jpg';
    modelShow();
};
sinaIcon.onclick = function(){
    model_show_caption = ' 新浪微博 ';
    model_show_file= 'pic/sina.png';
    modelShow();
};
var thirdPage=getId('third_page');
window.onscroll=function () {
    var x=document.documentElement.scrollTop||document.body.scrollTop;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if(x>=100){
        loadingbar.style.display='block';
        loadingbar.style.width = scrolled + "%";
    }
    else {
        loadingbar.style.display='none';
    }

    if(x>=784){
        backtotop.style.display='block';
    }
    else {
        backtotop.style.display='none';
    }
    thirdPage.offsetTop = getId('icon_list').offsetTop+getId('icon_list').offsetHeight;


};
var needVpnApp = document.getElementsByClassName('vpn');
var nickname = getId('nickname');
i=0;len=needVpnApp.length;
var needVpnApp_name = ['Twitter','Facebook','Instagram'];
for (;i<len;i++){
    needVpnApp[i].setAttribute('optxt',needVpnApp_name[i]);
    needVpnApp[i].onclick = function () {
        nickname.style.display='block';
        nickname.children[2].innerText='复制名称';
        nickname.children[0].innerText=this.getAttribute('optxt');

    }
}
/**复制用户名操作**/
var vpn = getId('vpn');
copyClip(vpn,'abd771567');


/*swiper*/
var myswiper = new Swiper('.swiper-container',
    {
        direction: 'horizontal',
        loop:true,
        // loopAdditionalSlides : 3,
        speed:1000,
        autoplay:{
            delay:3000
        }
    });

/************使用函数区*********/


//右键标题li便签的函数
function rightMenuLiClick(e) {

    for (var j = 0, len = navbar_right_menu.children.length; j< len ; j++){
        var li = navbar_right_menu.children[j];
        li.className=li.className.replace('li_selected','');
        navbar.style.backgroundColor='#1ABC9C';
        li.style.backgroundColor='';
        li.goto=j+1;
    }
    this.className+=(' li_selected');
    this.style.backgroundColor='#fee121';
    if(this.goto===1){
        scrollTo('#mid_message',1500);
    }else if(this.goto===2){
        scrollTo('#pre_second_page',1500);
    }else if(this.goto===3){
        scrollTo('#third_page',1500);
    }

    e.stopPropagation();
}

function getSSR() {
    var ssrcontainer = getId('ssrContainer');
    ssrcontainer.style.display='block';
    ssrcontainer.style.margin = '0 auto';
    ssrcontainer.value='ssr://NDcuODguMjIyLjQ4OjI1NTIxOm9yaWdpbjpyYzQtbWQ1OnBsYWluOmNHbDFRMlJXLz9vYmZzcGFyYW09JnJlbWFya3M9VmtsUU1TRG1sckRsaXFEbG5hRXgmZ3JvdXA9NkpDZDVZMmM1WnlJNDRHdQ'
}

function modelShow(open=1) {
    /**需要事先穿两个参数
     * model_show_caption = ' 新浪微博 ';
     model_show_file= 'pic/sina.png';
     */
    model1.style.display = 'none';
    model2.style.display = 'none';
    model3.style.display = 'none';
    model4.style.display = 'none';
    model5.style.display = 'none';
    var screenWidth = document.body.offsetWidth || document.documentElement.offsetWidth;
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    var x=screenHeight>screenWidth?screenWidth:screenHeight;
    if(x>1000)x*=0.3;
    else x*=0.7;
    model_box.style.display = 'block';
    $(model_box).animate({opacity:1},500);
    if (open===1){
        // alert('ceshi');
        model2.style.display= 'none';
        model1.style.display= 'block';
        model_box.children[0].children[0].children[0].innerText=model_show_caption;
        model_box.children[0].children[2].children[0].width= x;
        model_box.children[0].children[2].children[0].src=model_show_file;
    }

}

function copyClip(op,string){
    var st = '';
    st+=string;
    op.addEventListener('click',function() {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', string);
        input.setAttribute('readonly', 'readonly');
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
        }
        document.body.removeChild(input);
        op.innerText+='√';
    },false);
}








function scrollTo(ele, speed){
    if(!speed) speed = 300;
    if(!ele){
        $("html,body").animate({scrollTop:0},speed);
    }else{
        if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
    }
    return false;
}



