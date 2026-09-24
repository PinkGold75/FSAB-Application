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
	const validList=students.filter((student) => student.name != lastPicked);
	chosen = validList[Math.floor(Math.random()*validList.length)];
	alert(chosen.name);
	chosen.count++;
}
/**function StudentEntry({studentName, delete}){
	return (
	<>
		<li key={studentName}>{studentName}<button onClick={delete(studentName)}>Remove Student</button></li>
	</>);
}**/	

function StudentRecord(){
	const [students, setStudents] = React.useState([]);
	const [name, setName] = React.useState('');
	let lastPicked;

	function addStudent(){
		if(name===""){
			alert("Name cannnot be blank")
			return;
		}	

		const newRecord=students.concat({id: name, name: name, count: 0});
		setStudents(newRecord);
		setName('');
	}

	function delStudent(xstudent:string){
		const newRecord=students.filter((student) => student.name !== xstudent);
		setStudents(newRecord);
	}

	function pickStudent(){
		const validList=students.filter((student) => student.name != lastPicked);
		alert(validList[Math.floor(Math.random()*validList.length)].name);
	}

	return (
	<>
		<input type="text" value={name} onChange={e => setName(e.target.value)} />
		<button onClick={addStudent}>Add Student</button>
		<button onClick={pickStudent}>Pick Student</button>
		<ul>
			{students.map((student) =>
				(<li key={student.id}>{student.name} {student.count} <button onClick={() => delStudent(student.name)}>delete</button></li>))}
		</ul>
	</>);
}
export default function Home() {
	//return <Welcome />;
	return <StudentRecord />;
}
