var navbar = getId('navbar');

var lock = '<span><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1395"><path d="M896 1024H128a128 128 0 0 1-128-128V512a128 128 0 0 1 128-128V256a256 256 0 0 1 256-256h256a256 256 0 0 1 256 256v128a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128zM640 256H384v128h256V256z" fill="#DFA92D" p-id="1396"></path></svg></span>';
var list = getId('list');
var msg12 = getId('msg12');
var leftShow = getId('showmyself');
var messagePart = getId('messagePart');
var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
//或者单独判断iphone或android
if(isMobile){
    console.log('ap ad');
    navbar.style.height = '6vh';
    navbar.style.lineHeight = '6vh';
    navbar.children[0].style.fontSize = '30px';
    $(list).addClass('msg_list_moblie');
    $(msg12).addClass('msg12_mobile');
    // navbar.getElementsByTagName('a')[0].style.lineHeight = '6vh';
    // navbar.children[1].style.lineHeight = '6vh';
    // navbar.children[1].style.height = '6vh';
    // navbar.children[1].style.width = '150px';
    // navbar.children[1].style.fontSize = '25px';


}else{

    console.log('pc');
}

window.onscroll =function () {
    var x=document.documentElement.scrollTop||document.body.scrollTop;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if(isMobile){

    }else {
        if(x>80){
            leftShow.style.position='fixed';
            $(messagePart).removeClass('col-md-offset-0').addClass('col-md-offset-2');
            // messagePart.style.marginLeft += '15px';
            //当滑到foot的时候的代码
        }else {
            leftShow.style.position='';
            $(messagePart).removeClass('col-md-offset-2').addClass('col-md-offset-0');
            // messagePart.style.marginLeft -= '15px';
        }

    }
};

