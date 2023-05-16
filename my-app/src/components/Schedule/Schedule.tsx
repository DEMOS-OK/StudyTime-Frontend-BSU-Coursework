"use client";

import Container from "@/components/Container";
import ScheduleTable from "@/components/Schedule/ScheduleTable/ScheduleTable";
import ScheduleFilterNavbar from "@/components/Schedule/ScheduleFilterNavbar";
import { useState } from "react";
import Lesson from "@/components/Schedule/Interfaces/Lesson";
import getLessonsByFilter from "@/api/lesson/getLessonsByFilter";
import ScheduleFiltersDTO from "@/components/Schedule/Interfaces/ScheduleFiltersDTO";
import GrouppedLessons from "@/components/Schedule/Interfaces/GrouppedLessons";

export default function Schedule() {
  const [lessons, setLessons] = useState<GrouppedLessons>({});

  /**
   * Функция, отвечающая за изменение состояния таблицы при изменении параметров фильтра
   *
   * @param {ScheduleFiltersDTO} dto
   */
  const onFiltersChange = async (dto: ScheduleFiltersDTO) => {
    // Получаем общий список занятий из параметров фильтра
    const lessons = await getLessonsByFilter(dto);

    // Группируем занятия по дням недели
    const grouppedLessons = lessons.reduce((acc: any, lesson: Lesson) => {
      const date = new Date(lesson.datetime);
      let dayOfWeek: string = date.toLocaleDateString("ru-RU", {
        weekday: "long",
      });

      // Применяем capitalize к dayOfWeek
      dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

      // Оставляем только время занятия
      lesson.datetime = lesson.datetime
        .split(" ")[1]
        .split(":")
        .slice(0, 2)
        .join(":");

      if (!acc[dayOfWeek]) {
        acc[dayOfWeek] = [];
      }
      acc[dayOfWeek].push(lesson);
      return acc;
    }, {});

    console.log(grouppedLessons);
    setLessons(grouppedLessons);
  };

  return (
    <section className="pt-16">
      <Container>
        <div className="pt-2 flex gap-x-10">
          <ScheduleFilterNavbar onFiltersChange={onFiltersChange} />
          <ScheduleTable lessons={lessons} />
        </div>
      </Container>
    </section>
  );
}
