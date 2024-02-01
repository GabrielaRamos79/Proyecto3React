import axios from  'axios';

//importamos axios y creamos una instancia de axios. Digamos que todas las solicitudes van a tener esta misma base 
// en la que definimos la base común del endpoint, que es la url que luego completamos en cada método, y definimos también el 
//encabezado con el tipo de datos correcto para que la solicitud se admita.
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

//construimos un objeto con los distintos métodos para hacer CRUD. Como lo exportamos, lo importamos en el componente y allí
//estará accesible con todos los métodos que contenga
export const UserService = {

    //este es el método GET que trae los datos almacenados
    async getAllUsers () {
        
        //guardamos en una variable toda la respuesta que nos devuelve la API, que contiene más información además de los
        //datos almacenados
         let response = await apiClient.get("/users");

         //de esa respuesta, accedo a "data", que es la parte de la respuesta en la están los datos almacenados en la base de datos
         let allUsers = response.data

         //retornamos esta variable que contiene "data". Al ejecutar esta función obtenemos esta "data"
         return allUsers

    },

    async submitUser(newUser){
        //en el archivo json, aunque no pongamos un campo "id", para cada registro que añadamos se le asignará un id nuevo.
        //en este caso será in id tipo string porque así lo hace json server.
        //Sería más cómodo que fuera un campo numérico autoincrementable, que tras un registro con "id: 1" añadiera un "id: 2" al 
        //suiguitente, pero este id como un string es igualmente válido
        await apiClient.post("/users", newUser)
        // una vez enviada la petición, llamamos a la función getAllUsers() para actual
        
    },

    async deleteUser(id) {
        await apiClient.delete(`/users/${id}`);
    }
    

    /*async submitUser() {

        //completar :)
        await console.log("Hola")
    }*/
}