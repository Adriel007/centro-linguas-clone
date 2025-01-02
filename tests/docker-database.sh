#!/bin/bash

# PARA QUEM USA WINDOWS E QUER UTILIZAR DOCKER PARA TESTES JUNTAMENTE COM ESSE SCRIPT
# QUE AUTOMATIZA TODO O PROCESSO. RECOMENDO UTILIZAR UMA MAQUINA VIRTUAL COMO UBUNTU
# COM REDE EM MODO BRIDGE. FEITO ISSO, VOCÊ PODE RODAR O CONTAINER DOCKER COM O SCRIPT.

# NÃO SE ESQUEÇA DE CRIAR E CONFIGURAR O .env NA RAIZ DO PROJETO. POR EXEMPLO, O MEU ESTÁ ASSIM:
# HOST=localhost
# PORT=3333
# DB_PORT=5432
# DB_USER=postgres
# DB_PASSWORD=admin
# DB=dbcentrolinguas

# Verificar se o script está rodando como root ou sudo
if [ "$EUID" -ne 0 ]; then
    echo "Este script precisa ser executado como root ou com sudo."
    exit 1
fi

# Parar o container se ele estiver em execução
if docker ps -q -f name=postgres-container &> /dev/null; then
    docker stop postgres-container
fi

# Verificar se há algum processo usando a porta 5432
if lsof -i :5432 &> /dev/null; then
    echo "Porta 5432 está em uso. Encerre todos os processos que usam essa porta com 'lsof -i :5432' e mate seu PID com 'kill <PID>'."
    exit 1
fi

# Fixar um path para a raiz do projeto
PROJECT_ROOT=$(realpath "$(dirname "$0")/..")

# Carregar variáveis do .env
if [ -f "$PROJECT_ROOT/.env" ]; then
    export $(grep -v '^#' "$PROJECT_ROOT/.env" | xargs)
else
    echo "Arquivo .env não encontrado em $PROJECT_ROOT/.env"
    exit 1
fi

# Verificar se as variáveis DB e DB_PASSWORD estão definidas
if [ -z "$DB" ] || [ -z "$DB_PASSWORD" ]; then
    echo "As variáveis DB e DB_PASSWORD precisam estar definidas no arquivo .env."
    exit 1
fi

# Instalar Docker, se necessário
if ! command -v docker &> /dev/null; then
    apt update
    apt install docker-compose docker.io -y
fi

# Subir container do PostgreSQL
docker run --rm --name postgres-container \
    -e POSTGRES_PASSWORD="$DB_PASSWORD" \
    -e POSTGRES_HOST_AUTH_METHOD=scram-sha-256 \
    -e POSTGRES_INITDB_ARGS=--auth-host=scram-sha-256 \
    -p 5432:5432 \
    -d postgres

# Aguardar o PostgreSQL iniciar
sleep 5

# Verificar se o banco de dados já existe
DB_EXISTS=$(docker exec postgres-container psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$DB';")

if [ -z "$DB_EXISTS" ]; then
    echo "Banco de dados '$DB' não encontrado. Criando banco..."
    docker exec postgres-container psql -U postgres -c "CREATE DATABASE \"$DB\";"
    echo "Banco de dados '$DB' criado com sucesso."

    echo "Importando dump..."
    DUMP_FILE="$PROJECT_ROOT/Banco de dados/centro_dump.sql"
    if [ -f "$DUMP_FILE" ]; then
        docker exec -i postgres-container psql -U postgres -d "$DB" < "$DUMP_FILE"
        echo "Dump importado com sucesso para o banco '$DB'."
    else
        echo "Arquivo de dump não encontrado: $DUMP_FILE"
        exit 1
    fi
else
    echo "Banco de dados '$DB' já existe."
fi


# Conectar no PostgreSQL
docker exec -it postgres-container psql -U postgres
