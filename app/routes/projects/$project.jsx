import { useParams } from "remix"

export default function projectRoute(){
	let {project} = useParams();

	return (<h1> Hi {project}</h1>)
}