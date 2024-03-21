var cnt = 0;
var prev = "";
var cur = "";
var sum = 50;
var find = 0;
var j = 0;
var location1 = "";
var sc = "";
arr1 = new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10);

var len = 20;
function start() {
    for (var i = 0; i < 20; i++) {
        sc = document.createElement("div");
        sc.classList.add("s");

    }
    while (len > 0) {
        location1 = Math.ceil((Math.random() * (len - 1)));
        var x = document.createElement("div");
        x.classList = "cards";
        x.setAttribute("data-game", "set" + arr1[location1]);
        x.setAttribute("data-find", "f");
        document.getElementsByClassName("warpper")[0].appendChild(x);
        arr1[location1] = arr1[len - 1];
        len--;
    }
}

function check() {
    if (event.target == event.currentTarget)
        return;
    if (cnt == 2 || event.target.getAttribute("data-find") == "t")
        return;
    cur = event.target;
    if (cur == prev)
        return
    cur.classList.add(cur.getAttribute("data-game"))
    if (cnt == 0) {
        prev = cur;
        cnt = 1;
    }
    else {
        cnt = 2;
        setTimeout(close, 1000);
    }
}
function close() {
    if (prev.getAttribute("data-game") == cur.getAttribute("data-game")) {
        sum += 10;
        find += 1;
        for (var i = 0; i < 3; i++) {
            sc = document.createElement("div");
            sc.classList.add("s");
           
        }
       
        prev.style.opacity = "0.5";
        cur.style.opacity = "0.5";
        document.getElementById("sumScore").innerHTML = "הניקוד שלך: " + sum;
        cur.setAttribute("data-find", 't');
        prev.setAttribute("data-find", 't');
        if (find == 10) {
            document.getElementsByClassName("done")[0].style.display = "grid";
            document.getElementById("status").innerText = "הניקוד שלך: " + sum;;
        }

    } else {
        sum -= 5;
        if (sum == 0) {
            document.getElementsByClassName("done")[0].style.display = "grid";
            document.getElementById("end").style.display = "grid";
            document.getElementById("status").innerText = "game over ";
        }
        document.getElementById("sumScore").innerHTML = "הניקוד שלך: " + sum;
        sc = document.getElementsByClassName("s")[0];
        prev.classList.remove(prev.getAttribute("data-game"))
        cur.classList.remove(cur.getAttribute("data-game"))
    }
    cnt = 0;
    prev = cur = null;
}
function end() {
    document.getElementById("end").style.display = "grid";
}
