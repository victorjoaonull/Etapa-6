$(document).ready(function () {

    $("#submitEdit").hide();
    let filmesMap = {};

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

    function carregarAnalises() {
        $.ajax({
            url: 'http://localhost:8080/analises/listar',
            method: 'GET',
            success: function (data) {
                $('#rowList').empty();

                for (let i = 0; i < data.length; i++) {
                    let analise = data[i];
                    let tituloFilme = filmesMap[analise.idFilme] || 'Filme desconhecido';
                    $("#rowList").append(
                        '<div class="col-4">' +
                        '<div class="card" id="card-add" style="margin: 30px;">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">  Nota: ' + analise.nota + ' Filme: ' + tituloFilme + '</h5>' +
                        '<p class="card-text">' + 'Analise: ' + analise.analise + '</p>' +
                        '<a class="btn btn-primary editAnaliseButton" data-id="' + analise.id + '" role="button">Editar</a>' +
                        '<a class="btn btn-warning deleteAnaliseButton" style="margin: 10px;" data-id="' + analise.id + '" role="button">Apagar</a>' +
                        '</div></div></div>'
                    );
                }

                $('.editAnaliseButton').click(function (event) {
                    let analiseId = parseInt($(this).data('id'));
                    let analise = data.find(a => a.id === analiseId);

                    if (analise) {
                        editaAnalise(analiseId, analise);
                    } else {
                        alert('Analise não encontrado!');
                    }
                });
                $('.deleteAnaliseButton').click(function (event) {
                    let analiseId = parseInt($(this).data('id'));
                    let analise = data.find(a => a.id === analiseId);

                    if (analise) {
                        deletarAnalise(analiseId);
                    } else {
                        alert('Analise não encontrado!');
                    }
                });
            },
            error: function () {
                alert('Não foi possível carregar as tarefas da API.');
            }
        });
    }
    function editaAnalise(id, analise, title) {

        $('#analise').val(analise.analise);
        $('#nota').val(analise.nota);
        $('#selectFilmes option:selected').val(analise.idFilme);

        $("#submitEdit").show();
        $("#submitAnalise").hide();
        $("#submitEdit").val(id);
    }

    function carregarFilmes() {
        $.ajax({
            url: 'http://localhost:8080/filmes/listar',
            method: 'GET',
            success: function (data) {
                $('#selectFilmes').empty();
                $('#selectFilmes').append('<option value="">Selecione um filme</option>');

                for (let i = 0; i < data.length; i++) {
                    let filme = data[i];
                    filmesMap[filme.id] = filme.titulo;
                    $("#selectFilmes").append(
                        '<option value="' + filme.id + '">' + filme.titulo + '</option>'
                    );
                }
            },
            error: function () {
                alert('Não foi possível carregar os filmes da API.');
            }
        });
    }

    function criarAnalise(analise) {
        $.ajax({
            url: 'http://localhost:8080/analises/adicionar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(analise),
            success: function (data) {
                $('#nota').val('');
                $('#analise').val('');
                alert("Analise foi criada!")
                carregarAnalises();
            },
            error: function () {
                alert('Não foi possível criar uma analise na API.');
            }
        });
    }

    $("#submitAnalise").click(function (event) {

        event.preventDefault();
        let analise = $('#analise').val();
        let nota = $('#nota').val();
        let filme = $('#selectFilmes option:selected').val();
        nota = parseFloat(nota);

        if (isNaN(nota) || nota < 0 || nota > 100) {
            alert("Somente é possível inserir notas de 0 a 100");
            return;
        }

        let objAnalise = {
            analise: analise,
            nota: nota,
            idFilme: filme
        };
        alert(objAnalise.idFilme);

        criarAnalise(objAnalise);

    });

    $("#submitEdit").click(function (event) {
        event.preventDefault();
    
        let analise = $('#analise').val();
        let nota = $('#nota').val();
        let filme = $('#selectFilmes option:selected').val();
        let id = $("#submitEdit").val();
        nota = parseFloat(nota);

        if (isNaN(nota) || nota < 0 || nota > 100) {
            alert("Somente é possível inserir notas de 0 a 100");
            return;
        }
    
        let analiseTotal = {
            analise: analise,
            nota: nota,
            idFilme: filme
        };
    
        alert(analiseTotal.idFilme);
        atualizarAnalise(id, analiseTotal);
    });

    function atualizarAnalise(id, analise) {
        $.ajax({
            url: 'http://localhost:8080/analises/atualizar/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                analise: analise.analise,
                nota: analise.nota,
                idFilme: analise.idFilme
            }),
            success: function (data) {
                alert('Analise atualizada na API com sucesso!');
                carregarAnalises();
            },
            error: function () {
                alert('Não foi possível atualizar a Analise na API.');
            }
        });
    }
    function deletarAnalise(id) {
        $.ajax({
            url: 'http://localhost:8080/analises/deletar/' + id,
            method: 'DELETE',
            contentType: 'application/json',

            success: function (data) {
                alert('Analise apagada com sucesso!');
                carregarAnalises();
            },
            error: function () {
                alert('Não foi possível apagar a analise na API.');
            }
        });
    }
    carregarFilmes()
    carregarAnalises()
}); 