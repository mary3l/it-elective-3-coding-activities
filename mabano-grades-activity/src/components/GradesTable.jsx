/* eslint-disable react/prop-types */

const computeQPI = (items) => {
  let sum = 0;
  let totalUnits = 0;

  for (let i of items) {
    let u = parseFloat(i.units);
    totalUnits += u;
    switch (i.grade) {
      case "A":
        sum += 4 * u;
        break;
      case "B+":
        sum += 3.5 * u;
        break;
      case "B":
        sum += 3 * u;
        break;
      case "C+":
        sum += 2.5 * u;
        break;
      case "C":
        sum += 2 * u;
        break;
      case "D":
        sum += 1 * u;
        break;
      case "F":
        sum += 0;
        break;
    }
  }

  const qpi = Number(Math.round((sum / totalUnits) * 100) / 100).toFixed(2);
  return qpi;
};

export default function GradesTable({ grades, search, headerBgColor, headerBorderColor, headerTextColor, cellBgColor, cellBorderColor, cellTextColor }) {
  return (
    <>
      <div className={`border-2 ${headerBorderColor} rounded-md overflow-hidden`}>
        <table className="w-full">
          <tbody className="rounded-md">
            <tr className={`${headerBgColor}`}>
              <th className={`border ${headerBorderColor} px-5 py-4 ${headerTextColor}`}>Course Number</th>
              <th className={`border ${headerBorderColor} px-5 py-4 ${headerTextColor}`}>Course Name</th>
              <th className={`border ${headerBorderColor} px-5 py-4 ${headerTextColor}`}>Units</th>
              <th className={`border ${headerBorderColor} px-5 py-4 ${headerTextColor}`}>Grade</th>
            </tr>
            {grades
              .filter(
                (grade) =>
                  grade.number.toLowerCase().includes(search.toLowerCase()) ||
                  grade.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((grade, index) => (
                <tr key={index}>
                  <td className={`border ${cellBorderColor} px-5 py-4 ${cellBgColor} ${cellTextColor}`}>
                    {grade.number}
                  </td>
                  <td className={`border ${cellBorderColor} px-5 py-4 ${cellBgColor} ${cellTextColor}`}>
                    {grade.name}
                  </td>
                  <td className={`border ${cellBorderColor} px-5 py-4 text-center ${cellBgColor} ${cellTextColor}`}>
                    {grade.units}
                  </td>
                  <td className={`border ${cellBorderColor} px-5 py-4 text-center ${cellBgColor} ${cellTextColor}`}>
                    {grade.grade}
                  </td>
                </tr>
              ))}
            <tr>
              <th
                colSpan={3}
                className={`border ${headerBorderColor} px-5 py-4 text-right ${headerBgColor}`}
              >
                Total QPI:
              </th>
              <th className={`border ${headerBorderColor} px-5 py-4 text-center ${headerBgColor}`}>
                {computeQPI(grades)}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
