const eventos = [
    {
      nome: "URT X MAMORÉ",
      descricao: "Confronto Épico nos Gramados!",
      data: "10/10/2023 às 15h",
      local: "Estadio Zama Maciel Avenida Brasil, 1085.",
      categoria: "esportivo"
    },
    {
      nome: "Mundial de Karatê-Valendo",
      descricao: "Prepare-se para uma competição de Karatê como nenhuma outra!",
      data: "25/10/2023 às 12h",
      local: "Centro de Treinamento Ashtekan",
      categoria: "esportivo"
    },
    {
      nome: "MEGA ENCONTRO AUTOMOTIVO",
      descricao: "Evento presencial em Centro de Convenções da Unipam",
      data: "09:00 às 18:00, 29 out 2023",
      local: "Unipam, Patos de Minas-MG",
      categoria: "cultural"
    },
    {
      nome: "Treinamento Funcional para a Saúde",
      descricao: "Entender as características anatômicas, fisiológicas e biomecânicas da mulher para a prescrição do treinamento de força seguro e eficiente.",
      data: "13/10/23 às 15:30",
      local: "Local a definir",
      categoria: "esportivo"
    },
    {
      nome: "Experiência rural",
      descricao: "Experiência rural no Recanto da Zezé: Trilha, cachoeira e comida mineira",
      data: "12/10/23 às 07:30",
      local: "Recanto da Zezé, São Gonçalo do Abaeté - MG",
      categoria: "cultural"
    }
  ];

  var eventosElemento = document.getElementById("eventos");
  eventos.forEach(evento => {
    var li = document.createElement("li");
    li.innerHTML = `<h1>${evento.nome}</h1>
      <p>${evento.descricao}</p>
      <p>${evento.data}</p>
      `
    eventosElemento.appendChild(li)
  })

  var filtro = document.getElementById("filtro");

  function filtrar() {
    eventosElemento.innerHTML = ``;
    eventos.forEach(evento => {
      if (filtro.value == "todos") {
        var li = document.createElement("li");
        li.innerHTML = `<h1>${evento.nome}</h1>
      <p>${evento.descricao}</p>
      <p>${evento.data}</p>
      `
        eventosElemento.appendChild(li)
      }
      else if (filtro.value == evento.categoria) {
        var li = document.createElement("li");
        li.innerHTML = `<h1>${evento.nome}</h1>
      <p>${evento.descricao}</p>
      <p>${evento.data}</p>
      `
        eventosElemento.appendChild(li)
      }

    })
  }