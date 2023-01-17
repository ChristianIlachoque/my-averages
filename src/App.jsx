import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

const App = () => {
  return (
    <div className="App">
      <CourseForm />
      <hr />
      <CourseList />
    </div>
  );
};

export default App;
