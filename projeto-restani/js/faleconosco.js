const form = document.querySelector("#form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const msg = document.querySelector("#msg")
const result = document.querySelector("#result")
const duv_select = document.querySelector("#duv_select")
const resuldDu = document.querySelector("#resuldDu")


// EXIBIR E OCULTAR CAMPOS
document.getElementById("duv_select").addEventListener("click", () =>{

  if(duv_select.value === "pedi"){
    document.getElementById("resuldDu").style.display = 'block'
    resuldDu.innerHTML = `Para você fazer o pedido basta clicar em um de nossos produtos ou, nos icones do whatsapp, que você será redirecionado!`
   }
   if(duv_select.value === "produ"){
    document.getElementById("resuldDu").style.display = 'block'
    resuldDu.innerHTML = `Para ver os produtos Restani, basta clicar no menu "produtos"!`
   }
   if(duv_select.value === "rede"){
    document.getElementById("resuldDu").style.display = 'block'
    resuldDu.innerHTML = `Para acessar a rede social da Restani, vá até o rodapé e clique no icone do facebook`
   }
  
   if(duv_select.value === "ond"){
    document.getElementById("resuldDu").style.display = 'block'
    resuldDu.innerHTML = `Na página "Quem somos" você consegue ver a história e saber tudo sobre a Restani`
   }
   if (duv_select.value === ""){
    document.getElementById("resuldDu").style.display = 'none'
      }
})


// SUBIMISSÃO DO FORM
form.addEventListener('submit', (event) =>{
event.preventDefault()


// VALIDAÇÕES
if (!name.value){
result.innerHTML = "Por favor digite o seu nome"
result.className = "error"
name.className = "errorBorder FormName"
name.focus()
return
}
name.className = "right FormName"

if (!email.value){
  result.innerHTML = "Por favor digite o seu E-mail"
  result.className = "error"
  email.className = "errorBorder FormEmail"
  email.focus()
  return
  }
  email.className = "right FormEmail"

  if (!assunto.value){
    result.innerHTML = "Por favor digite o assunto"
    result.className = "error"
    assunto.className = "errorBorder FormAssunto"
    assunto.focus()
    return
    }
    assunto.className = "right FormAssunto"
  
    
  if (!msg.value){
    result.innerHTML = "Por favor digite a sua mensagem"
    result.className = "error"
    msg.className = "errorBorder FormMessage"
    msg.focus()
    return
    }
  

// LIMPAR TUDO 
  result.innerHTML = ""
  name.focus()
  name.value = email.value =  assunto.value = msg.value = ""
  } )

