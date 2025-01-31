import Estudiantes from "@/components/Estudiantes/Lista";
import { Suspense } from "react";

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

