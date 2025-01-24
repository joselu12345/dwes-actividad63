import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



async function PaginaEstudiantes() {

    return (
        <div>
            <h1>Lista de estudiantes</h1>
            <Suspense fallback={"Obteniendo Estudiantes ..."}>
                <Estudiantes />
            </Suspense>

        </div>

    )

}

export default PaginaEstudiantes;

// ---------------- Componente de servidor

async function Estudiantes() {

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
                            <p>{estudiante.fecha_nacimiento.toISOString().split("T")[0]}</p>
                            <img src={estudiante.foto} className="w-40"/>
                            <p>{estudiante.tutor_legal}</p>
                        </div>
                        <hr />
                    </div>

                )
            }
        </div>

    );

}