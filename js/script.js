// button:hover
let bak1 = document.getElementById('bak-1')
let bak2 = document.getElementById('bak-2')
let bak3 = document.getElementById('bak-3')
let bakbut1 = document.getElementById('bak-but-1')
let bakbut2 = document.getElementById('bak-but-2')
let bakbut3 = document.getElementById('bak-but-3')

bak3.onmousemove = function () {
    bakbut3.style.background = "green"
    bakbut3.style.transition = "800ms"
    bakbut3.style.transform = "scale(1.08 , 1.08)"
}
bak3.onmouseleave = function () {
    bakbut3.style.background = "#f0f0f0"
    bakbut3.style.transition = "1000ms"
    bakbut3.style.transform = "scale(1 , 1)"
}

bak2.onmousemove = function () {
    bakbut2.style.background = "green"
    bakbut2.style.transition = "800ms"
    bakbut2.style.transform = "scale(1.08 , 1.08)"
}
bak2.onmouseleave = function () {
    bakbut2.style.background = "#f0f0f0"
    bakbut2.style.transition = "1000ms"
    bakbut2.style.transform = "scale(1 , 1)"
}

bak1.onmousemove = function () {
    bakbut1.style.background = "green"
    bakbut1.style.transition = "800ms"
    bakbut1.style.transform = "scale(1.1 , 1.08)"
}
bak1.onmouseleave = function () {
    bakbut1.style.background = "#f0f0f0"
    bakbut1.style.transition = "1000ms"
    bakbut1.style.transform = "scale(1 , 1)"
}