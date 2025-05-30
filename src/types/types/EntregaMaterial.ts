export interface EntregaMaterial {
  id?: number;
  solicitudId: number;
  usuarioResponsableId: number;
  fechaEntrega: string;       // ISO string
  observaciones?: string;
  fechaInicial?: string;      // ISO string, opcional
  fechaFinal?: string;        // ISO string, opcional
}
