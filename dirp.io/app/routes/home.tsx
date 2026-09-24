import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import React from "react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

function pickStudent({students, lastPicked}){
	const validList=students.filter((student) => student.name != lastPicked);
	const chosen = validList[Math.floor(Math.random()*validList.length)];
	alert(chosen.name);
	chosen.count++;
}
const ListStudents=({students, remove}) => {
	return (
	<>
		<ul>
			{students.map((student) =>
				(<li key={student.id}>{student.name} {student.count}
				<button onClick={() => remove(student.name)}>Remove Student</button>
				</li>))}
		</ul>
	</>);
}

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

	return (
	<>
		<span><input type="text" value={name} onChange={e => setName(e.target.value)} /></span>
		<span><button onClick={addStudent}>Add Student</button></span>
		<br />
		<span><button onClick={()=>pickStudent({students, lastPicked})}>Pick Student</button></span>
		<ListStudents students={students} remove={delStudent} />
	</>);
}
export default function Home() {
	//return <Welcome />;
	return <StudentRecord />;
}
