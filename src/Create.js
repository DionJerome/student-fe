import { useState } from "react";
import StudentService from "./services/StudentService";

const Create = (props) => {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [dob, setDOB] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        var student = props.student;
        student = { name, email, dob}
        console.log(student);

        StudentService.createStudent(student).then(res => {
            this.e.history.push('/student');
        });

        setIsPending(true);
    }

    return(
        <div className="create">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>D.O.B:</label>
                <input
                type="text"
                required
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                />
                {!isPending && <button>Add Student</button>}
                {isPending && <button disabled>Adding Student...</button>}
            </form>
            <p>{name}</p>
            <p>{email}</p>
            <p>{dob}</p>
        </div>
    );
}

export default Create;