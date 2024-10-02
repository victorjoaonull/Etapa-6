$(document).ready(function () {
    $("#submitEdit").hide();
    leCookie();
    function leCookie() {
        $.ajax({
            url: 'http://localhost:8080/cookies/le',
            method: 'GET',
            success: function(data) {
                console.log(data);
                if (data === "escuro") {
                    $("body").addClass("modo-escuro");
                    $("#modoClaro").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM8 0a.5.5 0 0 1 .5.5V2a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0zm0 12a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V12.5a.5.5 0 0 1 .5-.5zm6-4a.5.5 0 0 1 .5.5H15a.5.5 0 0 1 0-1h-1.5a.5.5 0 0 1-.5.5zM1 8a.5.5 0 0 1 .5.5H3a.5.5 0 0 1 0-1H1.5A.5.5 0 0 1 1 8zm10.657-5.657a.5.5 0 0 1 .707 0l1.061 1.06a.5.5 0 1 1-.707.708L11.657 3.05a.5.5 0 0 1 0-.707zM2.343 11.657a.5.5 0 0 1 .707 0l1.061 1.06a.5.5 0 1 1-.707.708l-1.061-1.06a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.06 1.061a.5.5 0 0 1-.708-.707l1.061-1.06a.5.5 0 0 1 .707 0zM2.343 3.05a.5.5 0 1 1 .707-.708l1.06 1.06a.5.5 0 0 1-.707.707L2.343 3.05z"/></svg>');
                } else if (data === "claro") {
                    $("body").removeClass("modo-escuro");
                    $("#modoClaro").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"></path></svg>');
                }
            },
            error: function(error) {
                console.error('Erro ao ler o cookie:', error);
                return null;
            }
        });
    }
    
    
    
    function gravaCookie(cor){
        $.ajax({
            url: 'http://localhost:8080/cookies/grava?tema=' + cor,
            method: 'GET',
            success: function (data) {
                alert("Cookie foi gravado com sucesso")
            },
            error: function () {
                alert('Não foi possível gravar os cookies');
            }
        });
    }
    

    $("#modoClaro").click( function (event) {
        event.preventDefault(); 
        
        

    $("body").toggleClass("modo-escuro");

    if ($("body").hasClass("modo-escuro")) {
        gravaCookie("escuro");
        $("#modoClaro").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM8 0a.5.5 0 0 1 .5.5V2a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0zm0 12a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V12.5a.5.5 0 0 1 .5-.5zm6-4a.5.5 0 0 1 .5.5H15a.5.5 0 0 1 0-1h-1.5a.5.5 0 0 1-.5.5zM1 8a.5.5 0 0 1 .5.5H3a.5.5 0 0 1 0-1H1.5A.5.5 0 0 1 1 8zm10.657-5.657a.5.5 0 0 1 .707 0l1.061 1.06a.5.5 0 1 1-.707.708L11.657 3.05a.5.5 0 0 1 0-.707zM2.343 11.657a.5.5 0 0 1 .707 0l1.061 1.06a.5.5 0 1 1-.707.708l-1.061-1.06a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.06 1.061a.5.5 0 0 1-.708-.707l1.061-1.06a.5.5 0 0 1 .707 0zM2.343 3.05a.5.5 0 1 1 .707-.708l1.06 1.06a.5.5 0 0 1-.707.707L2.343 3.05z"/></svg>');
    } else {
        gravaCookie("claro");
        $("#modoClaro").html('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"></path></svg>');
    }
    })

    function editaFilme(id, filme) {
        $('#lancamento').val(filme.data);
        $('#genero').val(filme.genero);
        $('#sinopse').val(filme.sinopse);
        $('#title').val(filme.titulo);

        $("#submitEdit").show();
        $("#submitFilme").hide();
        $("#submitEdit").val(id);
    }

    function carregarFilmes() {
        $.ajax({
            url: 'http://localhost:8080/filmes/listar',
            method: 'GET',
            success: function (data) {
                $('#rowList').empty();
                for (let i = 0; i < data.length; i++) {
                    let filme = data[i];
                    $("#rowList").append(
                        '<div class="col-4">' +
                        '<div class="card" id="card-add" style="margin: 30px;">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">  Titulo: ' + filme.titulo + '</h5>' +
                        '<h6 class="card-subtitle mb-2 text-muted">' + filme.genero + ' - ' + filme.data + '</h6>' +
                        '<p class="card-text">' + 'Sinopse: ' + filme.sinopse + '</p>' +
                        '<a class="btn btn-primary editFilmeButton" data-id="' + filme.id + '" role="button">Editar</a>' +
                        '<a class="btn btn-warning deleteFilmeButton" style="margin: 10px;" data-id="' + filme.id + '" role="button">Apagar</a>' +
                        '</div></div></div>'
                    );
                }

                $('.editFilmeButton').click(function (event) {
                    let filmeId = parseInt($(this).data('id'));
                    let filme = data.find(f => f.id === filmeId);

                    if (filme) {
                        editaFilme(filmeId, filme);
                    } else {
                        alert('Filme não encontrado!');
                    }
                });
                $('.deleteFilmeButton').click(function (event) {
                    let filmeId = parseInt($(this).data('id'));
                    let filme = data.find(f => f.id === filmeId); 

                    if (filme) {
                        deletarFilme(filmeId);
                    } else {
                        alert('Filme não encontrado!');
                    }
                });
            },
            error: function () {
                alert('Não foi possível carregar os filmes da API.');
            }
        });
    }

    function criarFilme(filme) {
        $.ajax({
            url: 'http://localhost:8080/filmes/adicionar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(filme),
            success: function (data) {
                
                $('#lancamento').val('');
                $('#genero').val('');
                $('#sinopse').val('');
                $('#title').val('');
                $("#filme-add").append('<div class="card" id="card-add"style="margin: 30px;"><div class="card-body"><h5 class="card-title">' + filme.titulo + ' - ' + filme.genero + '</h5><h6 class="card-subtitle mb-2 text-muted">' + filme.data + '</h6><p class="card-text">' + filme.sinopse + '</p><a href="#" class="card-link">Adicionar analise</a>');
                carregarFilmes();
            },
            error: function () {
                alert('Não foi possível criar o filme na API.');
            }
        });
    }

    $("#submitFilme").click(function (event) {

        event.preventDefault();
        let lancamento = $('#lancamento').val();
        let generoA = $('#genero').val();
        let sinopseA = $('#sinopse').val();
        let title = $('#title').val();

        if (!title || title.trim() === "") {
            alert("O título é obrigatório.");
            return; 
        }
    
        if (!generoA || generoA.trim() === "") {
            alert("O gênero é obrigatório.");
            return; 
        }

        let filme = {
            titulo: title,
            sinopse: sinopseA,
            genero: generoA,
            data: lancamento
        };
        criarFilme(filme);
    });

    $("#submitEdit").click(function (event) {

        event.preventDefault();
        let lancamento = $('#lancamento').val();
        let generoA = $('#genero').val();
        let sinopseA = $('#sinopse').val();
        let title = $('#title').val();
        let id = $("#submitEdit").val();

        if (!title || title.trim() === "") {
            alert("O título é obrigatório.");
            return;
        }
    
        if (!generoA || generoA.trim() === "") {
            alert("O gênero é obrigatório.");
            return; 
        }

        let filme = {
            titulo: title,
            sinopse: sinopseA,
            genero: generoA,
            data: lancamento
        };
        atualizarFilme(id, filme);
    });

    function atualizarFilme(id, filme) {
        $.ajax({
            url: 'http://localhost:8080/filmes/atualizar/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                titulo: filme.titulo,
                data: filme.data,
                genero: filme.genero,
                sinopse: filme.sinopse
            }),
            success: function (data) {
                // Recarrega a lista de tarefas 
                alert('Filme atualizado na API com sucesso!');
                carregarFilmes()
            },
            error: function () {
                alert('Não foi possível atualizar o filme na API.');
            }
        });
    }
    function deletarFilme(id) {
        $.ajax({
            url: 'http://localhost:8080/filmes/deletar/' + id,
            method: 'DELETE',
            contentType: 'application/json',

            success: function (data) {
                alert('Filme apagado com sucesso!');
                carregarFilmes()
            },
            error: function () {
                alert('Não foi possível apagar o filme na API.');
            }
        });
    }
    carregarFilmes()
}); 