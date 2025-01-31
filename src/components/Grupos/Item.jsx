import { obtenerGrupo} from "@/lib/data";

// -------------------  Componente de servidor

export default async function Grupo( {id} ) {
    const grupo = await obtenerGrupo(id)
    //console.log(grupo);

    return ( 
        <div>
            <p>{grupo.nombre}</p>
            <p>{grupo.tutor}</p>
            <p>{grupo.aula}</p>
        </div>

     );
}

