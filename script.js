// script.js
function procurarRestaurantes() {
  const codigoPostal = document.querySelector('input').value;

  if (!codigoPostal.trim()) {
    alert('Por favor, insere um código postal.');
    return;
  }

  alert(`A procurar restaurantes perto de ${codigoPostal}...`);
  // Aqui irias implementar a lógica real de pesquisa
}
