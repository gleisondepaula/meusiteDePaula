function ampliar(img) {
  const popup = document.getElementById('popup');
  const imgPopup = document.getElementById('imgPopup');
  imgPopup.src = img.src;
  popup.style.display = 'flex';
}

function fechar() {
  document.getElementById('popup').style.display = 'none';
}
function enviarNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('emailNewsletter');
  const msg = document.getElementById('msgNewsletter');
  
  const email = emailInput.value.trim();
  if(email === '') {
    msg.style.color = 'yellow';
    msg.textContent = 'Por favor, insira um e-mail válido.';
    return false;
  }
  
  // Simular envio (aqui você conectaria com servidor ou API real)
  msg.style.color = 'lightgreen';
  msg.textContent = `Obrigado por assinar, ${email}! Em breve você receberá nossas novidades.`;
  
  emailInput.value = '';
  
  return false;
}
