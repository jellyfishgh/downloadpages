var ua = window.navigator.userAgent,
    re = /Android|iPhone|iPad|iPod/ig;
if (re.test(ua)) {
    var link1 = document.getElementById("dbtn1"),
        link2 = document.getElementById("dbtn2"),
        fullCoverDiv = document.getElementById("fullCover"),
        obP = document.getElementById("outerBrowser");
    fullCoverDiv.ontouchstart = function(e) {
        fullCoverDiv.style.display = "none";
    };
    link1.ontouchstart = function(e) {
        e.stopPropagation();
        link1.className = "d d_active";
        if (/micromessenger/ig.test(ua)) {
            if (/Android/ig.test(ua)) obP.innerHTML = "选择<span style='color:red'>&quot;在浏览器中打开&quot;</span>";
            if (/iPhone|iPad|iPod/ig.test(ua)) obP.innerHTML = "选择<span style='color:red'>&quot;在Safari中打开&quot;</span>";
            fullCoverDiv.style.display = "block";
            return false;
        }
        return true;
    };
    link1.ontouchend = function(e) {
        link1.className = "d";
    };
    link2.ontouchstart = function(e) {
        e.stopPropagation();
        link2.className = "d d_active";
        if (/micromessenger/ig.test(ua)) {
            if (/Android/ig.test(ua)) obP.innerHTML = "选择<span style='color:red'>&quot;在浏览器中打开&quot;</span>";
            if (/iPhone|iPad|iPod/ig.test(ua)) obP.innerHTML = "选择<span style='color:red'>&quot;在Safari中打开&quot;</span>";
            fullCoverDiv.style.display = "block";
            return false;
        }
        return true;
    };
    link2.ontouchend = function(e) {
        link2.className = "d";
    };
    if (/Android/ig.test(ua)) {
        link1.href = link2.href = dygame_ver_android.ver_url;
        link1.innerHTML = link2.innerHTML = "Android 下载";
    } else if (/iPhone|iPad|iPod/ig.test(ua)) {
        var iurl = "https://itunes.apple.com/cn/app/yi-wang-lian-jie-you-xi-nei-wai/id1015325531?l=cn&mt=8";
        link1.href = link2.href = iurl;
        link1.innerHTML = link2.innerHTML = "App Store 下载";
    }
    new FullPage({
        id: "pageContain",
        slideTime: 800,
        continuous: false,
        effect: {
            transform: {
                translate: 'Y',
                scale: [1, 1],
                rotate: [0, 0]
            },
            opacity: [0, 1]
        },
        mode: 'wheel,touch,nav:navBar',
        easing: 'ease'
    });
} else {
    window.location.href = "http://dygame.duoyi.com/";
}