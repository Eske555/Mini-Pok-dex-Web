# 📄 PARTE 1 — Consumo de API (PokéAPI)

## 🔍 ¿Cómo deduje la estructura de las URLs?

A partir de la documentación oficial de la API, observé que todas las rutas parten de:


Luego, según el recurso que se quiera obtener, se agrega:

- `pokemon/` → para obtener información de un Pokémon  
- `type/` → para obtener información de un tipo  

Finalmente, se puede completar con:

- el **nombre del recurso** (ej: pikachu)  
- o el **ID** (ej: 25)  

**Ejemplo:**

---

## 📦 ¿Qué devuelve cada endpoint?

### 🔹 1. Obtener Pokémon por nombre

- **URL:** https://pokeapi.co/api/v2/pokemon/pikachu  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve un objeto JSON con toda la información del Pokémon.

**Propiedades relevantes:**

- `name` → nombre  
- `sprites.front_default` → imagen  
- `types` → tipos  
- `weight` → peso  
- `height` → altura  

---

### 🔹 2. Obtener Pokémon por ID

- **URL:** https://pokeapi.co/api/v2/pokemon/25  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve la información del Pokémon correspondiente al ID (en este caso, Pikachu).

---

### 🔹 3. Lista limitada de Pokémon

- **URL:** https://pokeapi.co/api/v2/pokemon?limit=10  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve una lista de Pokémon.

**Propiedades relevantes:**

- `results[].name` → nombre del Pokémon  
- `results[].url` → enlace al detalle  

---

### 🔹 4. Información de un tipo

- **URL:** https://pokeapi.co/api/v2/type/electric  
- **Método:** GET  
- **Status:** 200 OK  

**Descripción:**  
Devuelve información sobre un tipo y los Pokémon que pertenecen a ese tipo.

**Propiedades relevantes:**

- `pokemon[]` → lista de Pokémon de ese tipo  
- `pokemon[].pokemon.name` → nombre  

---

## ❌ ¿Qué ocurre ante un error?

Cuando se solicita un recurso que no existe, la API devuelve:

- **Status:** 404 Not Found  

**Ejemplo:**

**Comportamiento:**

- No se devuelve información útil  
- La aplicación debe capturar el error  
- Se recomienda mostrar un mensaje como:  
  **"Pokémon no encontrado"**