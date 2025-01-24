import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



async function PaginaAsignaturas() {

    return (
        <div>
            <h1>Lista de asignaturas</h1>
            <Suspense fallback={"Obteniendo Productos ..."}>
                <Productos />
            </Suspense>

        </div>

    )

}

export default PaginAsignaturas;

// ---------------- Componente de servidor

async function Productos() {

    const estudiantes = await prisma.asignatura.findMany()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}
            {
                estudiantes.map(asignatura =>
                    <div key={asignatura.id}>
                        <div>
                            <p>{asignatura.nombre}</p>
                            <p>{asignatura.profesor}</p>
                            <p>{asignatura.num_horas}</p>
                        </div>
                        <hr />
                    </div>

                )
            }
        </div>

    );

}