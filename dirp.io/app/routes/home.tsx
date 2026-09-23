import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

function StudentRecord(){
	let students=[];
	function addStudent(){
		//const name=prompt("Enter the student name");
		students.add("lorem ipsum");
	}
	return (
	<>
		<ul>
			{students.map((student)=> <li key={student}>{student}</li>)}
		</ul>
		<button onClick={addStudent()}>Add Student</button>
	</>);
}
export default function Home() {
	//return <Welcome />;
	return <StudentRecord />;
}
