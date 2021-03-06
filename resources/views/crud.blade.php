<!DOCTYPE html>
<html lang="pt-br">
<head>
	<!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">-->
	<link rel="stylesheet" href="{{asset('css/app.css')}}">
	<meta name="csrf-token" content="{{ csrf_token() }}" />
	<meta charset="utf-8">
	<title> Cadastro de Alunos</title>
</head>
<body>
	
	<script type="text/javascript" src="{{asset('js/Mustache.js')}}"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
	<script src="{{asset('js/main.js')}}"></script>
	<script src="{{asset('js/jquery.validate.js')}}"></script>
	<div class="jumbotron container">
		<div class="container">
			
		</div>
		<h1>Alunos</h1>
		<div>

			<ul class="list-group" id="alunos" >
				<li class="list-group-item list-group-item-info"> 
					<div class="row">
						<div class="col">
							Nome
						</div>
						<div class="col">
							E-mal
						</div>
						<div class="col">
							Curso
						</div>
						<div class="col">
							
						</div>
					</div>
					@foreach($alunos as $aluno)
						@component('components.list_item', ['aluno' => $aluno])

						@endcomponent

					@endforeach
				</li>
				
				
			</ul>
		</div>
		<br>
		<form>
			
		<div class="input-group input-group-sm mb-3">
			<div class="input-goup-prepend">
				<span class="input-group-text"  >Nome</span>
			</div>
			<input type="text" class="form-control" required aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="nome">
		</div>
		<div class="input-group input-group-sm mb-3">
			<div class="input-goup-prepend">
				<span class="input-group-text"  >E-mail</span>
			</div>
			<input type="text" class="form-control" required aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="email">
		</div>
		<div class="input-group input-group-sm mb-3">
			<div class="input-goup-prepend">
				<span class="input-group-text"  >Curso</span>
			</div>
			<input type="text" class="form-control" required aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="curso">
		</div>
		<button  class="btn btn-group btn-primary" id="adiciona">Adicionar</button>
		
		
		</form>
	</div>


	<!-- Modal! -->
	<div class="modal fade" id="editModal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1>Tela de edição</h1>
				</div>
				 <div class="modal-body">
					
					<form>
						<div class="jumbotron">
								
								
						<div class="input-group input-group-sm mb-3">
						<div class="input-goup-prepend">
						<span class="input-group-text"  >Nome</span>
						</div>
						<input type="text" class="form-control" required aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="editName">
						</div>
						<div class="input-group input-group-sm mb-3">
						<div class="input-goup-prepend">
							<span class="input-group-text"  >E-mail</span>
						</div>
						<input type="text" class="form-control" required aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="editEmail">
						</div>
						<div class="input-group input-group-sm mb-3">
						<div class="input-goup-prepend">
							<span class="input-group-text"  >Curso</span>
						</div>
						<input type="text" class="form-control" required aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="editCurso">
						</div>
						<a href="" class="btn btn-primary " id="editSalvar">Salvar</a>
						</div>
					</form>

				 	
				 </div>
			</div>

		</div>
		
	</div>
	
	
</body>
</html>