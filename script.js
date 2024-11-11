
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Função para mostrar a imagem anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
}

// Carrossel automático a cada 5 segundos
setInterval(nextSlide, 5000);


// Formulário: Não permitir números ou caracteres especiais no nome
const caracteresPermitidosNome = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 'Backspace', 'ArrowLeft', 'ArrowRight', ' ']

document.getElementById("nome").addEventListener("keydown", function(event)
{
	if (!caracteresPermitidosNome.includes(event.key))
	{
		event.preventDefault()
	}
})

// Formulário: Não permitir letras ou caracteres especiais no telefone
const caracteresPermitidosTelefone = [...'0123456789', '(', ')', 'Backspace', 'ArrowLeft', 'ArrowRight', ' ']
	
document.getElementById("telefone").addEventListener("keydown", function(event)
{
	if (!caracteresPermitidosTelefone.includes(event.key))
	{
		event.preventDefault()
	}
})
// Formulário: Não permitir caracteres especiais no E-mail
const caracteresPermitidosEmail = [...'0123456789', ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 'Backspace', 'ArrowLeft', 'ArrowRight', '.', '@']

document.getElementById("email").addEventListener("keydown", function(event)
{
	if (!caracteresPermitidosEmail.includes(event.key))
	{
		event.preventDefault()
	}
})

// Função de validação para ver se os valores do input são válidos
document.getElementById("enviar").addEventListener("click", function(event)
{
	document.getElementById("erro1").innerText = ""
	document.getElementById("erro2").innerText = ""
	document.getElementById("erro3").innerText = ""
	document.getElementById("erro4").innerText = ""
	document.getElementById("erro1").style.color = "red"
	
	// Formulário: Verifica se o nome é valido (se é grande o suficiente para ter nome e sobrenome) e apresenta mensagem de erro se não for
	if (document.getElementById("nome").value.length < 5 && document.getElementById("nome").value.length > 0)
	{
		document.getElementById("erro1").innerText = "Nome muito curto. Por favor, insira seu nome e sobrenome"
	}
	
	// Formulário: Verifica se telefone é válido (números o suficiente) e apresenta mensagem de erro se não for
	if (document.getElementById("telefone").value.length < 11 && document.getElementById("telefone").value.length > 0)
	{
		document.getElementById("erro2").innerText = "Número de telefone inválido! Por favor, verifique se o número foi preenchido corretamente, incluindo o DDD"
	}

// Formulário: Verifica se e-mail é valido (contem @gmail.com ou outros dominios) e apresenta mensagem de erro se não for
	email = document.getElementById("email").value
	document.getElementById("erro3").innerText = ""
	
	if (!(email.endsWith("@gmail.com") && email.indexOf("@gmail.com") > 0) && !(email.endsWith("@yahoo.com") && email.indexOf("@yahoo.com") > 0) && !(email.endsWith("@soulasalle.com.br") && email.indexOf("@soulasalle.com.br") > 0) && !(email.endsWith("@lasalle.org.br") && email.indexOf("@lasalle.org.br") > 0) && email.length > 0)
	{
		document.getElementById("erro3").innerText = "E-mail inválido! Por favor, verifique se o e-mail foi preenchido corretamente, incluindo o domínio"
	}

// Formulário: Verifica se todas as informações foram preenchidas corretamente e apresenta mensagem de sucesso se for e previne o submit de mudar de página
	if ((document.getElementById("nome").value.length > 4) && ((email.endsWith("@gmail.com") || email.endsWith("@yahoo.com") || email.endsWith("@soulasalle.com.br") || email.endsWith("@lasalle.org.br")) && email.length > 0 && document.getElementById("telefone").value.length > 10))
	{
		event.preventDefault()
		document.getElementById("erro1").innerText = "Enviado com sucesso! Em breve estaremos entrando em contato de volta por E-mail e WhatsApp"
		document.getElementById("erro1").style.color = "green"
		document.getElementById("erro2").innerText = ""
		document.getElementById("erro3").innerText = ""
		document.getElementById("erro4").innerText = ""
		
		if (document.getElementById("tipo_servico").value == "TipoServiço")
		{
			document.getElementById("erro1").innerText = "Por favor, selecione um Tipo de Serviço"
			document.getElementById("erro1").style.color = "red"
		}
	}
	// Formulário: Previne o botão submit de mudar de página se todas opções forem preenchidas, mesmo se estiverem incorretas, sem que remova a caixa de "Preencha os dados". Tive muita luta pra conseguir resolver pois as vezes não funcionava por causa de alguma opção etc... Graças a Deus depois de muitas tentativas, funciona! ATUALIZAÇÃO: É mais facil que parece mas levou mais tempo que devia...
	else if (document.getElementById("nome").value.length > 0 && email.length > 0 && document.getElementById("telefone").value.length > 0)
	{
		event.preventDefault()
	}
})

// Mapa: Ao clicar no botão "Acessar via Waze (GPS)", abre um alerta perguntando se o usuário deseja abrir o link, e se clicar OK, abre
document.getElementById("waze").addEventListener("click", function(event)
{
	
	if (window.confirm("Deseja acessar o local via aplicativo Waze (GPS)? Uma nova aba será aberta"))
	{
		window.open('https://www.waze.com/pt-PT/live-map/meeting?token=15D6-610iazvn7nfmw-sd&locale=pt_BR&env=row&utm_campaign=share_drive&utm_source=waze_app&utm_medium=undefined', '_blank')
	}
})

// Navegação: Scroll suave para "parte da página"
document.querySelector("nav").addEventListener("click", function(event) 
{
    event.preventDefault()

    if (event.target.tagName === 'A') 
	{
        href = event.target.getAttribute('href')
        pagina = document.querySelector(href)
        
        if (pagina) 
		{
            pagina.scrollIntoView
			({
                behavior: 'smooth'
            })
        }
    }
})

// Imagem do Waze: Easter egg! Aperte L no teclado e mude a imagem para "Visite Leilton"...
document.addEventListener("keydown", function(event)
{
	if (event.key == "l")
	{
		document.getElementById("waze").src = "imagem/LEILTON.png"
	}
})

// Imagem do Waze: Easter egg! Solte L no teclado e volte a imagem ao normal "Visite nosso local"...
document.addEventListener("keyup", function(event)
{
	document.getElementById("waze").src = "imagem/waze.png"
})
