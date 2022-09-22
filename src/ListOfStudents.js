import React from 'react';
import StudentService from './services/StudentService';

var students = null;
class ListOfStudents extends React.Component {
    
constructor(props) {
	super(props)
    students = props.students;
	// Initializing the state
    this.state = { students: [] 
    }
}
componentDidMount() {
	StudentService.getStudents().then((res) => {
        this.setState({ students: res.data});
    });
}
render() {
    
	return (
    <div className="list-of-students">
        {this.state.students.map((student) => (
            <div className="student" key={student.id}>
                <h2>{student.name}</h2>
                <p>{student.email}</p>
                <p>{student.dob}</p>
            </div>
        ))}
    </div>
	);
}
}
export default ListOfStudents;
