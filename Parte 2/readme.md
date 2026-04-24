# 🧾 Mini Pokédex Web

Aplicación web que consume la API pública de Pokémon para buscar información de Pokémon y tipos.

---

## 🔗 API utilizada

Se utilizó la API pública de Pokémon:  
https://pokeapi.co/

---

## 🔍 Endpoints utilizados

### 🔹 1. Obtener Pokémon por nombre
- **URL:** https://pokeapi.co/api/v2/pokemon/pikachu  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve un objeto JSON con toda la información del Pokémon.

**Propiedades relevantes:**
- `name`
- `sprites.front_default`
- `types`
- `weight`
- `height`

---

### 🔹 2. Obtener Pokémon por ID
- **URL:** https://pokeapi.co/api/v2/pokemon/25  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve la información del Pokémon correspondiente al ID.

---

### 🔹 3. Lista limitada de Pokémon
- **URL:** https://pokeapi.co/api/v2/pokemon?limit=10  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve una lista de Pokémon.

**Propiedades relevantes:**
- `results[].name`
- `results[].url`

---

### 🔹 4. Información de un tipo
- **URL:** https://pokeapi.co/api/v2/type/electric  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve información sobre un tipo y los Pokémon que pertenecen a ese tipo.

---

### 🔹 5. Error intencional
- **URL:** https://pokeapi.co/api/v2/pokemon/aaaaaa  
- **Método:** GET  
- **Status:** 404 Not Found  

**Descripción:**  
La API devuelve un error cuando el recurso no existe.

---

## 🏗️ Estructura del proyecto
/mini-pokedex
│── index.html
│── style.css
│── app.js


- **index.html** → estructura de la página  
- **style.css** → estilos y animaciones  
- **app.js** → lógica de la aplicación y consumo de la API  

---

## ⚙️ Decisiones tomadas

- Se utilizó **JavaScript puro (sin frameworks)** como pide la consigna.
- Se implementó `fetch` con **async/await** para manejar las peticiones.
- Se decidió permitir buscar:
  - Pokémon por nombre
  - Tipos (ej: electric)
- Se agregaron:
  - Manejo de errores (404)
  - Indicador de carga (loading)
  - Interfaz dinámica con manipulación del DOM
- Se mejoró la experiencia visual con:
  - Animaciones
  - Estilos tipo gamer
  - Fondo dinámico según tipo de Pokémon

---

## ⚠️ Dificultades encontradas

- Diferencias en la estructura del JSON entre endpoints:
  - `/pokemon` devuelve datos directos
  - `/type` devuelve datos anidados (`pokemon[]`)
- Manejo de errores al ingresar nombres inexistentes.
- Ajuste del diseño para evitar desbordes en la lista de Pokémon.
- Adaptación del diseño para distintos tipos (ej: colores claros como electric).

---

## 🚀 Funcionalidades

- 🔍 Buscar Pokémon por nombre  
- ⚡ Buscar por tipo y mostrar lista  
- 📊 Visualizar estadísticas del Pokémon  
- ⏳ Indicador de carga  
- ❌ Manejo de errores  
- 🎨 Interfaz dinámica y animada  

---

## 🧠 Conclusión

La API sigue una estructura REST donde los endpoints se construyen a partir de recursos y parámetros.  
Las respuestas se obtienen en formato JSON y permiten construir interfaces dinámicas.  
Además, es importante manejar errores como el 404 para mejorar la experiencia del usuario.