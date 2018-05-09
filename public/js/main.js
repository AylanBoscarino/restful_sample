$(function(){
	var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
	var $alunos = $("#alunos");
	var $nome = $("#nome");
	var $email = $("#email");
	var $curso = $("#curso");

	
	
	function addAluno(aluno){
		//var alunoTemplate = View::make(aluno, )
		//$alunos.append( jQuery(Mustache.render(alunoTemplate, aluno)));
		//View::make('components.list_item', aluno)->render()
		
		$alunos.append(aluno);
	}

	function removeAluno(id, lista){
		$.ajax({
			headers: {
				'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
			},
			type:'DELETE',	
			url:'/alunos/'+id,
			dataType:'JSON',
			success:function(retorno){
				$lista.remove();
			}
		});
	}
	
	$(document).on('click', '.removedor', function(){
		
		$lista = $(this).parents(".list-group-item");
		removeAluno($lista.attr('data-id'), $lista);
	});
	$(document).on('click', '.editor', function(){
		$('#editModal').modal('toggle');
		//$('#editnome').val("")
	});
	
	$("#adiciona").on('click', function(){
		event.preventDefault();
		if ($nome.valid() && $email.valid() && $curso.valid()){

		var aluno = {nome:$nome.val(), email:$email.val() ,curso:$curso.val()};
		
		

		$.ajax({
			headers: {
			        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			    },
			type:'POST',
			url: "/alunos",
			data: aluno,// {_token: CSRF_TOKEN, message: aluno},
			dataType: 'JSON',
			success: function(newAluno){
				addAluno(newAluno);
			}
		});
		}
	});

});