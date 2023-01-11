function acessoLog (form){
    form.nome.value = form.nome.value.toUpperCase()

    if ((form.nome.value == "THIAGO" && form.senha.value == "91318201") || (form.nome.value == "KAUE" && form.senha.value == "123")) {
        location = "PageMain.html"
    } else {
        form.nome.value=""
        form.senha.value=""
        alert ("Não cadastrado")
        location = '/'
    }
}