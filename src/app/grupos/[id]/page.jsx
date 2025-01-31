import Grupo from "@/components/Grupos/Item";
import { Suspense } from "react";

async function  PaginaGrupo( { params, searchParams } ) {
    const { id } = await params

    return (
        <Suspense fallback={"Obteniendo grupo ..."}>
            <Grupo id={id}/>
        </Suspense>
    )
}

export default  PaginaGrupo;

