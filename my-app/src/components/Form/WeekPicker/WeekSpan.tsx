interface WeekSpanInterface {
  date: string;
}

const WeekSpan = ({ date }: WeekSpanInterface) => {
  return (
    <>
      <span className="h-8 bg-gray-100 rounded-2xl p-3 flex justify-center items-center font-light text-sm shadow-md">
        {date}
      </span>
    </>
  );
};

export default WeekSpan;
