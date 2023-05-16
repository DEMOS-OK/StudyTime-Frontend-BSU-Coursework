import Lesson from "@/components/Schedule/Interfaces/Lesson";
import ScheduleFiltersDTO from "@/components/Schedule/Interfaces/ScheduleFiltersDTO";

/**
 * Возвращает список с расписанием занятий
 *
 * @param {ScheduleFiltersDTO} filters
 * @returns {Promise<Array<Lesson>>}
 */
export default async function getLessonsByFilter(
  filters: ScheduleFiltersDTO
): Promise<Array<Lesson>> {
  // Подготовка данных
  const data = new FormData();
  if (filters.teacher_fcs) {
    data.append("teacher_fcs", filters.teacher_fcs);
  }
  if (filters.group_id) {
    data.append("group_id", filters.group_id);
  }
  data.append("week_shift", filters.week_shift.toString());

  // Отправка запроса на сервер
  const response = await fetch(
    "http://api.studytime.test/api/lesson/get_by_filter/",
    {
      method: "POST",
      body: data,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }

  // Обработка полученных данных
  const json = await response.json();

  return json.data.lessons;
}
