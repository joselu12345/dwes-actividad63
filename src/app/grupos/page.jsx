import Grupos from "@/components/Grupos/Lista";
import { Suspense } from "react";

function PaginaGrupos() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE GRUPOS</h1>
            {/* 
            <Modal texto="abc" >
                <p>MI CONTENIDO</p>
            </Modal>
            */}

            <Suspense fallback={"Obteniendo Grupos ..."}>
                <Grupos/>
            </Suspense>

        </div>

    )

}

export default PaginaGrupos;

