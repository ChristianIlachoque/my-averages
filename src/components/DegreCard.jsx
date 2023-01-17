import { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

const DegreCard = ({ degre, idCourse }) => {
  const [value, setValue] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const { deleteDegre, editDegre } = useContext(CourseContext);

  return (
    <div
      onBlur={() => {
        editDegre({
          idDegre: degre.id,
          idCourse: idCourse,
          value: value,
          percentage: percentage,
        });
      }}
    >
      {/* <span>{degre.value}</span>
      ----
      <span>{degre.percentage}</span> */}
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={20}
      />
      <input
        type="number"
        onChange={(e) => setPercentage(e.target.value)}
        min={0}
        max={100}
      />
      <button onClick={() => deleteDegre(degre.id, idCourse)}>
        Delete Degre
      </button>
    </div>
  );
};

export default DegreCard;
