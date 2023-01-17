import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const { courses } = useContext(CourseContext);
  if (courses.length === 0) {
    return <h3>There arennt' any course</h3>;
  }
  return (
    <div>
      <h1>List of courses</h1>
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
};

export default CourseList;
