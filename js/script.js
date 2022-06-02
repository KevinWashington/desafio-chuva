let list = document.querySelector('ul')
let itens = document.querySelectorAll('.menu-option')

list.addEventListener('click', function(ev) {
    itens.forEach((item) => {
            item.classList.remove("active")
            
            if (ev.target == item){
                ev.target.classList.add('active')
            }
        }
    )
})

let btnText = document.querySelector("#seeMore");

btnText.addEventListener('click', function() {
    let dots = document.getElementById("dots")
    let moreText = document.getElementById("more")

    btnText.style.display = "none"
    dots.style.display = "none"
    moreText.style.display = "inline"
})
