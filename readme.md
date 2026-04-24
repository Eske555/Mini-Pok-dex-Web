🔍 Endpoints investigados
🔹 1. Obtener Pokémon por nombre
URL:
https://pokeapi.co/api/v2/pokemon/pikachu
Método: GET
Status: 200 OK
Descripción:
Devuelve un objeto JSON con toda la información del Pokémon.
Propiedades relevantes:
name
sprites.front_default
types
weight
height
🔹 2. Obtener Pokémon por ID
URL:
https://pokeapi.co/api/v2/pokemon/25
Método: GET
Status: 200 OK
Descripción:
Devuelve la información del Pokémon correspondiente al ID (25 = Pikachu).
🔹 3. Lista limitada de Pokémon
URL:
https://pokeapi.co/api/v2/pokemon?limit=10
Método: GET
Status: 200 OK
Descripción:
Devuelve una lista de Pokémon.
Propiedades relevantes:
results[].name
results[].url
🔹 4. Información de un tipo
URL:
https://pokeapi.co/api/v2/type/electric
Método: GET
Status: 200 OK
Descripción:
Devuelve información sobre el tipo y los Pokémon que pertenecen a ese tipo.
🔹 5. Error intencional
URL:
https://pokeapi.co/api/v2/pokemon/aaaaaa
Método: GET
Status: 404 Not Found
Descripción:
La API devuelve un error cuando el recurso no existe.