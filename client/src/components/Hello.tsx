import React from "react"

interface HelloProps {name: string}

export default (props: HelloProps) => {
	return <h1>
		{props.name}
	</h1>
}