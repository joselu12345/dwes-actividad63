'use server'

import prisma from "@/lib/prisma"

// ------------------ Grupos --------------------

async function obtenerGrupos() {
    const grupos = await prisma.grupo.findMany()
    return grupos
}

async function obtenerGrupo(id) {
    const grupo = await prisma.grupo.findUnique({
        where: { id: +id }
    })
    return grupo
}

// ------------------ Estudiantes --------------------

async function obtenerEstudiantes() {
    const estudiantes = await prisma.estudiante.findMany()
    return estudiantes
}

async function obtenerEstudiante(id) {
    const estudiante = await prisma.estudiante.findUnique({
        where: { id: +id }
    })
    return estudiante
}

// ------------------ Asignaturas --------------------

async function obtenerAsignaturas() {
    const asignaturas = await prisma.asignatura.findMany()
    return asignaturas
}

async function obtenerAsignatura(id) {
    const asignatura = await prisma.asignatura.findUnique({
        where: { id: +id }
    })
    return asignatura
}

export {
    obtenerGrupos,
    obtenerGrupo,
    obtenerEstudiantes,
    obtenerEstudiante,
    obtenerAsignatura,
    obtenerAsignaturas,
}