import AsignaturaInsertar from "@/components/Asignaturas/Insertar";
import { Suspense } from "react";

function PaginaAsignaturas() {

    return (
        <div>
            <h1>Lista de asignaturas</h1>
            <Suspense fallback={"Obteniendo Asignaturas ..."}>
                <AsignaturaInsertar />
            </Suspense>

        </div>

    )

}

export default PaginaAsignaturas;

