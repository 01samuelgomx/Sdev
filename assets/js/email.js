// --------------------------------
// ---         Emaiil          ----
// --------------------------------
  
  (function(){
    emailjs.init("YOUR_PUBLIC_KEY");
  })();

  document.querySelector('.btn').addEventListener('click', function() {
    // Coletar dados do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    // Configurar parâmetros para o envio de e-mail
    var templateParams = {
      from_name: nome,
      from_phone: telefone,
      message: mensagem
    };

    // Enviar e-mail usando o serviço e modelo criado
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('E-mail enviado com sucesso!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Ocorreu um erro ao enviar o e-mail.');
      });
  });
