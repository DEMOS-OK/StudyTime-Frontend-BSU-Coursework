"use client";

import ArrowButton from "@/components/Form/ArrowButton/ArrowButton";
import Direction from "@/components/Form/ArrowButton/Enums/Direction";
import WeekSpan from "@/components/Form/WeekPicker/WeekSpan";
import { useEffect, useState } from "react";
import WeekHelperInterface from "@/components/Form/WeekPicker/Helper/WeekHelperInterface";

interface WeekPickerProps {
  weekHelper: WeekHelperInterface;
  onWeekChange: (value: number) => void;
}

const WeekPicker = ({ weekHelper, onWeekChange }: WeekPickerProps) => {
  const [firstDate, setFirstDate] = useState<string>(
    weekHelper.getFirstDayOfWeekDate()
  );
  const [secondDate, setSecondDate] = useState<string>(
    weekHelper.getLastDayOfWeekDate()
  );

  const [weekShift, setWeekShift] = useState<number>(0);

  const increaseWeekShift = (): void => {
    setWeekShift(weekShift + 1);
  };

  const decreaseWeekShift = (): void => {
    setWeekShift(weekShift - 1);
  };

  useEffect(() => {
    weekHelper.setWeekShift(weekShift);
    setFirstDate(weekHelper.getFirstDayOfWeekDate());
    setSecondDate(weekHelper.getLastDayOfWeekDate());
    onWeekChange(-weekShift);
  }, [weekShift]);

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg">
      <div>
        <div className="flex items-center justify-between">
          <WeekSpan date={firstDate} />
          -
          <WeekSpan date={secondDate} />
        </div>
      </div>
      <div className="flex gap-4 mt-3 justify-end">
        <ArrowButton
          direction={Direction.Left}
          size="32px"
          onClick={decreaseWeekShift}
        />
        <ArrowButton
          direction={Direction.Right}
          size="32px"
          onClick={increaseWeekShift}
        />
      </div>
    </div>
  );
};

export default WeekPicker;
