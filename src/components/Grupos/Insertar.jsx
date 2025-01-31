import { insertarGrupo } from "@/lib/actions";

function GrupoInsertar() {
    return (

        <form action={insertarGrupo}>
            <input name="nombre" placeholder="Nombre" />
            <input name="tutor" placeholder="Tutor/a" />
            <input name="aula" placeholder="Aula" />
            <button>Insertar Grupo</button>
        </form>

    );
}

export default GrupoInsertar;