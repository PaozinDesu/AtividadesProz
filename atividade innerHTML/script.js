let h1 = document.getElementById("titulo")
let ul = document.querySelector("ul")
let a = document.querySelector("a")
let ol = document.getElementById("lista-ordenada")

h1.innerText = "Titulo"
a.innerText = "Prozeducação"

ul.innerHTML = `
            <li>lista</li>
            <li>lista</li>
            <li>lista</li>
            `
ol.innerHTML = `
            <li><a href="">link</a></li>
            <li><a href="">link</a></li>
            <li><a href="">link</a></li>
            `