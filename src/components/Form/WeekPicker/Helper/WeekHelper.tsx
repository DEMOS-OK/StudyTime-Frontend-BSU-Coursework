import WeekHelperInterface from "@/components/Form/WeekPicker/Helper/WeekHelperInterface";

/**
 * Класс-помощник по работе с неделями для компонента WeekPicker
 */
class WeekHelper implements WeekHelperInterface {
  /**
   * Cдвиг по неделям
   *
   * @private
   */
  private weekShift: number = 0;

  /**
   * Сеттер для сдвига по неделям
   *
   * @param weekShift
   */
  public setWeekShift(weekShift: number): void {
    this.weekShift = weekShift;
  }

  /**
   * Возвращает дату первого дня текущей недели
   */
  public getFirstDayOfWeekDate(): string {
    // Получаем текущую дату
    const currentDate = new Date();
    const currentDayOfWeek =
      currentDate.getDay() >= 1 ? currentDate.getDay() - 1 : 6;

    // Получаем дату первого дня текущей недели
    let firstDayOfWeekDate = new Date();
    firstDayOfWeekDate.setDate(currentDate.getDate() - currentDayOfWeek);

    firstDayOfWeekDate = this.shiftWeek(firstDayOfWeekDate);
    return this.formatDate(firstDayOfWeekDate);
  }

  /**
   * Возвращает дату последнего дня текущей недели
   */
  public getLastDayOfWeekDate(): string {
    // Получаем текущую дату
    const currentDate = new Date();

    // Определяем номер дня недели (вычитаем 1, поскольку нумерация начинается с воскресенья)
    const currentDayOfWeek =
      currentDate.getDay() >= 1 ? currentDate.getDay() - 1 : 6;

    // Определяем разницу между текущим днем недели и последним днем недели
    const diff = 6 - currentDayOfWeek;

    // Создаём дату на последний день недели
    let lastDayOfWeekDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + diff
    );

    lastDayOfWeekDate = this.shiftWeek(lastDayOfWeekDate);
    return this.formatDate(lastDayOfWeekDate);
  }

  /**
   * Приводит объект Date к нужному формату
   *
   * @param {Date} date
   */
  private formatDate(date: Date): string {
    // Функция для добавления ведущего нуля к числу, если оно меньше 10
    function addLeadingZero(num: number) {
      return num < 10 ? "0" + num : num;
    }

    // Форматируем дату в строку формата 'd.m.Y'
    return (
      addLeadingZero(date.getDate()) +
      "." +
      addLeadingZero(date.getMonth() + 1) +
      "." +
      date.getFullYear()
    );
  }

  /**
   * Сдвигает дату на указанное количество недель
   *
   * @param {Date} date
   * @private
   */
  private shiftWeek(date: Date): Date {
    const currentDay = date.getDay() >= 1 ? date.getDay() - 1 : 0;
    const daysToShift = currentDay + 7 * this.weekShift;

    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + daysToShift
    );
  }
}

export default WeekHelper;
