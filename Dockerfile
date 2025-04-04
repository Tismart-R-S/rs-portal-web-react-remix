# Etapa 1: Construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos esenciales antes para aprovechar caché
COPY package.json ./

# Instalar solo dependencias necesarias para construir
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación Remix
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

WORKDIR /app

# Copiar archivos esenciales desde la etapa de construcción
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Instalar solo dependencias de producción
RUN npm install --omit=dev

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando de inicio usando dotenv-cli
CMD ["npm","start"]