// eslint-disable-next-line react/prop-types
export default function GradeSelection({ onChange, labelColor, textColor, radioColor }) {
  const letters = ["A", "B+", "B", "C+", "C", "D", "F"];

  return (
    <div className="my-2">
      <p className={`font-bold ${labelColor}`}>Grade:</p>
      <div className="grid grid-cols-2 gap-2">
        {letters.map((letter, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              name="grade_selection"
              id={letter}
              value={letter}
              onChange={onChange}
              className={`mr-1 ${radioColor}`}
            />
            <label htmlFor={letter} className={`pl-1 ${textColor}`}>
              {letter}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
