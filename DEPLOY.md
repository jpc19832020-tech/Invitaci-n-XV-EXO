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

Agrega estos secrets:
- `NEXT_PUBLIC_SUPABASE_URL`: `https://sqoxgyluyakgacfvptux.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxb3hneWx1eWFrZ2FjZnZwdHV4Iiwicm9sZSI6ImFub24iLCJleHAiOjE3NzE0OTQwNTQsImV4cCI6MjA3NzA3MDA1NH0.hVVEABtWOfCNDFT8BN21qxs8CVTRfmbV6MpqaKVlHGs`

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
- ✅ Sección de regalos con Yape QR
- ✅ Diseño responsivo

### ❌ No funciona en GitHub Pages:
- ❌ Panel de administración (/admin) - necesita servidor
- ❌ API routes - no hay servidor en GitHub Pages
- ❌ Guardado real en Supabase - solo fallback local

## 🎯 Alternativa para Panel de Administración

Si necesitas ver las confirmaciones, puedes:
1. Usar el panel de Supabase directamente
2. Configurar un backend separado (Vercel, Netlify, etc.)
3. Usar el localStorage del navegador (los datos se guardan localmente)

## 📱 Para los Invitados

Los invitados pueden:
1. Llenar el formulario de confirmación
2. Ver el mensaje de agradecimiento
3. Su respuesta se guarda localmente como respaldo
4. Enviar regalos por Yape (solo muestra QR)

## 🎉 ¡Felicidades!

Tu proyecto de XV años está completamente listo para compartir con el mundo. 🌟

---

**Nota:** El archivo `out/` contiene tu sitio estático listo para subir.