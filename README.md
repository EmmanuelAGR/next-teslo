# Next.js Teslo Shop
Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

* El -d, significa __detached__

* MongoDB URL Local:
```
MONGO_URL:mongodb://localhost:27017/teslodb
```

## Configurar las variabless de entorno
Renombrar el archivo __.env.template__ a __.env__


* Reconstruir los modulos de node y levantar Next
```
yarn install -> yarn
yarn dev
```


### Llenar la base de datoss con informacion de pruebas

Llamar:
```
  http://localhost:3000/api/seed
```
