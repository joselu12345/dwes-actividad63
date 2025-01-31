import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { obtenerEstudiantes } from "@/lib/data";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()



function PaginaEstudiantes() {

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

