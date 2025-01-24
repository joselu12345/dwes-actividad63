import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



async function PaginaEstudiantes() {

    return (
        <div>
            <h1>Lista de estudiantes</h1>
            <Suspense fallback={"Obteniendo Productos ..."}>
                <Productos />
            </Suspense>

        </div>

    )

}

export default PaginEstudiantes;

// ---------------- Componente de servidor

async function Productos() {

    const estudiantes = await prisma.estudiante.findMany()
    //console.log(grupos);

    return (
        <div>
            {/*JSON.stringify(grupos)*/}
            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id}>
                        <div>
                            <p>{estudiante.nombre}</p>
                            <p>{estudiante.fecha_nacimiento}</p>
                            <p>{estudiante.foto}</p>
                            <p>{estudiante.tutor_legal}</p>
                        </div>
                        <hr />
                    </div>

                )
            }
        </div>

    );

}