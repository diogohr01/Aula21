Aluno = function(Nome, Sexo, Ra, Notas, Turma ) {
    this.Nome = Nome,
    this.Sexo = Sexo,
    this.Ra = Ra,
    this.Notas = Notas,
    this.Turma = Turma
    this.media = function() {
        let media = this.Notas.reduce( function(acumulador, item) {
            return acumulador + item;
        });
        media = media/this.Notas.length;
        return media.toFixed(2)
    }
     }
    
    let alunos = [];
    alunos.push(new Aluno("Filipe", "M", "1702", [10, 7, 9, 4], "Turma A - Noturna"))
    alunos.push(new Aluno("Carla", "F", "1886", [8, 5, 9, 7], "Turma B - Noturna"))
    alunos.push(new Aluno("Caio", "M", "1886", [8, 5, 10, 7], "Turma B - Noturna"))
    alunos.push(new Aluno("José", "M", "1886", [6, 5, 1, 10], "Turma B - Noturna"))
    alunos.push(new Aluno("Carla", "F", "1886", [7, 8, 9, 7], "Turma B - Noturna"))
    console.log(alunos[0].media())
    
    function mediaHomens(array) {
        var homens = array.filter(function (item) {
            return item.Sexo == "M" ;
    })
        var mulheres = array.filter(function(item) {
            return item.Sexo =="F";
        });
    let i= 0
    let acumuladorHomens= 0
    let acumuladorMulheres = 0
    let mediaH = 0
    let mediaM = 0
    do {
        mediaH = homens[i].Notas.reduce( (valorInicial,valorAtual ) => (valorInicial+valorAtual)) + mediaH
        acumuladorHomens = homens[i].Notas.length + acumuladorHomens
        i= i+1
    }
    while (i<homens.length);
    i=0
    do {
        mediaM = mulheres[i].Notas.reduce( (valorInicial,valorAtual ) => (valorInicial+valorAtual)) + mediaM
        acumuladorMulheres = mulheres[i].Notas.length + acumuladorMulheres
        i= i+1
    }
    while (i<mulheres.length);
    let mediaTotal = (mediaH+mediaM)/(acumuladorHomens+acumuladorMulheres)
    console.log("Média total de homens é de " +mediaH/acumuladorHomens)
    console.log("Média total de mulheres é de " + mediaM/acumuladorMulheres)
    console.log("A média total é de " + mediaTotal)
    }
    
    
    
    
    mediaHomens(alunos)

