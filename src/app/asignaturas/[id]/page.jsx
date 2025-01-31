import { obtenerAsignatura } from "@/lib/data";
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
    const asignatura = await obtenerAsignatura(id)
    //console.log(grupo);

    return (
        <div>
            <p>{asignatura.nombre}</p>
            <p>{asignatura.profesor}</p>
            <p>{asignatura.num_horas}</p>
        </div>

    );
}

