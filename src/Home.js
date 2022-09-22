import ListOfStudents from "./ListOfStudents";
import StudentService from "./services/StudentService";

var students = StudentService.getStudents()
const Home = () => {

  return (
    <div className="student-list">
        <ListOfStudents students={students}/>
    </div>
  );
}
 
export default Home;