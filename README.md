# Invitación XV Años - Sofía Isabel

Una invitación digital interactiva para la fiesta de XV años de Sofía Isabel.

## 🎉 Características

- **Diseño cinematográfico** con animaciones impresionantes
- **Cuenta regresiva** para el evento
- **Galería de fotos** interactiva
- **Formulario de confirmación (RSVP)**
- **Integración con Yape** para regalos
- **Panel de administración** para ver confirmaciones

## 🚀 Tecnologías

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado seguro
- **Tailwind CSS** - Estilos modernos
- **Framer Motion** - Animaciones fluidas
- **LocalStorage** - Almacenamiento local en el navegador
- **Supabase** - Base de datos en la nube (opcional)
- **shadcn/ui** - Componentes UI de alta calidad

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/15-AÑOS.git
cd 15-AÑOS

# Instalar dependencias
npm install

# El proyecto no requiere configuración adicional
# Funciona directamente con localStorage

# Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración

El proyecto funciona con localStorage por defecto:
- Usa localStorage del navegador para guardar las confirmaciones
- No se necesita base de datos externa para funcionamiento básico
- Funciona completamente en GitHub Pages sin configuración adicional

## 🔧 Configuración Opcional con Supabase

Si deseas usar Supabase como respaldo:

1. Crear un proyecto en [Supabase](https://supabase.com)
2. Crear una tabla llamada `rsvp` con las siguientes columnas:
   - `id` (text, primary key)
   - `name` (text)
   - `guests` (integer)
   - `message` (text, optional)
   - `confirmed` (boolean)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)
3. Copiar las credenciales al archivo `.env`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu-url-de-supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-anonima
   ```

## 🌐 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. **Hacer fork** del repositorio
2. **Configurar Secrets** en GitHub:
   - `NEXT_PUBLIC_SUPABASE_URL` (si usas Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (si usas Supabase)
   - `GITHUB_TOKEN` (con permisos "id-token: write")
3. **Activar GitHub Pages** en la configuración del repositorio
4. **Hacer push** a la rama `main`

El despliegue se realizará automáticamente mediante GitHub Actions.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Página principal
│   ├── admin/page.tsx    # Panel de administración
│   └── api/
│       └── rsvp/
│           └── route.ts  # API para confirmaciones
├── components/
│   ├── ui/               # Componentes UI de shadcn
│   └── rsvp-form.tsx     # Formulario de RSVP
└── lib/
    ├── supabase.ts        # Cliente de Supabase (opcional)
    ├── rsvp/index.ts      # Funciones de RSVP
    └── utils.ts           # Utilidades
```

## 🎨 Uso

### Para Invitados:
1. Visitan la URL del sitio
2. Exploran la invitación interactiva
3. Llenan el formulario de confirmación
4. Pueden enviar regalos vía Yape

### Para Administradores:
1. Visitan `/admin` para ver las confirmaciones
2. Ven estadísticas en tiempo real
3. Pueden exportar los datos si es necesario

## 🔒 Variables de Entorno

- `NODE_ENV`: Entorno (development/production)
- `NEXT_PUBLIC_APP_URL`: URL de la aplicación (opcional)
- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto Supabase (opcional)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Clave anónima de Supabase (opcional)

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Revisar código con ESLint
```

## 🤝 Contribuir

1. Hacer fork del proyecto
2. Crear una rama: `git checkout -b feature/nueva-funcionalidad`
3. Hacer commit: `git commit -m 'Agregar nueva funcionalidad'`
4. Hacer push: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🎉 Agradecimientos

- A toda la familia y amigos de Sofía
- A la comunidad de código abierto
- A [Z.ai](https://chat.z.ai) por el andamiaje inicial

---

**Hecho con ❤️ para el XV años de Sofía Isabel**
