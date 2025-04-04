############################### Alunos ###############################
# Create
curl -X POST http://localhost:3333/api/alunos \
-H "Content-Type: application/json" \
-d '{
  "usuario": {
    "nm_usuario": "João Silva",
    "cd_cpf": "12345678901",
    "cd_senha": "joao123",
    "tp_usuario": "true"
  },
  "nm_aluno": "João Silva",
  "cd_cpf": "12345678901",
  "ds_inst": "FATEC"
}'

# GET All
curl -X GET http://localhost:3333/api/alunos

# GET ID
curl -X GET http://localhost:3333/api/alunos/1

# Update ID
curl -X PUT http://localhost:3333/api/alunos/1 \
-H "Content-Type: application/json" \
-d '{
  "usuario": {
    "nm_usuario": "João da Silva",
    "cd_cpf": "98765432100",
    "cd_senha": "novaSenha123",
    "tp_usuario": "false"
  },
  "nm_aluno": "João da Silva",
  "cd_cpf": "98765432100",
  "ds_inst": "USP"
}'

# Delete ID
curl -X DELETE http://localhost:3333/api/alunos/1

############################### Eventos ###############################
# FALTA CRIAR MVC DO MURAL PARA TESTAR
# Create
curl -X POST http://localhost:3333/api/eventos/aluno/eventos \
-F "nm_evento=Feira de Ciências" \
-F "ds_evento=Evento para apresentação de projetos científicos." \
-F "dt_inicio=2024-01-15" \
-F "dt_fim=2024-01-20" \
-F "id_mural=1" \
-F "im_evento=@/media/grinch/Novo volume/centro-linguas-clone/imagem.jpg"

############################### Notas ###############################
# FALTA CRIAR MVC DO AVALIACAO PARA TESTAR

############################### PRESENCA ###############################
# FALTA CRIAR MVC DO MATRICULA PARA TESTAR