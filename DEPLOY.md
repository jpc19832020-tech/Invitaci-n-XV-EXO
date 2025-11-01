# 🚀 Despliegue en GitHub Pages - Instrucciones Rápidas

## ✅ Estado Actual
Tu proyecto está **LISTO** para desplegar en GitHub Pages. La construcción estática funcionó correctamente.

## 📋 Pasos para Desplegar

### 1. Subir a GitHub
```bash
# Inicializar repositorio (si no lo has hecho)
git init
git add .
git commit -m "Proyecto listo para GitHub Pages"

# Conectar con tu repositorio
git remote add origin https://github.com/TU-USUARIO/15-AÑOS.git
git push -u origin main
```

### 2. Configurar Secrets en GitHub
Ve a tu repositorio → Settings → Secrets and variables → Actions repository secrets

Agrega este secret (opcional):
- `NEXT_PUBLIC_APP_URL`: URL de tu aplicación (ej: https://tu-usuario.github.io/15-AÑOS)

### 3. Configurar Personal Access Token
El workflow requiere un token con permisos especiales:
1. Ve a Settings → Developer settings → Personal access tokens → Generate new token
2. Selecciona permisos: "repo" (incluye write permissions) y "workflow"
3. Genera el token y cópialo
4. Ve a tu repositorio → Settings → Secrets and variables → Actions repository secrets
5. Agrega un secret llamado `GITHUB_TOKEN` con el valor del token generado

### 3. Activar GitHub Pages
1. Ve a Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "main"
4. Folder: "/root"
5. Activa "GitHub Actions"

### 4. ¡Listo!
Cada vez que hagas push a la rama `main`, tu sitio se actualizará automáticamente.

## 🌐 URL del Sitio
Una vez desplegado, tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/15-AÑOS
```

## 🔧 ¿Qué funciona y qué no?

### ✅ Funciona en GitHub Pages:
- ✅ Página principal con todas las animaciones
- ✅ Galería de fotos
- ✅ Cuenta regresiva
- ✅ Formulario de RSVP (guarda localmente)
- ✅ Panel de administración (/admin) - funciona con localStorage
- ✅ Sección de regalos con Yape QR
- ✅ Diseño responsivo

### ❌ No funciona en GitHub Pages:
- ❌ API routes - no hay servidor en GitHub Pages (no son necesarias)

## 🎯 Panel de Administración

El panel de administración (/admin) funciona completamente con localStorage:
1. Todas las confirmaciones se guardan localmente en el navegador
2. Los datos persisten mientras no se limpie el cache del navegador
3. Puedes ver todas las confirmaciones realizadas
4. Funciona perfectamente en GitHub Pages sin necesidad de backend

## 📱 Para los Invitados

Los invitados pueden:
1. Llenar el formulario de confirmación
2. Ver el mensaje de agradecimiento
3. Su respuesta se guarda localmente en el navegador
4. Ver el panel de administración (/admin) para gestionar confirmaciones
5. Enviar regalos por Yape (solo muestra QR)

## 🎉 ¡Felicidades!

Tu proyecto de XV años está completamente listo para compartir con el mundo. 🌟

---

**Nota:** El archivo `out/` contiene tu sitio estático listo para subir.