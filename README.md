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
```