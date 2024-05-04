document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário
  
  // Obtém o valor da barra de pesquisa
  const searchTerm = document.getElementById("searchInput").value;
  
  // Aqui você pode fazer algo com o termo de pesquisa, como enviar uma solicitação AJAX para buscar dados relacionados.
  console.log("Termo de pesquisa: ", searchTerm);
});

  // Aqui você pode fazer algo com o termo de pesquisa, como enviar uma solicitação AJAX para buscar dados relacionados.
  console.log("Termo de pesquisa: ", searchTerm);
;

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário
  
  // Obtém os valores do formulário de contato
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Aqui você pode enviar os dados do formulário para o servidor, por exemplo, usando uma solicitação AJAX.
  console.log("Nome: ", name);
  console.log("Email: ", email);
  console.log("Mensagem: ", message);
});

