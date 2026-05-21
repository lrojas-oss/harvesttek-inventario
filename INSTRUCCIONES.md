# Harvest Tek — Sistema de Inventario v2
## Guía de configuración (10 minutos)

---

## Paso 1: Crear base de datos Firebase (GRATIS)

1. Ve a https://console.firebase.google.com
2. Haz clic en **"Agregar proyecto"**
3. Nombre del proyecto: `harvesttek-inventario`
4. Desactiva Google Analytics (no es necesario) → **Crear proyecto**
5. En el menú izquierdo: **Compilación → Realtime Database**
6. Clic en **"Crear una base de datos"**
7. Selecciona región: **us-central1** → Siguiente
8. Selecciona **"Iniciar en modo de prueba"** → Habilitar

---

## Paso 2: Obtener la configuración

1. En el menú izquierdo: clic en el ícono de engranaje ⚙️ → **Configuración del proyecto**
2. Baja a la sección **"Tus apps"** → clic en **"</> Web"**
3. Nombre de la app: `harvesttek-web` → **Registrar app**
4. Copia el objeto `firebaseConfig` que aparece, se ve así:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "harvesttek-inventario.firebaseapp.com",
  databaseURL: "https://harvesttek-inventario-default-rtdb.firebaseio.com",
  projectId: "harvesttek-inventario",
  storageBucket: "harvesttek-inventario.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

## Paso 3: Pegar la configuración en los archivos

Abre `almacen.html` y `admin.html` con cualquier editor de texto (Notepad, TextEdit, VS Code).

Busca este bloque en cada archivo:
```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  ...
};
```

Reemplázalo con tu configuración copiada en el Paso 2.
**Debes hacer esto en AMBOS archivos.**

---

## Paso 4: Subir a Netlify (hosting gratuito)

1. Ve a https://app.netlify.com/drop
2. Arrastra toda la carpeta `harvesttek-v2` al área indicada
3. En segundos obtienes un link como: `https://amazing-name-123.netlify.app`

---

## Paso 5: Distribuir

### Almacenista (celular/tablet):
- Envía el link por WhatsApp
- El almacenista abre el link en Chrome (Android) o Safari (iPhone)
- Toca **"Agregar a pantalla de inicio"**
- La app queda instalada con ícono propio

### Administrador (PC):
- Abre `https://tu-sitio.netlify.app/admin.html` en cualquier navegador
- Marca como favorito para acceso rápido

---

## Archivos incluidos

| Archivo | Descripción |
|---|---|
| `almacen.html` | App PWA para el almacenista (móvil) |
| `admin.html` | Dashboard administrador (PC/navegador) |
| `sw.js` | Service Worker (funciona sin internet) |
| `manifest-almacen.json` | Configuración PWA |
| `icon-192.svg` | Ícono de la app |
| `icon-512.svg` | Ícono de la app (grande) |

---

## Funciones incluidas

### App Almacenista (almacen.html)
- ✅ Inventario completo con 47 materiales reales
- ✅ Entradas y salidas de stock con notas
- ✅ **Configurar stock mínimo por material** (botón ⚙ Mínimo en cada card)
- ✅ **Alertas automáticas** cuando el stock baja del mínimo
- ✅ Indicador de conexión en tiempo real
- ✅ Funciona offline (caché local)
- ✅ Historial de movimientos

### Dashboard Administrador (admin.html)
- ✅ Vista en tiempo real desde cualquier navegador PC
- ✅ Estadísticas generales del inventario
- ✅ Tabla completa con barra de cobertura visual por material
- ✅ Panel de alertas con prioridad (Urgente / Alta / Media)
- ✅ Historial completo de movimientos
- ✅ **Exportar Excel** — Inventario completo + Alertas (2 hojas)
- ✅ **Exportar alertas** — Solo materiales con alerta
- ✅ **Exportar historial** — Todos los movimientos

---

## Soporte
Sistema desarrollado para Harvest Tek México.
