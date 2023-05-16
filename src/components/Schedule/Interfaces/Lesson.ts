/**
 * Интерфейс объекта - занятия
 */
interface Lesson {
  id: number;
  group_id: number;
  datetime: string;
  teacher: {
    fcs: string;
  };
  subject: {
    title: string;
  };
}

export default Lesson;
