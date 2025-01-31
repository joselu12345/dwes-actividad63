import { modificarGrupo } from "@/lib/actions";

function GrupoModificar({ grupo }) {
    return (
        <form action={modificarGrupo}>
            <input type="hidden" name="id" defaultValue={grupo.id} />
            <input name='nombre' defaultValue={grupo.nombre} />
            <input name='tutor' defaultValue={grupo.tutor} />
            <input name='aula' defaultValue={grupo.aula} />
            <button>Modificar</button>
        </form>

    );
}

export default GrupoModificar;