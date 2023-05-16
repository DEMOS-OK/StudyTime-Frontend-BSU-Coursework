"use client";

import TextInput from "@/components/Form/TextInput";
import ScheduleFiltersDTO from "@/components/Schedule/Interfaces/ScheduleFiltersDTO";
import { useEffect, useState } from "react";
import WeekPicker from "@/components/Form/WeekPicker/WeekPicker";
import WeekHelper from "@/components/Form/WeekPicker/Helper/WeekHelper";

interface ScheduleFilterNavbarProps {
  onFiltersChange: (filters: ScheduleFiltersDTO) => void;
}

const ScheduleFilterNavbar = ({
  onFiltersChange,
}: ScheduleFilterNavbarProps) => {
  const [filters, setFilters] = useState<ScheduleFiltersDTO>({
    teacher_fcs: null,
    group_id: null,
    week_shift: 0,
  });

  const setGroupId = (e: any): void => {
    setFilters({
      teacher_fcs: filters.teacher_fcs,
      group_id: e.target.value,
      week_shift: filters.week_shift,
    });
  };

  const setTeacherFCs = (e: any): void => {
    setFilters({
      teacher_fcs: e.target.value,
      group_id: filters.group_id,
      week_shift: filters.week_shift,
    });
  };

  const setWeekShift = (value: number): void => {
    setFilters({
      teacher_fcs: filters.teacher_fcs,
      group_id: filters.group_id,
      week_shift: value,
    });
  };

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

  return (
    <div className="relative w-3/12 h-2/4 shadow-lg rounded-lg">
      <div
        className="absolute bg-gradient-to-r from-cyan-200/75 to-blue-300/75
                 w-full h-full rounded-lg"
        style={{ zIndex: -1 }}
      ></div>
      <div className="px-5 py-10 flex flex-col gap-2 z-10">
        <TextInput
          label="ИД группы"
          placeholder="12002102"
          required
          id="group_id"
          onKeyUp={setGroupId}
        />
        <TextInput
          label="ФИО преподавателя"
          placeholder="Иванов Иван Иванович"
          required
          id="fcs"
          onKeyUp={setTeacherFCs}
        />
        <div className="pt-5">
          <WeekPicker
            weekHelper={new WeekHelper()}
            onWeekChange={setWeekShift}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleFilterNavbar;
