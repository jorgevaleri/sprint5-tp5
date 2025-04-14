📌 Gestor de Libros
    Es una aplicación que permite gestionar una biblioteca digital. La aplicación implementa un CRUD completo (crear, leer, actualizar y eliminar) sobre una colección de libros.

🎯 Objetivo
    El objetivo de este proyecto es desarrollar una aplicación completa en React que demuestre la integración de técnicas modernas de desarrollo web, mostrando los conocimientos adquiridos sobre:
        💡 Creación de interfaces modernas y responsivas.
        🔧 Uso de rutas estáticas y dinámicas y navegación programática.
        🧩 Gestión global de estado** a través de Context API.
        📡 Realización de peticiones HTTP** para obtener y modificar datos.
        ✔️ Validación de formularios controlados.
        🚀 Implementación de feedback visual**, mediante notificaciones y confirmaciones.
        📂 Organización de carpetas y código modular.

🚀 Funcionalidades
    📌 Rutas Principales:
        ✔ /: Página principal o de bienvenida, con una imagen de fondo a pantalla completa y un mensaje llamativo.
        ✔ /items: Listado general de libros (GET).
        ✔ /items/:id: Detalle de un libro (GET).
        ✔ /items/create: Formulario para crear un libro (POST).
        ✔ /items/:id/edit: Formulario para editar un libro (PUT).
        ✔ / (o rutas no definidas): Página 404 o redirección.
    🛠 Operaciones CRUD:
        ➕ Crear libro: Formulario controlado con validación.
        ✏️ Editar libro: Precarga de datos en el formulario para editar.
        🗑 Eliminar libro: Confirmación visual usando SweetAlert2.
        ✔ 🔍 Ver detalles: Página de detalle que muestra la información completa del libro.
        📋 Listado de libros: Se muestra la lista de libros obtenida desde la API.
    ✅ Feedback Visual:
        💬 Notificaciones: Uso de react-toastify para mostrar mensajes de éxito o error.
        ✨ Animaciones y transiciones: Efectos en botones y navegación para una experiencia de usuario fluida.
        📱 Diseño responsivo: Interfaz adaptable a múltiples dispositivos.
        📌 Header y Footer: Un header con logo y navegación, y un footer que se mantiene siempre al final de la página.

🌐 API Utilizada
La aplicación consume una API REST creada en **MockAPI** para gestionar los libros.
🔗 https://67f7c4642466325443ea9f58.mockapi.io/books

🛠️ Tecnologías Utilizadas
    ⚡ React + Vite: Estructura optimizada y rápida.
    🎨 TailwindCSS: Diseño responsive y moderno.
    🔀 React Router DOM: Manejo de rutas y navegación.
    🧠 Context API: Gestión del estado global.
    🔥 Axios: Manejo eficiente de peticiones HTTP.
    📢 React-Toastify: Notificaciones amigables.
    ❗ SweetAlert2: Confirmaciones visuales para operaciones críticas.
    🖼 Lucide Icons: Iconografía moderna en el header y navegación.
    ☁️ Netlify: Despliegue en la web (opcional).

📂 Estructura del Proyecto
  📦 public
  ┣ 📂 assets
  ┃ ┣ 📜 book.png
  ┃ ┣ 📜 fondo.png
  ┃ ┣ 📜 logo.png
  📦 src
  ┣ 📂 components
  ┃ ┣ 📜 Footer.jsx
  ┃ ┣ 📜 Header.jsx
  ┃ ┣ 📜 FavoriteButton.jsx
  ┃ ┣ 📜 ItemCard.jsx
  ┣ 📂 context
  ┃ ┣ 📜 ItemContext.jsx
  ┣ 📂 pages
  ┃ ┣ 📜 AboutUs.jsx
  ┃ ┣ 📜 ItemCreate.jsx
  ┃ ┣ 📜 ItemDetail.jsx
  ┃ ┣ 📜 ItemEdit.jsx
  ┃ ┣ 📜 ItemList.jsx
  ┃ ┣ 📜 NotFound.jsx
  ┃ ┣ 📜 Welcome.jsx
  ┣ 📂 Router
  ┃ ┣ 📜 AppRouter.jsx
  ┣ 📜 App.jsx
  ┣ 📜 main.jsx
  ┗ 📜 index.css

📌 Instalación y Uso
  1️⃣ Clona el repositorio:
    git clone https://github.com/jorgevaleri/sprint5-tp5
  2️⃣ Instala las dependencias:
    npm install
  4️⃣ Inicia la aplicación:
    npm run dev
  5️⃣ Abre en el navegador:
    🔗 http://localhost:5173

🖥️ Despliegue en Producción
  La aplicación está disponible en:
    🔗 https://profound-douhua-804f11.netlify.app/items

⚡ Decisión: Fetch vs Axios
  Se utilizó Axios en lugar de fetch debido a:
    ✔ Manejo más sencillo de respuestas y errores.
    ✔ Sintaxis más limpia y concisa.
    ✔ Permite configuración global de headers.

✅ Criterios de Evaluación Cumplidos
  ✔ CRUD funcional completo con API
  ✔ Navegación fluida entre vistas.
  ✔ Formularios controlados y validados.
  ✔ Estado global con Context.
  ✔ Confirmaciones + Toasts.
  ✔ Estilo responsive y limpio.
  ✔ Código ordenado y reutilizable.