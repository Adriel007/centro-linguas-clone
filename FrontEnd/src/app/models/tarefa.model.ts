export interface Tarefa {
    idTarefa?: number; // O ID pode ser opcional ao criar uma nova tarefa
    titulo: string;
    descricao: string;
    dataEntrega: Date;
    idTurma: number;
}
