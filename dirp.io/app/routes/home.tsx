import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import React from "react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

function pickStudent({list}){
	
}

function studentEntry({student, students}){
	
	return (
	<>
		<li key={student}>{student}<button onClick={students}>delete</button></li>
	</>);
}	

function StudentRecord(){
	const [students, setStudents] = React.useState([]);
	const [name, setName] = React.useState('');

	function addStudent(){
		const newRecord=students.concat(name);
		setStudents(newRecord);
		setName('');
	}

	function delStudent(studentID){
		const newRecord=students.filter((student) => student.id !== studentID)
	return (
	<>
		<button onClick={addStudent}>Add Student</button>
		<input type="text" value={name} onChange={e => setName(e.target.value)} />
		<ul>
			{students.map((student)=> <li key={student}>{student}</li>)}
		</ul>
	</>);
}
export default function Home() {
	//return <Welcome />;
	return <StudentRecord />;
}
