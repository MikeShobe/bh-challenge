import React from 'react';
import Select from 'react-select';
import './Dropdown.css';

export interface OptionTypes {
	label: string;
	value: string;
}
interface DropdownTypes {
	options: OptionTypes[];
	selectedOption: OptionTypes | null;
	setSelectedOption: (option: OptionTypes | any) => void;
	placeholder?: string;
}

const Dropdown = (
	{ placeholder = 'Select', options, selectedOption, setSelectedOption}: DropdownTypes)
: React.ReactElement => {

	const handleChange = (option: any) => {
		setSelectedOption(option);
	}

  return (
		<>
			<Select
				defaultValue={selectedOption}
				onChange={handleChange}
				options={options}
				placeholder={placeholder}
			/>
		</>
  );
}

export default Dropdown;
