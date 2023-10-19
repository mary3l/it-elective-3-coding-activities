import { useState } from "react";
import data from "./data/grades.json";
import GradesTable from "./components/GradesTable";
import TextInput from "./components/TextInput";
import GradeSelection from "./components/GradeSelection";

function App() {
  const [gradesData, setGradesData] = useState(data);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    units: 0,
    grade: "",
  });

  const handleFormInput = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleRadio = (e) =>
    setFormData({ ...formData, grade: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGradesData([...gradesData, formData]);
    setFormData({
      name: "",
      number: "",
      units: 0,
      grade: "",
    }); // Clear form inputs after submission
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-teal-500 to-emerald-500 min-h-screen p-5">
      <div className="text-center py-5">
        <h1 className="text-3xl text-white font-bold animate-bounce">
          Your Grades - React JS + Vite
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:items-start items-center gap-10">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-96 p-5 bg-white shadow-md rounded-lg animate__animated animate__fadeInLeft"
        >
          <TextInput
            label="Course Number:"
            id="number"
            type="text"
            onChange={handleFormInput}
            value={formData.number}
          />
          <TextInput
            label="Course Name:"
            id="name"
            type="text"
            onChange={handleFormInput}
            value={formData.name}
          />
          <TextInput
            label="Units:"
            id="units"
            type="number"
            onChange={handleFormInput}
            value={formData.units}
          />
          <GradeSelection onChange={handleRadio} selected={formData.grade} />
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
        <div className="w-full md:w-3/4 flex flex-col gap-5">
          <input
            id="search"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 bg-white border border-blue-300 rounded-lg animate__animated animate__fadeInRight"
          />
          <GradesTable grades={gradesData} search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
