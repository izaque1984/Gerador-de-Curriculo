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

$("#linkMais1").click(function(){
    $('#formacao2').css('display', 'flex');
    $(this).parent().remove();
});

$("#linkMais2").click(function(){
    $('#formacao3').css('display', 'flex');
    $(this).parent().remove();
});

$("#linkMaisExp1").click(function(){
    $('#experiencia2').css('display', 'flex');
    $(this).parent().remove();
});

$("#linkMaisExp2").click(function(){
    $('#experiencia3').css('display', 'flex');
    $(this).parent().remove();
});


$("#linkMaisQualificacao1").click(function(){
    $('#dqualificacao2').css('display', 'flex');
    $(this).parent().remove();
});

$("#linkMaisQualificacao2").click(function(){
    $('#dqualificacao3').css('display', 'flex');
    $(this).parent().remove();
});

$("#linkMaisQualificacao3").click(function(){
    $('#dqualificacao4').css('display', 'flex');
    $(this).parent().remove();
});

$("#linkMaisQualificacao4").click(function(){
    $('#dqualificacao5').css('display', 'flex');
    $(this).parent().remove();
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

function getDados(){

  	var txtData = 
  		"Nome: "+$("#firstName").val()+
        "\r\nSobrenome: "+$("#lastName").val()+
        "\r\nTelefone: "+$("#fone").val()+
        "\r\nSexo: "+$("#sexo").val()+
        "\r\nEstado Civil: "+$("#estcivil").val()+
        "\r\nTem Filho(s)?: "+$("#filhos").val()+
        "\r\nEndereço: "+$("#address").val()+
        "\r\nData de Nescimento: "+$("#dateNasc").val()+
        "\r\nEmail: "+$("#email").val()+
        "\r\nEstado: "+$("#state").val()+
        "\r\nCidade: "+$("#city").val()+
        "\r\nCEP: "+$("#cep").val()+
        "\r\n"+
        "\r\n=========================================="+
        "\r\nObjetivo"+
        "\r\n=========================================="+
        "\r\n"+
        "\r\n"+$("#objetivo").val()+
        "\r\n"+
        "\r\n=========================================="+
        "\r\nFormação Acadêmica"+
        "\r\n=========================================="+
        "\r\n"+
        "\r\nCurso: "+($("#curso").val() == ""?"Não Informado":$("#curso").val())+
        "\r\nInstituição: "+($("#inst").val() == ""?"Não Informado":$("#inst").val())+
        "\r\nSituação: "+($("#anocurso").val() == ""?"Não Informado":$("#anocurso").val())+
        ($("#anofim").val() == ""?"Não Informado":$("#anofim").val())+ 

        "\r\n"+($("#curso2").val() == ""?"":"\r\n"+getCurso(2))+ 
        "\r\n"+($("#curso3").val() == ""?"":"\r\n"+getCurso(3))+ 

        "\r\n"+
        "\r\n=========================================="+
        "\r\nUltímas Experiências Profissionais"+
        "\r\n=========================================="+
        "\r\n"+
        "\r\nEmpresa: "+($("#expempresa").val() == ""?"Não Informado":$("#expempresa").val())+
        "\r\nAno de Entrada: "+($("#expanoent").val() == ""?"Não Informado":$("#expanoent").val())+
        "\r\nAno de Saída: "+($("#expanosai").val() == ""?"Não Informado":$("#expanosai").val())+
        "\r\nFunção: "+($("#expfuncao").val() == ""?"Não Informado":$("#expfuncao").val())+
        "\r\nDetalhes: "+($("#expdetalhe").val() == ""?"Não Informado":$("#expdetalhe").val())+

        "\r\n"+($("#expempresa2").val() == ""?"":"\r\n"+getExperiencia(2))+ 
        "\r\n"+($("#expempresa3").val() == ""?"":"\r\n"+getExperiencia(3))+ 

        "\r\n"+
        "\r\n=========================================="+
        "\r\nQualificações Profissionais"+
        "\r\n=========================================="+
        "\r\n"+
        "\r\n"+($("#qualificacao").val() == ""?"Não Informado":$("#qualificacao").val())+
        ($("#qualificacao2").val() == ""?"":"\r\n"+$("#qualificacao2").val())+
        ($("#qualificacao3").val() == ""?"":"\r\n"+$("#qualificacao3").val())+
        ($("#qualificacao4").val() == ""?"":"\r\n"+$("#qualificacao4").val())+
        ($("#qualificacao5").val() == ""?"":"\r\n"+$("#qualificacao5").val());

    return txtData;
}

function getCurso(index){
    var curso =  
        "\r\nCurso ( "+index+" ): "+($("#curso"+index).val() == ""?"Não Informado":$("#curso"+index).val())+
        "\r\nInstituição ( "+index+" ): "+($("#inst"+index).val() == ""?"Não Informado":$("#inst"+index).val())+
        "\r\nSituação ( "+index+" ): "+($("#anocurso"+index).val() == ""?"Não Informado":$("#anocurso"+index).val())+
        ($("#anofim"+index).val() == ""?"Não Informado":$("#anofim"+index).val());
    return curso;
}

function getExperiencia(index){
    var exeriencia =  
        "\r\nEmpresa ( "+index+" ): "+($("#expempresa"+index).val() == ""?"Não Informado":$("#expempresa"+index).val())+
        "\r\nAno de Entrada ( "+index+" ): "+($("#expanoent"+index).val() == ""?"Não Informado":$("#expanoent"+index).val())+
        "\r\nAno de Saída ( "+index+" ): "+($("#expanosai"+index).val() == ""?"Não Informado":$("#expanosai"+index).val())+
        "\r\nFunção ( "+index+" ): "+($("#expfuncao"+index).val() == ""?"Não Informado":$("#expfuncao"+index).val())+
        "\r\nDetalhes ( "+index+" ): "+($("#expdetalhe"+index).val() == ""?"Não Informado":$("#expdetalhe"+index).val());
    return exeriencia;
}


function save_to_txt(){
    var blob = new Blob([getDados()], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "[ Currículo ] "+$("#firstName").val()+ " "+$("#lastName").val()+".txt");
}

function save_to_PDF(){

  	var doc = new jsPDF();
	doc.text(getDados(), 10, 10)
	doc.save('[ Currículo ] '+$("#firstName").val()+ " "+$("#lastName").val()+'.pdf');

}