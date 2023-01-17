import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import DegreList from "./DegreList";

const CourseCard = ({ course }) => {
  const { deleteCourse, createDegre } = useContext(CourseContext);
  return (
    <div>
      <h3>{course.name}</h3>
      <DegreList course={course} />
      <h4>Average: {course.average}</h4>
      <button onClick={() => deleteCourse(course.id)}>Delete Course</button>
      
    </div>
  );
};

export default CourseCard;
