#Replace URL with the Invoke URL above
export INVOKE_URL="APIGATEWAY_ENDPOINT"

# Casos de prueba

# Envia tres solicitudes HTTP con el método “PUT” a la URL especificada por la variable $INVOKE_URL. Cada solicitud tiene como objetivo actualizar un recurso en el servidor que aloja la API, específicamente en la ruta /items.
curl -X "PUT" -H "Content-Type: application/json" -d "{
    \"id\": \"d1ef234\",
    \"price\": 18345,
    \"name\": \"myitem1\"
} " $INVOKE_URL/items

curl -X "PUT" -H "Content-Type: application/json" -d "{
    \"id\": \"d5ef436\",
    \"price\": 43543,
    \"name\": \"myitem2\"
} " $INVOKE_URL/items

curl -X "PUT" -H "Content-Type: application/json" -d "{
    \"id\": \"d2ef980\",
    \"price\": 34567,
    \"name\": \"myitem3\"
} " $INVOKE_URL/items

# Realiza una solicitud GET a la API, solicitando los datos y luego formateando esa salida para que sea más legible.
curl -s $INVOKE_URL/items | js-beautify 

# Realiza una solicitud GET para obtener los detalles del ítem con el ID 'd5ef436' de la API.
curl -s $INVOKE_URL/items/d5ef436 | js-beautify

# Envía una solicitud DELETE a la API para eliminar el ítem con el ID 'd2ef980' de la base de datos
curl -X "DELETE" $INVOKE_URL/items/d2ef980

# Realiza una solicitud GET a la API, solicitando los datos nuevamente para verificar el comportamiento de las peticiones HTTP.
curl -s $INVOKE_URL/items | js-beautify 

