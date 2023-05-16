/**
 * Интерфейс класса-помощник по работе с неделями для компонента WeekPicker
 */
interface WeekHelperInterface {
  getLastDayOfWeekDate: () => string;
  getFirstDayOfWeekDate: () => string;
  setWeekShift: (weekShift: number) => void;
}

export default WeekHelperInterface;
