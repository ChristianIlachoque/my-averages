import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

const CourseForm = () => {
  const [name, setName] = useState("");
  const { createCourse } = useContext(CourseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse(name);
    setName("");
  };

  return (
    <div>
      <h1>Course Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="New Couse"
          value={name}
        />
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CourseForm;
