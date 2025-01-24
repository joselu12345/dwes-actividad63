import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



async function PaginaGrupos() {

    return (
        <div>
            <h1>Lista de productos</h1>
            <Suspense fallback={"Obteniendo Productos ..."}>
                <Productos/>
            </Suspense>
            
        </div>
        
    )
    
}

export default PaginaGrupos;

// ---------------- Componente de servidor

async function Productos() {

    const grupos = await prisma.grupo.findMany()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}
            {
                grupos.map(grupo =>
                    <div key={grupo.id}>
                        <div>
                            <p>{grupo.nombre}</p>
                            <p>{grupo.tutor}</p>
                            <p>{grupo.aula}</p>
                        </div>
                        <hr />
                    </div>

                )
            }
        </div>

    );

}