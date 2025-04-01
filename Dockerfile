# Etapa 1: Construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json antes para aprovechar caché
COPY package.json ./

# Instalar solo dependencias de producción
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

WORKDIR /app

# Copiar solo archivos esenciales de la etapa de construcción
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# **COPIAR EL ARCHIVO .env y setear variables de entorno**
COPY .env .

# Instalar solo las dependencias de producción
RUN npm install --omit=dev

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"] 