import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()

async function PaginaEstudiante({ params, searchParams }) {
    const { id } = await params

    return (
        <Suspense fallback={"Obteniendo producto ..."}>
            <Estudiante id={id} />
        </Suspense>
    )
}

export default PaginaEstudiante;

// -------------------  Componente de servidor

async function Estudiante({ id }) {
    const estudiante = await prisma.estudiante.findUnique({
        where: {
            id: +id
        }
    })
    //console.log(grupo);

    return (
        <div>
            <p>{estudiante.nombre}</p>
            <p>{estudiante.fecha_nacimiento.toISOString().split("T")[0]}</p>
            <img src={estudiante.foto} className="w-40" />
            <p>{estudiante.tutor_legal}</p>
        </div>

    );
}

