export class Newmensaje {
    para: number;
    desde: number;
    texto: string;
    fecha: Date;

    Newmensaje (para?: number, desde?: number, texto?: string, fecha?: Date){
        this.para=para;
        this.desde=desde;
        this.texto=texto;
        this.fecha=fecha;
    }
}