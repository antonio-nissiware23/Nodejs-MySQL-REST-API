import {createPool} from 'mysql2/promise'

//createConnection -> Mantiene un solo hilo de conexion
//createPool -> Conjunto de conexiones que se puede usar en produccion 

export const pool = createPool({
    host: 'localhost',
    user:'root',
    password: 'Antonio13',
    port: 3306,
    database: 'companydb'
})
