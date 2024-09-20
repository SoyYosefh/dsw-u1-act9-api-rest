/* Entidades
El objeto Proyecto tendrá las siguientes propiedades:
id: Generado automáticamente (UUID).
name: Nombre del proyecto (cadena de texto, requerido).
description: Descripción del proyecto (cadena de texto).
startDate: Fecha de inicio del proyecto (formato YYYY-MM-DD).
endDate: Fecha de finalización esperada (formato YYYY-MM-DD).
status: Estado del proyecto (enum con valores: "pendiente", "en progreso", "completado").
teamMembers: Arreglo de cadenas con los nombres de los miembros del equipo.
budget: Presupuesto asignado al proyecto (número, positivo).*/

let project = [
    {
        id: '1',
        name: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        startDate: '2022-01-01',
        endDate: '2022-01-31',
        status: 'pendiente',
        teamMembers: ['Ramon', 'Cristian', 'Rodolfo'],
        budget: 10000
    },
];

// FUNCIONES CRUD

// OBTENER TODAS LOS PROYECTOS
function getAllProjects() {
    return project;
};

// CREAR UN NUEVO PROYECTO
function createNewProject(project) {
    
};

// ACTUALIZAR UN PROYECTO
function updateProject(project) {

};

// ELIMINAR UN PROYECTO
function deleteProject(project) {  

};

// BUSCAR UN PROYECTO POR SU ID
function getProjectById(id) {
    
};

module.exports = {
    getAllProjects,
    createNewProject,
    updateProject,
    deleteProject,
    getProjectById
};