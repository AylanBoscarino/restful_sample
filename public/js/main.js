$(function(){
	var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
	var $alunos = $("#alunos");
	var $nome = $("#nome");
	var $email = $("#email");
	var $curso = $("#curso");

	var alunoTemplate ="" +
		 "<li class='list-group-item' data-id='{{id}}'>"+
					"<div class='row'>"+
						"<div class='col'>"+
							"{{nome}}"+
						"</div>"+
						"<div class='col'>"+
							"{{email}}"+
						"</div>"+
						"<div class='col'>"+
							"{{curso}}"+
						"</div>"+
						"<div class='col'>"+
							"<button type='button' class='btn btn-warning editor' title='editar'l'>E</button>"+
							"<button class='btn btn-danger removedor' title='deletar'>X</button>"+
						"</div>"+
					"</div>"+
				"</li>";
	
	function addAluno(aluno){
		
		$alunos.append( jQuery(Mustache.render(alunoTemplate, aluno)));

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