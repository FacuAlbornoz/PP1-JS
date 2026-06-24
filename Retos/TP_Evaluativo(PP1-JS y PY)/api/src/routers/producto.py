from typing import Annotated
from fastapi import APIRouter,HTTPException,Path,Query
from src.schemas.zapatillas import ProductoSchema,ProductoUpdateSchema


productos_routers = APIRouter()

NO_ENCONTRADO = noEncontrado ={
    404:{
        "description":"Producto no encontrado",
        "content":{
            "application/json":{
                "example":{
                    "detail":"Producto no encontrado",
                }
            }
        },
    },
}

productos = [
    {"id" : 1,"nombre": "Ultra Energy","marca" : "Adidas","precio" : 67999,"activo" : True},
    {"id" : 2,"nombre": "DobleB","marca" : "Casual","precio" : 301200,"activo" : True},
    {"id" : 3,"nombre": "Downshifter","marca" : "Nike","precio" : 101878,"activo" : True},
    {"id" : 4,"nombre": "Jaguar","marca" : "Puma","precio" : 500000,"activo" : False}
]



@productos_routers.get("/",
                       response_model=list[ProductoSchema]
                       )

async def getProductos():
    return productos



@productos_routers.get("/{id}",
         response_model=ProductoSchema,
         responses=noEncontrado,
         )
async def obtenerProductoId(
    id: Annotated[int,Path(gt=0)]
)->ProductoSchema:
    for producto in productos:
        if producto["id"] == id:
            return producto
    raise HTTPException(status_code=404, detail="Producto no encontrado")



@productos_routers.post("/",
          response_model=ProductoSchema)
async def postProducto(
    producto_nuevo: ProductoSchema
)->ProductoSchema:
    productos.append(producto_nuevo.model_dump())

    return producto_nuevo



@productos_routers.put("/{id}",
         responses=noEncontrado,
         response_model=ProductoSchema
         )
async def modificarProducto(
    id: Annotated[int, Path(gt=0)],
    producto_editado: ProductoUpdateSchema
)->ProductoSchema:
    for producto in productos:
        if producto["id"] == id:

            producto["nombre"] = producto_editado.nombre
            producto["marca"] = producto_editado.marca
            producto["precio"] = producto_editado.precio
            producto["activo"] = producto_editado.activo

            return producto

    raise HTTPException(status_code=404, detail="Producto no encontrado")


@productos_routers.delete("/{id}",
            responses=noEncontrado,
            response_model=ProductoSchema)
async def borrarProducto(
    id: Annotated[int, Path(gt=0)],
    logico: Annotated[
        bool,
        Query(description="Mantener registro?")
    ]=False
)->ProductoSchema:
    for producto in productos:

        if producto["id"] == id:

            if logico:
                producto["activo"] = False
            else:
                productos.remove(producto)

            return producto

    raise HTTPException(status_code=404, detail="Producto no encontrado")



