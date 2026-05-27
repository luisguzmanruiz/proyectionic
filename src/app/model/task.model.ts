export interface Task {
    id: number;
    titulo: string;
    descripcion: string;
    finalizado: boolean;
    prioridad: 'baja' | 'media' | 'alta';
}