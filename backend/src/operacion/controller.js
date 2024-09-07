const debug = require('debug')("app: module-controller-operación");
const {Response}=require('../common/response');

module.exports.OperacionController = {
    operar: (req, res) => {
        try {
            const {body: {num1, num2, num3, num4}}=req
            
            const valorMax=Math.max(num1, num2, num3, num4)

            Response.success(res, 200, "Operación exitosa", valorMax);
        } catch (error) {
            // Manejar el error lanzado
            Response.error(res, 400);
        }
    },
    sumar: (req, res)=> {
        try {
            const {body: {num1, num2}}=req

            const resultado = num1+num2

            Response.success(res, 200, "Operación de suma exitosa", resultado);
        } catch (error) {
            // Manejar el error lanzado
            Response.error(res, 400);
        }
    }
}