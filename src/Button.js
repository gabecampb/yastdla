import React, { useState } from "react";

function Button() {
	const [added, setAdded] = useState(0);
	
	const handleClick = () => {
		setAdded(added + 1);
	}
	
	return (
		<button onClick={handleClick}>Hello, world! {added}</button>
	);
}

export default Button;
