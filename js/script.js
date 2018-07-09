(function() {
	'use strict';

	window.addEventListener('load', function() {
	  	var forms = document.getElementsByClassName('needs-validation');

	  	var validation = Array.prototype.filter.call(forms, function(form) {
		    form.addEventListener('submit', function(event) {
		      	if (form.checkValidity() === false) {
			        event.preventDefault();
			        event.stopPropagation();
		      	}
		      	form.classList.add('was-validated');
		    }, false);
	  	});
	}, false);
})();

$("#btnAddDetalhes").click(function(){
    $("#addDetalhes").hide();
    $("#Detalhes").show();
});

$("#btnDetalhes").click(function(){
    $("#Detalhes").hide();
    $("#addDetalhes").show();
});

$("form").submit(function( event ) {
  	event.preventDefault();

  	var forms = document.getElementsByClassName('needs-validation');
  	var validation = Array.prototype.filter.call(forms, function(form) {
      	if (form.checkValidity() === false) {
	        $.confirm({
			    title: 'Atenção!',
			    content: 'Existem informações obrigatórias que não foram informadas. Verifique!!!',
			    type: 'red',
			    typeAnimated: true,
			    buttons: {
			        tryAgain: {
			            text: 'Ok',
			            btnClass: 'btn-red',
			            action: function(){
			            }
			        }
			    }
			});
      	} else {
		  	save_to_txt();
		  	save_to_PDF();
		}
  	});
});

function save_to_txt(){

  	var txtData = 
  		"Nome: "+$("#firstName").val()+
        "\r\nSobrenome: "+$("#lastName").val()+
        "\r\nEndereço: "+$("#address").val()+
        "\r\nData de Nescimento: "+$("#dateNasc").val()+
        "\r\nEmail: "+$("#email").val()+
        "\r\nEstado: "+$("#state").val()+
        "\r\nCidade: "+$("#city").val()+
        "\r\nCEP: "+$("#cep").val()+
        "\r\n"+
        "\r\n=========================================="+
        "\r\nExperiência de Trabalho"+
        "\r\n=========================================="+
        "\r\n"+
        "\r\nEmpresa ( 1 ): "+($("#empresa1").val() == ""?"Não Informado":$("#empresa1").val())+
        "\r\nFunção ( 1 ): "+($("#funcao1").val() == ""?"Não Informado":$("#funcao1").val())+
        "\r\nTempo de Serviço ( 1 ): "+($("#tempoServ1").val() == ""?"Não Informado":$("#tempoServ1").val())+
        "\r\n"+
        "\r\nEmpresa ( 2 ): "+($("#empresa2").val() == ""?"Não Informado":$("#empresa2").val())+
        "\r\nFunção ( 2 ): "+($("#funcao2").val() == ""?"Não Informado":$("#funcao2").val())+
        "\r\nTempo de Serviço ( 2 ): "+($("#tempoServ2").val() == ""?"Não Informado":$("#tempoServ2").val())+
        "\r\n"+
        "\r\nEmpresa ( 3 ): "+($("#empresa3").val() == ""?"Não Informado":$("#empresa3").val())+
        "\r\nFunção ( 3 ): "+($("#funcao3").val() == ""?"Não Informado":$("#funcao3").val())+
        "\r\nTempo de Serviço ( 3 ): "+($("#tempoServ3").val() == ""?"Não Informado":$("#tempoServ3").val())+
        "\r\n"+
        "\r\nEmpresa ( 4 ): "+($("#empresa4").val() == ""?"Não Informado":$("#empresa4").val())+
        "\r\nFunção ( 4 ): "+($("#funcao4").val() == ""?"Não Informado":$("#funcao4").val())+
        "\r\nTempo de Serviço ( 4 ): "+($("#tempoServ4").val() == ""?"Não Informado":$("#tempoServ4").val())+
        "\r\n"+
        "\r\nEmpresa ( 5 ): "+($("#empresa5").val() == ""?"Não Informado":$("#empresa5").val())+
        "\r\nFunção ( 5 ): "+($("#funcao5").val() == ""?"Não Informado":$("#funcao5").val())+
        "\r\nTempo de Serviço ( 5 ): "+($("#tempoServ5").val() == ""?"Não Informado":$("#tempoServ5").val());

  	var blob = new Blob([txtData], {type: "text/plain;charset=utf-8"});
  	saveAs(blob, "[ Currículo ] "+$("#firstName").val()+ " "+$("#lastName").val()+".txt");

}

function save_to_PDF(){

  	var txtData = 
  		"Nome: "+$("#firstName").val()+
        "\r\nSobrenome: "+$("#lastName").val()+
        "\r\nEndereço: "+$("#address").val()+
        "\r\nData de Nescimento: "+$("#dateNasc").val()+
        "\r\nEmail: "+$("#email").val()+
        "\r\nEstado: "+$("#state").val()+
        "\r\nCidade: "+$("#city").val()+
        "\r\nCEP: "+$("#cep").val()+
        "\r\n"+
        "\r\n=========================================="+
        "\r\nExperiência de Trabalho"+
        "\r\n=========================================="+
        "\r\n"+
        "\r\nEmpresa ( 1 ): "+($("#empresa1").val() == ""?"Não Informado":$("#empresa1").val())+
        "\r\nFunção ( 1 ): "+($("#funcao1").val() == ""?"Não Informado":$("#funcao1").val())+
        "\r\nTempo de Serviço ( 1 ): "+($("#tempoServ1").val() == ""?"Não Informado":$("#tempoServ1").val())+
        "\r\n"+
        "\r\nEmpresa ( 2 ): "+($("#empresa2").val() == ""?"Não Informado":$("#empresa2").val())+
        "\r\nFunção ( 2 ): "+($("#funcao2").val() == ""?"Não Informado":$("#funcao2").val())+
        "\r\nTempo de Serviço ( 2 ): "+($("#tempoServ2").val() == ""?"Não Informado":$("#tempoServ2").val())+
        "\r\n"+
        "\r\nEmpresa ( 3 ): "+($("#empresa3").val() == ""?"Não Informado":$("#empresa3").val())+
        "\r\nFunção ( 3 ): "+($("#funcao3").val() == ""?"Não Informado":$("#funcao3").val())+
        "\r\nTempo de Serviço ( 3 ): "+($("#tempoServ3").val() == ""?"Não Informado":$("#tempoServ3").val())+
        "\r\n"+
        "\r\nEmpresa ( 4 ): "+($("#empresa4").val() == ""?"Não Informado":$("#empresa4").val())+
        "\r\nFunção ( 4 ): "+($("#funcao4").val() == ""?"Não Informado":$("#funcao4").val())+
        "\r\nTempo de Serviço ( 4 ): "+($("#tempoServ4").val() == ""?"Não Informado":$("#tempoServ4").val())+
        "\r\n"+
        "\r\nEmpresa ( 5 ): "+($("#empresa5").val() == ""?"Não Informado":$("#empresa5").val())+
        "\r\nFunção ( 5 ): "+($("#funcao5").val() == ""?"Não Informado":$("#funcao5").val())+
        "\r\nTempo de Serviço ( 5 ): "+($("#tempoServ5").val() == ""?"Não Informado":$("#tempoServ5").val());

  	var doc = new jsPDF();
	doc.text(txtData, 10, 10)
	doc.save('[ Currículo ] '+$("#firstName").val()+ " "+$("#lastName").val()+'.pdf');

}