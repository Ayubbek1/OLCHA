let tovar = document.createElement("div")
let img = document.createElement("img")
let p = document.createElement("p")
let ptwo = document.createElement("p")
let skidka = document.createElement("div")
let like = document.createElement("img")
let compare = document.createElement("img")
let pix = document.querySelector(".pix")

tovar.classList.add("tovar")
skidka.classList.add("skidka")
like.classList.add("rightpos")
compare.classList.add("leftpos")

img.src = "https://olcha.uz/image/220x220/products/m2LGlXk44Nb8SrB52Xr8Ul8k1M6U793xfemtaTp8WUZd8KUO76X0Gw8vLHFM.jpg"
like.src = "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/39.Heart-512.png"
compare.src = "https://cdn0.iconfinder.com/data/icons/news-and-magazine/512/statistic-256.png"
like.style.width = "24px"
compare.style.width = "24px"


p.innerHTML = "Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15.6"
ptwo.innerHTML = "2 566 320 сум"
skidka.innerHTML = "-26%"


tovar.append(img,p,ptwo,skidka,like,compare)
pix.append(tovar)





