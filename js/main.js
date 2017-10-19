//banner下的轮播图
{
    let lcbxObj = document.querySelector(".lcbx ul");
    let containerObj=document.querySelectorAll(".bannerxia");
    let nextObj = document.querySelector(".youbtn");
    let prevObj = document.querySelector(".zuobtn");
    let now = 4;
    let dir = "r";
    let t = setInterval(moveFn, 2000);

    function moveFn() {
        if (dir === "r") {
            now++;
        } else if (dir === "l") {
            now--;
        }
        lcbxObj.style.transition = "all 1s";

        lcbxObj.style.marginLeft = -295 * now + "px";
    }

    lcbxObj.addEventListener("transitionend", function () {
        if (now === 12) {
            now = 4;
            lcbxObj.style.transition = "none";
            lcbxObj.style.marginLeft = "-1180px";
        };
        if (now === 0) {
            now = 8;
            lcbxObj.style.transition = "none";
            lcbxObj.style.marginLeft = "-2360px";
        }
    });
    containerObj.onmouseover = function () {
        clearInterval(t);
    }
    containerObj.onmouseout = function () {
        t = setInterval(moveFn, 2000);
    }
    let flag = true;
    nextObj.onclick = function () {
        dir = "r";
        if (flag) {
            flag = false;
            moveFn();
        }
    };
    prevObj.onclick = function () {
        dir = "l";
        if (flag) {
            flag = false;
            flag -= 2;
            moveFn();
        }
    }
}
// 公告
{
    let nextObj=document.querySelector(".notice .r-a");
    let prevObj=document.querySelector(".notice .l-a");
    let noticeObj=document.querySelector(".notice ul");
    let notice=document.querySelector(".notice");
    let now=0;
    nextObj.onclick=function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";

    };
    prevObj.onclick=function(){
        if(now===0){
            now=3;
        }
        now--;
        noticeObj.style.marginTop=-38*now+"px";
    }
    let t=setInterval(function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";
    },1000);
    notice.onmouseover=function(){
        clearInterval(t);
    };
    notice.onmouseout=function(){
        t=setInterval(function(){
            if (now===2){
                now=-1;
            }
            now++;
            noticeObj.style.marginTop=-38*now+"px";
        },1000)
    }
}
//banner轮播
{
    let pagers=document.querySelectorAll(".lunbo li");
    let imgs=document.querySelectorAll(".bannertu img");
    let bannerbox=document.querySelector(".bannerbox");
    let zbtnn=document.querySelector(".zbtnn");
    let ybtnn=document.querySelector(".ybtnn");
    let now=0;
    let z=10;  //层级
    let flag=true;
    let t=setInterval(move,3000);
    bannerbox.onmouseover=function () {
        clearInterval(t)
    }
    window.addEventListener("blur",function () {
        clearInterval(t);
    })
    bannerbox.onmouseout=function () {
        t=setInterval(move,3000)
    }
    window.addEventListener("onfocus",function () {
        t=setInterval(move,3000);
    })
    ybtnn.onclick=function () {
        if(flag){
            move();
        }
        flag=false;
    }
    zbtnn.onclick=function () {
        if(flag){
            move("l");
        }
        flag=false;
    }
    function move (dir="r") {
        if(dir==="r"){
            imgs[now].classList.add("leftOut");
            pagers[now].classList.remove("active");
            now++;
            if(now===imgs.length){
                now=0;
            }
            pagers[now].classList.add("active");
            imgs[now].classList.add("rightIn");
        }
        if(dir==="l"){
            imgs[now].classList.add("rightOut");
            pagers[now].classList.remove("active");
            now--;
            if(now===-1){
                now=imgs.length-1;
            }
            pagers[now].classList.add("active");
            imgs[now].classList.add("leftIn");
        }
        imgs[now].style.zIndex=z++;
    }
    imgs.forEach(function(ele){
        ele.addEventListener("animationend",function(){
            ele.className="";
            flag=true;
        })
    })
    pagers.forEach(function (ele,index) {
        ele.onclick=function () {
            if(flag) {
                flag = false;
                if (index < now) {
                    imgs[now].classList.add("rightOut");
                    imgs[index].classList.add("leftIn");

                } else if (index > now) {

                    imgs[now].classList.add("leftOut");
                    imgs[index].classList.add("rightIn");
                }
                imgs[index].style.zIndex = z++;
                pagers[now].classList.remove("active");
                pagers[index].classList.add("active");
                now = index;
            }
            flag=false;
        }

    })
}