import Lesson from "@/components/Schedule/Interfaces/Lesson";
import { useEffect, useState } from "react";
import preloader from "../../../../public/img/preloader.gif";
import GrouppedLessons from "@/components/Schedule/Interfaces/GrouppedLessons";

interface ScheduleTableProps {
  lessons: any;
}

const ScheduleTable = (props: ScheduleTableProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState<GrouppedLessons>({});

  useEffect(() => {
    setLessons(props.lessons);
    setIsLoading(false);
  }, [props.lessons]);

  useEffect(() => {
    console.log(lessons);
  }, [lessons]);

  if (isLoading) {
    return (
      <div className="h-screen w-3/4 bg-white rounded-lg shadow-lg p-10 flex justify-center">
        <img src={preloader.src} className="w-10 h-10" alt="" />
      </div>
    );
  }

  if (!Object.keys(lessons).length) {
    return (
      <div className="h-screen w-3/4 bg-white rounded-lg shadow-lg p-10">
        <h2 className="font-light text-lg text-center">Занятия не найдены</h2>
      </div>
    );
  }

  return (
    <div className="h-screen w-3/4 bg-white rounded-lg shadow-lg px-10 overflow-y-scroll">
      {Object.entries(lessons).map(
        ([day, lessons]: [string, Lesson[]], key) => {
          return (
            <div key={key}>
              <div className="flex justify-end px-10 items-center py-3 my-5 bg-gradient-to-r from-cyan-200 to-blue-300 w-full shadow-md">
                <h2 className="text-white font-light">{day}</h2>
              </div>

              <div
                className="border-b font-medium grid"
                style={{ gridTemplateColumns: "3fr 5fr 4fr" }}
              >
                <p className="py-4 px-4">Время занятия</p>
                <p className="py-4 px-4">Предмет</p>
                <p className="py-4 px-4">Преподаватель</p>
              </div>

              {lessons.map((lesson: Lesson, key: any) => {
                return (
                  <div
                    key={key}
                    className="border-b font-light text-sm grid"
                    style={{ gridTemplateColumns: "3fr 5fr 4fr" }}
                  >
                    <p className="px-4 py-4">{lesson.datetime}</p>
                    <p className="px-4 py-4">{lesson.subject.title}</p>
                    <p className="px-4 py-4">{lesson.teacher.fcs}</p>
                  </div>
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
};

export default ScheduleTable;
