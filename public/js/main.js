$(function(){
	var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
	var $alunos = $("#alunos");
	var $nome = $("#nome");
	var $email = $("#email");
	var $curso = $("#curso");

	
	//FUNÇÕES
	function addAluno(aluno){
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
	

	//EVENTOS
	$(document).on('click', '.removedor', function(){		
		$lista = $(this).parents(".list-group-item");
		removeAluno($lista.attr('data-id'), $lista);
	});

	$(document).on('click', '.editor', function(){
		var id = $(this).parents(".list-group-item").attr('data-id');
		$.ajax({
			headers: {
		        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		    },
		    url: "alunos/"+id,
		    dataType:'JSON',
		    success:function(aluno){
			$('#editModal').modal('toggle');
		    $('#editModal').attr('data-id', aluno.id);
		    $('#editName').val(aluno.nome);
		    $('#editEmail').val(aluno.email);
		    $('#editCurso').val(aluno.curso);
		    }
		});
	});	

	$('#editSalvar').on('click', function(){
		var aluno = {
			nome: $("#editName").val(),
			email: $("#editEmail").val(),
			curso: $("#editCurso").val() 
		};
		$.ajax({
			headers: {
		        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		    },
		    type: 'PUT',
		    dataType:'JSON',
		    url: "alunos/"+ $(this).parents("#editModal").attr('data-id'),
		    data:aluno,
		    success:function(aluno){
		    	//alert(aluno);
		    }
		});
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