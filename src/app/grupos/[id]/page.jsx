import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()

async function  PaginaGrupo( { params, searchParams } ) {
    const { id } = await params

    return (
        <Suspense fallback={"Obteniendo producto ..."}>
            <Producto id={id}/>
        </Suspense>
    )
}

export default  PaginaGrupo;

// -------------------  Componente de servidor

async function Producto( {id} ) {
    const grupo = await prisma.grupo.findUnique( { 
        where: { 
            id: +id 
        } 
    } )
    //console.log(grupo);

    return ( 
        <div>
            <p>{grupo.nombre}</p>
            <p>{grupo.tutor}</p>
            <p>{grupo.aula}</p>
        </div>

     );
}

