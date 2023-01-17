import { createContext, useState } from "react";

export const CourseContext = createContext();

const CourseContextProvider = (props) => {
  const [courses, setCourses] = useState([]);

  const createCourse = (nameCourse) => {
    const newCourse = {
      id: courses.length,
      name: nameCourse,
      degres: [],
      average: 0,
    };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const createDegre = (id) => {
    // we have to manage when we create a degre when the array is empty
    //console.log("createDegre was called");
    let listCourses = [...courses];
    let course = courses[id];
    let degresCourse = [];
    if (course.degres.length !== 0) {
      degresCourse = [...course.degres];
    } else {
      degresCourse = [];
    }

    //console.log(listCourses);
    let newDegre = {
      id: degresCourse.length,
      value: 0,
      percentage: 0,
    };
    listCourses[id] = {
      ...listCourses[id],
      //id: id,
      //name: course.name,
      degres: [...degresCourse, newDegre],
      //average: course.average,
    };
    //console.log(listCourses);
    setCourses(listCourses);
    //setCourses(courses);
    //console.log(listCourses);
  };

  const deleteDegre = (idDegre, idCourse) => {
    //console.log("delete degre: ", idDegre, idCourse);
    let listCourses = [...courses];
    let course = courses[idCourse];

    let newDegresOfCourse = course["degres"];
    // //console.log("degres", newDegresOfCourse);
    // newDegresOfCourse.filter((degre) => degre !== idDegre);

    // //course["degres"].filter((degre) => degre !== idDegre);

    listCourses[idCourse] = {
      ...listCourses[idCourse],
      degres: newDegresOfCourse.filter((degre) => degre.id !== idDegre),
    };

    setCourses(listCourses);

    let newAverage = calculateAverage(idCourse);
    listCourses[idCourse] = {
      ...listCourses[idCourse],
      average: newAverage,
    };
    console.log("check average in DDegre: ", listCourses, newAverage);
    setCourses(listCourses);
  };

  const editDegre = ({ idDegre, idCourse, value, percentage }) => {
    //console.log("info edit: ", idDegre, idCourse, value, percentage);
    let listCourses = [...courses];
    let course = courses[idCourse];

    let degresOfCourse = course["degres"];
    degresOfCourse[idDegre] = {
      id: idDegre,
      value: Number(value),
      percentage: Number(percentage),
    };

    listCourses[idCourse] = {
      ...listCourses[idCourse],
      degres: [...degresOfCourse],
    };
    console.log("edit: ", listCourses);
    setCourses(listCourses);

    // let averageM = 0;
    // averageM = calculateAverage(idCourse);
    // console.log("Average in editDegre: ", averageM);

    // to show the final average
    listCourses[idCourse] = {
      ...listCourses[idCourse],
      average: calculateAverage(idCourse),
    };
    console.log("check average: ", listCourses);
    setCourses(listCourses);
  };

  const calculateAverage = (idCourse) => {
    let amount = 0;
    let listCourses = [...courses];
    let course = courses[idCourse];

    let degresOfCourse = course["degres"];
    degresOfCourse.map((degre) => {
      let x_value = Number(degre.value);
      let x_percentage = Number(degre.percentage);

      let x_average = 0;
      x_average = (x_value * x_percentage) / 100;
      amount += x_average;
      console.log("M-Calculate: average - ", amount);
    });
    return amount;
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        createCourse,
        deleteCourse,
        createDegre,
        deleteDegre,
        editDegre,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
