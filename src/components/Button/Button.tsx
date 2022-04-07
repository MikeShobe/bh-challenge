import React from 'react';

import './Button.css';

interface ButtonTypes {
	text: string;
	onClick: () => void;
	disabled?: boolean;
}

const Dropdown = ({ text, onClick, disabled = false }: ButtonTypes): React.ReactElement => (
	<>
		<button className={disabled ? "disabled-button" : ""} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	</>
);

export default Dropdown;
