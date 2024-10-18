## ERPzinho

# Modelagem de dados

```ts
./prisma/schema.prisma
```

# Steps

```sh
npx nest new api

npm install nestjs-prisma

npm i -D prisma
npm install @prisma/client

./node_modules/.bin/prisma init

docker compose -f "docker-compose.yaml" up -d --build

./node_modules/.bin/prisma generate

./node_modules/.bin/prisma migrate dev

docker exec -it erp-db bash
psql -U postgres -d postgres -f /docker-entrypoint-initdb.d/seu-script.sh
```