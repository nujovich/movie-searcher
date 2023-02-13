# Enunciado
Crea una aplicación para buscar películas

API a usar:

https://www.omdbapi.com/
API_KEY: 4287ad07

## Example 
https://www.omdbapi.com/?apikey=4287ad07&s=Avengers

# Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar. 
✅ Lista las películas y muestra el título, año y poster. 
✅ Que el formulario funcione 
✅ Haz que las películas se muestren en un grid responsive. 
✅ Hacer el fetching de datos a la API

## Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.
✅ Haz que la búsqueda se haga automáticamente al escribir.
✅ Evita que se haga la búsqueda continuamente al escribir (debounce)


## Conceptos vistos
- Tipos de formas de obtener el input de un control en un formulario
    - Forma controlada: useState()
    - Forma no controlada: useRef() o new FormData(e.target)
- Validaciones del formulario dentro del useEffect() o del handleChange del input
- Creación de custom hooks para extraer la lógica de los componentes
- Uso del useMemo(): memorizar computaciones, dependiendo de las dependencias
- Uso del useCallback(): wrapper de funciones para evitar renderizados innecesarios
- Uso de la dependencia just-debounce-it: para evitar que la búsqueda se haga continuamente al escribir
