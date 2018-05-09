<li class="list-group-item" data-id="{{$aluno->id}}">
	<div class="row">
		<div class="col">
			{{$aluno->nome}}
		</div>
		<div class="col">
			{{$aluno->email}}
		</div>
		<div class="col">
			{{$aluno->curso}}
		</div>
		<div class="col">
			<button type="button" class="btn btn-warning editor" data-id="{{$aluno->id}}" title="editar"l">E</button>
			<button class="btn btn-danger removedor" data-id="{{$aluno->id}} title="deletar">X</button>
		</div>
	</div>
</li>