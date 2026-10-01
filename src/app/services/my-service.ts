import { Injectable } from '@angular/core';

export interface TaskStructure {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Injectable() //dejamos esta poja vacia para definir el servicio en la ruta especifica
export class MyService {
  private tasks: TaskStructure[] = [
    {
      "id": 1,
      "titulo": "Hacer la cama",
      "descripcion": "Estirar las sábanas y acomodar las almohadas al despertar.",
      "completada": false
    },
    {
      "id": 2,
      "titulo": "Preparar el desayuno",
      "descripcion": "Hacer café y preparar algo nutritivo para empezar el día.",
      "completada": false
    },
    {
      "id": 3,
      "titulo": "Cepillarse los dientes",
      "descripcion": "Higiene bucal después del desayuno.",
      "completada": false
    },
    {
      "id": 4,
      "titulo": "Pasear al perro",
      "descripcion": "Sacar a la mascota a dar una vuelta y hacer sus necesidades.",
      "completada": false
    },
    {
      "id": 5,
      "titulo": "Revisar el correo electrónico",
      "descripcion": "Leer y responder mensajes importantes del trabajo o personales.",
      "completada": false
    },
    {
      "id": 6,
      "titulo": "Hacer ejercicio",
      "descripcion": "Rutina de 30 minutos de cardio o estiramientos.",
      "completada": false
    },
    {
      "id": 7,
      "titulo": "Bañarse y vestirse",
      "descripcion": "Aseo personal y elección de la ropa del día.",
      "completada": false
    },
    {
      "id": 8,
      "titulo": "Preparar el almuerzo",
      "descripcion": "Cocinar alimentos saludables para la comida del mediodía.",
      "completada": false
    },
    {
      "id": 9,
      "titulo": "Lavar los platos",
      "descripcion": "Limpiar los utensilios y la vajilla usada en el desayuno y almuerzo.",
      "completada": false
    },
    {
      "id": 10,
      "titulo": "Regar las plantas",
      "descripcion": "Dar agua a las plantas de interior y exterior.",
      "completada": false
    },
    {
      "id": 11,
      "titulo": "Hacer la compra semanal",
      "descripcion": "Ir al supermercado a abastecer la nevera con víveres.",
      "completada": false
    },
    {
      "id": 12,
      "titulo": "Limpiar los pisos",
      "descripcion": "Barrer y pasar la fregona por toda la casa.",
      "completada": false
    },
    {
      "id": 13,
      "titulo": "Sacar la basura",
      "descripcion": "Llevar los residuos acumulados al contenedor de la calle.",
      "completada": false
    },
    {
      "id": 14,
      "titulo": "Lavar la ropa",
      "descripcion": "Poner una lavadora con ropa blanca o de color.",
      "completada": false
    },
    {
      "id": 15,
      "titulo": "Estudiar o leer",
      "descripcion": "Dedicar 45 minutos a la lectura o aprendizaje de un nuevo tema.",
      "completada": false
    },
    {
      "id": 16,
      "titulo": "Planificar el día siguiente",
      "descripcion": "Anotar las prioridades y pendientes para mañana.",
      "completada": false
    },
    {
      "id": 17,
      "titulo": "Preparar la cena",
      "descripcion": "Cocinar una comida ligera para la noche.",
      "completada": false
    },
    {
      "id": 18,
      "titulo": "Desconectar las pantallas",
      "descripcion": "Apagar el televisor y el teléfono al menos 30 minutos antes de dormir.",
      "completada": false
    },
    {
      "id": 19,
      "titulo": "Cuidado facial nocturno",
      "descripcion": "Limpieza e hidratación de la piel antes de acostarse.",
      "completada": false
    },
    {
      "id": 20,
      "titulo": "Dormir 8 horas",
      "descripcion": "Ir a la cama temprano para asegurar un buen descanso.",
      "completada": false
    }
  ]

  getAllTasks() {
    return this.tasks;
  }

  getTasksById(id: number): TaskStructure | undefined {

    const result = this.tasks.find((task) => task.id == id);
    return result;
  }
}
