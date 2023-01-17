import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import DegreCard from "./DegreCard";

const DegreList = ({ course }) => {
  const { createDegre } = useContext(CourseContext);
  if (course.degres.length === 0) {
    return (
      <>
        <h4>There aren't any degre in curse: {course.name}</h4>
        <button onClick={() => createDegre(course.id)}>Create Degre</button>
      </>
    );
  }
  return (
    <div>
      <h5>Degres list</h5>
      {course.degres.map((degre) => {
        return <DegreCard key={degre.id} degre={degre} idCourse={course.id} />;
      })}
      <button onClick={() => createDegre(course.id)}>Create Degre</button>
    </div>
  );
};

export default DegreList;
