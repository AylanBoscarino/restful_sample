$(function(){
	
	var $alunos = $("#alunos");
	var $name = $("#name");
	var $email = $("#email");
	var $curso = $("#curso");

	var alunoTemplate ="" +
		 "<li class='list-group-item'>"+
					"<div class='row'>"+
						"<div class='col'>"+
							"{{name}}"+
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
	
	$(document).on('click', '.removedor', function(){
		
		$(this).parents(".list-group-item").remove();
	});
	$(document).on('click', '.editor', function(){
		$('#editModal').modal('toggle');
		//$('#editName').val("")
	});
	
	$("#adiciona").on('click', function(){
		event.preventDefault();
		if ($name.valid() && $email.valid() && $curso.valid()){

		var aluno = {name:$name.val(), email:$email.val() ,curso:$curso.val()};
		
		addAluno(aluno);
		}
	});

});