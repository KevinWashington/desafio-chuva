let createTopic = document.querySelector(".create-topic")
let sendTopic = document.querySelector(".send-topic")
let createdTopic = document.querySelector(".created-topic")
let createTopicBtn = document.querySelector("#create-topic-btn")
let sendTopicBtn = document.querySelector("#send-topic-btn")
let createdTopicBtn = document.querySelector("#created-topic-btn")

createTopicBtn.addEventListener("click", function(){
    createTopic.style.display = "none"
    sendTopic.style.display = "block"
})

sendTopicBtn.addEventListener("click", function(){
    sendTopic.style.display = "none"
    createdTopic.style.display = "block"

    let assunto = document.querySelector("#assunto").value
    let comment = document.querySelector("#textarea1").value
    let divNova = document.createElement("div");
    divNova.classList.add("topic")
    divNova.innerHTML ='<div class="esconderpergunta"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1671 7.33594C20.3494 7.51823 20.4406 7.73958 20.4406 8C20.4406 8.26042 20.3494 8.48177 20.1671 8.66406L8.60461 20.2266C8.42232 20.4089 8.20097 20.5 7.94055 20.5C7.68014 20.5 7.45878 20.4089 7.27649 20.2266L0.713989 13.6641C0.531698 13.4818 0.440552 13.2604 0.440552 13C0.440552 12.7396 0.531698 12.5182 0.713989 12.3359L2.27649 10.7734C2.45878 10.5911 2.68014 10.5 2.94055 10.5C3.20097 10.5 3.42232 10.5911 3.60461 10.7734L7.94055 15.1484L17.3156 5.77344C17.4718 5.59115 17.6801 5.5 17.9406 5.5C18.201 5.5 18.4223 5.59115 18.6046 5.77344L20.1671 7.33594ZM7.51086 11.4766L3.13586 7.10156C2.82336 6.78906 2.82336 6.48958 3.13586 6.20312L4.89368 4.44531C5.02389 4.3151 5.16711 4.25 5.32336 4.25C5.50566 4.25 5.66191 4.3151 5.79211 4.44531L7.94055 6.59375L13.8781 0.695312C13.9822 0.565104 14.1124 0.5 14.2687 0.5C14.451 0.5 14.6072 0.565104 14.7374 0.695312L16.4952 2.45312C16.8077 2.73958 16.8077 3.03906 16.4952 3.35156L8.37024 11.4766C8.26607 11.6068 8.12284 11.6719 7.94055 11.6719C7.75826 11.6719 7.61503 11.6068 7.51086 11.4766Z" fill="#707070"/></svg><h3>Aguardando feedback dos autores</h3><a>Editar tópico</a></div><h3 class="assunto">'+assunto+'</h3><h4 class="user">Carlos Henrique Santos</h4><p class="comment">'+comment+'</p><div class="options"><svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="16" r="2" fill="#ED7839"/><circle cx="2" cy="9" r="2" fill="#ED7839"/><circle cx="2" cy="2" r="2" fill="#ED7839"/></svg><img src="assets/images/gostar.png" alt=""><div class="likes">1 like</div><div class="respostas">1 resposta</div></div><div class="resposta-comments"><div class="resposta-autor"><h4 class="user">Carlos Henrique Santos</h4><p class="comment">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p></div>'
            
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    let divpai=document.querySelector(".topics")
    divpai.prepend(divNova)

    document.querySelector("#assunto").value = ""
    document.querySelector("#textarea1").value = ""
})

createdTopicBtn.addEventListener("click", function(){
    createdTopic.style.display = "none"
    sendTopic.style.display = "block"
})

let respostas = document.querySelectorAll('.respostas')

respostas.forEach(resposta => {
    resposta.addEventListener('click', function(ev) {
        var respostaClass = ev.target.parentNode.parentNode.childNodes[9]

        if(respostaClass.classList.value.indexOf("verresposta") > -1){
            respostaClass.classList.remove('verresposta')
        }else{
            respostaClass.classList.add('verresposta')
        }
    })
});
