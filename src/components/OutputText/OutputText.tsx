import React from 'react';
import './OutputText.css';

const OutputText = ({ output }: { output: string }): React.ReactElement => (
	<>
		<h3>Sleep Score:</h3>
		<p>
			{output}
		</p>
	</>
);

export default OutputText;
