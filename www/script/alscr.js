// JavaScript source code
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

flag = 0;
pre = 0;
function con() {
    var cons = document.getElementsByClassName("indiv");
    document.getElementsByClassName("indiv")[pre].style.display = "none";
    document.getElementsByClassName("indiv")[flag].style.display = "inline";
    console.log(flag);
    pre = flag;
    if (flag == cons.length - 1) { //注意是cons.length-1，因為索引值是從0開始的
        flag = 0;
    } else {
        ++flag;
    }
}