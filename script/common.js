function getId(id) {
    return document.getElementById(id);
}

function getTags(tags) {
    return document.getElementsByTagName(tags);
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
function copyClip(op,string){

    op.addEventListener('click',function() {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', string);
        input.setAttribute('readonly', 'readonly');
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            console.log('复制成功');
        }
        document.body.removeChild(input);
    },false);
}
