function multiplicar() {
    const resultado = document.querySelector(".resultado")

    const numero1 = document.querySelector("#numero1").value
    const numero2 = document.querySelector("#numero2").value
    const numero3 = document.querySelector("#numero3").value

    resultado.innerHTML = `${numero1 * numero2 * numero3}`
}

const botao = document.querySelector("button")  


botao.addEventListener("click", multiplicar)
