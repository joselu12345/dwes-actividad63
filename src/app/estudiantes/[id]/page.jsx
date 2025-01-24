import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()

async function PaginaGrupo({ params, searchParams }) {
    const { id } = await params

    return (
        <Suspense fallback={"Obteniendo producto ..."}>
            <Producto id={id} />
        </Suspense>
    )
}

export default PaginaGrupo;

// -------------------  Componente de servidor

async function Producto({ id }) {
    const grupo = await prisma.estudiante.findUnique({
        where: {
            id: +id
        }
    })
    //console.log(grupo);

    return (
        <div>
            <p>{estudiante.nombre}</p>
            <p>{estudiante.fecha_nacimiento}</p>
            <p>{estudiante.foto}</p>
            <p>{estudiante.tutor_legal}</p>
        </div>

    );
}

