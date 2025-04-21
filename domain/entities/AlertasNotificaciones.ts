export interface IAlertasNotificaciones {
    idNotificacion: number;
    idEvento: number;
    idUsuario: number;
    emailUsuario: string;
    telefono: string;
    fechaEnvio: Date;
    mensaje: string;
    tipoAlerta: 'email' | 'sms';
  }