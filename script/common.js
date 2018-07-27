function replaceClassName(before,after) {
    this.className=this.className.replace(before,after);

}

function addClassName(string) {
    var p = [];
    p.push(this.className);
    p.push(string);
    this.className=p.join(' ');

}

function getId(id) {
    return document.getElementById(id);
}

function getTags(tags) {
    return document.getElementsByTagName(tags);
}

function colorChange(op,one,two) {
    if(one < two){
        // console.log('111');
        var timeId=setInterval(function () {
            one += 0xFFFA;

            var color=('#'+parseInt(one,10).toString(16)).toString();
            console.log(color);
            op.backgroundColor=color;

            if(one > two){
                clearTimeout(timeId);
                // console.log('1');
            }
        },10);

    }
}