var myswiper = new Swiper('.swiper-container',{
    speed:500,
    // loop:true,
    pagination:{
        el:'.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 2,
        clickable:true,
    },
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var content =getId('content');

function closeSwiper() {
    var swipers = document.getElementsByClassName('swiper-container');
    var main = getId('messagePart');
    main.removeChild(swipers[0]);
}
var ggg=1;
showPartMsg();


function showPartMsg(index) {
    var i = 0;
    if(!index){
        index = 1;
    }else {
        scrollTo('#msg_navbar',500);
        if(index===1)ggg=1;
        else ggg=2;
    }

    var msgs = document.getElementsByClassName('msg_list');
    for(; i < msgs.length ; i++){
        var msg = msgs[i];
        msg.style.display = 'none';
    }
    if(ggg === 1){
        list.style.display = 'block';
        msgs[index-1].style.display = 'block';
        content.style.display = 'none';
    }else{
        console.log("asdasd");
        list.style.display = 'block';
        msgs[ggg-1].style.display = 'block';
        content.style.display = 'none';
    }
}

var back=getId("back111");


function article(option) {
    option = option || {};
    this.id = option.id || '';
    this.caption  = option.caption || '未定义标题';
    this.author = option.author || '양찰';
    this.type = option.type || 'Other';
    this.time = option.time || '未注明时间';
    this.content = option.content || '';
    this.index = option.index || 0;
    this.encrypt = option.encrypt || false;
}


var msg1,msg2,msg3,msg4,msg5,msg6;


var msg_array2 = [];//算法用的




msg_array2.push(new article({
    caption:'关于POJ1222熄灯问题',
    type:'算法',
    time:'2018/9/05',
    index:8,
    encrypt:false,
    content:''
}));

msg_array2.push(new article({
    caption:'The theory of creating array',
    type:'Data Structure',
    time:'2018/5/24',
    index:7,
    content:''
}));

msg_array2.push(new article({
    caption:'Traverse Graph(DFS and BFS)',
    type:'Data Structure',
    time:'2018/5/18',
    index:6,
    content:''
}));


msg_array2.push(new article({
    caption:'Three ways of building Graph',
    type:'Data Structure',
    time:'2018/5/18',
    index:5,
    content:''
}));


msg_array2.push(new article({
    caption:'Hash List',
    type:'Data Structure',
    time:'2018/4/29',
    index:4,
    content:''
}));


msg_array2.push(new article({
    caption:'Insertion and deletion of binary tree nodes',
    type:'Data Structure',
    time:'2018/4/23',
    index:3,
    content:''
}));


msg_array2.push(new article({
    caption:'Binary tree traversal and its image representation',
    type:'Data Structure',
    time:'2018/4/11',
    index:2,
}));

msg_array2.push(new article({
    caption:'A variety of sorting algorithm code details',
    type:'Data Structure',
    time:'2018/3/23',
    index:1,
}));

var msg_array = [];
msg_array.push(new article({
    caption:'脱壳笔记',
    type:'LCG文章',
    time:'2018/8/25',
    index:7,
    encrypt:false,
    content:''
}));

msg6 = new article({
    caption:'80款大型精品游戏百度网盘合集',
    type:'福利分享',
    time:'2018/7/20',
    index:6,
    encrypt:true,
    content:''
});
msg_array.push(msg6);

msg5 = new article({
    caption:'TraceMe暴力破解法与逆向分析法',
    type:'LCG文章',
    time:'2018/7/15',
    index:5,
    content:''
});
msg_array.push(msg5);

msg4 = new article({
    caption:'汇编学习大总结',
    type:'汇编ASM',
    time:'2018/7/10',
    index:4,
    content:''
});
msg_array.push(msg4);

msg3 = new article({
    caption:'GFW(Great Fire Wall)的认识',
    type:'认知',
    time:'2018/6/29',
    index:3,
    content:''
});
msg_array.push(msg3);

msg2 = new article({
    caption:'Python学习网盘链接',
    type:'分享',
    time:'2018/6/18',
    index:2,
    encrypt:true,
    content:''
});
msg_array.push(msg2);

msg1 = new article({
    caption:'javascript判断用户是手机端还是PC端',
    type:'JavaScript',
    time:'2018/6/08',
    index:1,
    content:''
});
msg_array.push(msg1);






var model_lock = getId('model_lock');
/**首先给文章列表添加p标签*/
i = 0, len = msg_array.length;
var msgAll =getId('allMsg');
for (; i<len ;i++){
    var p = msg_array[i];
    if(p.encrypt){
        var a= '  '+lock;
    }else {
        a= '';
    }

    msgAll.innerHTML += '<p encrypt="'+p.encrypt+'" onclick="showMessage('+p.index+')">'+(i+1)+'. ['+ p.type+'] '+ p.caption+a+ '<span class="w3-right">'+ p.time+'</span></p>';

}

var msgAll2 =getId('allMsg2');
i=0;len = msg_array2.length;
for (; i<len ;i++){
    var p = msg_array2[i];
    if(p.encrypt){
        var a= '  '+lock;
    }else {
        a= '';
    }

    msgAll2.innerHTML += '<p encrypt="'+p.encrypt+'" onclick="showMessage('+p.index+',0)">'+(i+1)+'. ['+ p.type+'] '+ p.caption+a+ '<span class="w3-right">'+ p.time+'</span></p>';

}

var caption = getId('msg_caption');
var author = getId('msg_author');
var time = getId('msg_time');

var syntaxPart = getId('syntax');
var syntaxPart2 = getId('syntax2');
function showMessage(index,ii=1) {
    // console.log(msg_array[msg_array.length-index]);
    // var b =msg_array[msg_array.length-index];
    // console.log(b);
    // if (b.encrypt){
    //     model_lock.style.display = 'block';
    //     return ;
    // }设置加密，暂时先不做  2018.8.4
    if(ii === 1){
        ggg=1;
        content.style.display = 'block';
        list.style.display = 'none';
        var op = msg_array[msg_array.length-index];
        caption.innerText = op.caption;
        author.innerText = op.author;
        time.innerText = op.time;
        showPre(msg_array.length-index);
    }else {
        ggg=2;
        content.style.display = 'block';
        list.style.display = 'none';
        var op = msg_array2[msg_array2.length-index];
        caption.innerText = op.caption;
        author.innerText = op.author;
        time.innerText = op.time;
        showPre(msg_array2.length-index,0);
    }

}
function closeModel() {
    model_lock.style.display = 'none';
}

function showPre(index,ii=1) {
    var i=0,len = syntaxPart.children.length;
    for (;i< len ; i++){
        syntaxPart.children[i].style.display='none';
    }
    i=0;len = syntaxPart2.children.length;
    for (;i< len ; i++){
        syntaxPart2.children[i].style.display='none';
    }

   if(ii){

       syntaxPart.children[index].style.display='block';
       syntaxPart.children[index].style.marginTop='20px';
   }else{

       syntaxPart2.children[index].style.display='block';
       syntaxPart2.children[index].style.marginTop='20px';
   }
}

function getInterval(start,end) {
    var interval = end - start;
    interval/=1000;
    var day,hour,minute,second;
    day = Math.floor( interval / 60 / 60 / 24);
    hour = Math.floor( interval / 60 / 60 % 24);
    minute = Math.floor( interval / 60 % 60);
    second = Math.floor( interval % 60);
    return {
        day:day,
        hour:hour,
        minute:minute,
        second:second
    }
}

var time_target = [];
var day =getId('spanday');
var hour =getId('spanhour');
var minute =getId('spanminute');
var second =getId('spansecond');
var tarday =getId('tarday');

function setTimeText(num) {
    if(num>=0 && num <10)return '0'+num;
}
var timeid;
function setTimeInterval(target) {
    if(timeid){
        clearInterval(timeid);
    }
    timeid = setInterval(function () {
        var now = new Date();
        var inter = getInterval(now,target);
        day.innerText = inter.day;
        if(inter.hour<10){
            hour.innerText ='0'+inter.hour;
        }else {
            hour.innerText = inter.hour;
        }
        if(inter.minute<10){
            minute.innerText ='0'+inter.minute;
        }else {
            minute.innerText = inter.minute;
        }
        if(inter.second<10){
            second.innerText ='0'+inter.second;
        }else {
            second.innerText = inter.second;
        }

    },1000)
}
function timeTarget(op) {
    this.name = op.name;
    this.time=op.time;
}

var kaixue = new timeTarget({
    name:'开学',
    time:'2018-8-18'
});
time_target.push(kaixue);

var mybirthday = new timeTarget({
    name:'那一天',
    time:'2018-10-20'
});

time_target.push(mybirthday);

var mybirthday2 = new timeTarget({
    name:'Her Birthday',
    time:'2018-12-30'
});
time_target.push(mybirthday2);

function setDaoJiShi() {
    var now_a = new Date();
    var i = 0,len = time_target.length;
    for (; i < len ; i++){
        var end = new Date(time_target[i].time);
        if(end - now_a > 0 ){
            tarday.innerText = time_target[i].name;
            setTimeInterval(end);
            break;
        }
    }

}
setDaoJiShi();
