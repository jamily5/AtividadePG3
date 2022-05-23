var form = {
    name: false,
    userEmail: false
}

function nomeInputForm() {
    var nome = document.getElementById('nomeIn')
    nome.addEventListener('keyup', function () {
        var valorNome = nome.value.trim()
        var spanAlertaNome = nome.nextElementSibling;

        btnEnviar()

        if (valorNome === '') {
            nome.style.borderColor = 'red';
            spanAlertaNome.style.display = 'flex';
            form.name = true;
        } else if (valorNome.length < 3) {
            nome.style.borderColor = 'red';
            spanAlertaNome.style.display = 'flex';
            form.name = true;
        }
        else {
            nome.style.borderColor = 'green';
            spanAlertaNome.style.display = 'none';
            form.name = false;
        }
    })
}

function emailInputForm() {
    var email = document.getElementById('emailIn')
    email.addEventListener('keyup', function () {
        var valorEmail = email.value.trim()
        var spanAlertaEmail = email.nextElementSibling;

        btnEnviar()

        if (valorEmail === '') {
            email.style.borderColor = 'red';
            spanAlertaEmail.style.display = 'flex';
            form.userEmail = true;
        } else if (valorEmail.length < 11) {
            email.style.borderColor = 'red';
            spanAlertaEmail.style.display = 'flex';
            form.userEmail = true;
        }
        else {
            email.style.borderColor = 'green';
            spanAlertaEmail.style.display = 'none';
            form.userEmail = false;
        }
    })
}


function commentForm() {
    var comment = document.getElementById('comentarioT')
    comment.addEventListener('keyup', function () {
        var valorCom = comment.value.trim()
        var spanAlertaComment = comment.nextElementSibling;

        if (valorCom === '') {
            comment.style.borderColor = 'red';
            spanAlertaComment.style.display = 'flex';
        } else if (valorCom.length < 10) {
            comment.style.borderColor = 'red';
            spanAlertaComment.style.display = 'flex';
        } else {
            comment.style.borderColor = 'green';
            spanAlertaComment.style.display = 'none';
        }
    })
}

function btnEnviar() {
    var btnEnviar = document.getElementById('btn-enviar')

    if (!form.name && !form.userEmail) {
        btnEnviar.removeAttribute('disabled')
    } else {
        btnEnviar.setAttribute('disabled', true)
    }
}


document.addEventListener('DOMContentLoaded', function () {
    nomeInputForm()
    emailInputForm()
    commentForm()
})

var campo = document.querySelector('textarea')
campo.value = '';