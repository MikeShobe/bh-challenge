import React, { useEffect, useState } from 'react';

import Dropdown, { OptionTypes } from './components/Dropdown/Dropdown';
import Button from './components/Button/Button';
import OutputText from './components/OutputText/OutputText';

import { getData } from './requests';
import { durationOptions } from './utils';
import './App.css';

const App = (): React.ReactElement => {
  const [selectedBedOption, setSelectedBedOption] = useState<OptionTypes | null>(null);
  const [selectedAsleepOption, setSelectedAsleepOption] = useState<OptionTypes | null>(null);
  const [output, setOutput] = useState('');

  useEffect(() => {
    // TODO: Make API fetch here for data
    // const options = {};
    // getData(options);
  }, []);

  const handleButtonClick = () => {
    if (selectedAsleepOption && selectedBedOption) {
      setOutput('Loading...');
      const asleepDuration = Number(selectedAsleepOption.value);
      const bedDuration = Number(selectedBedOption.value);
      const newCalculation = Math.floor(100 * asleepDuration/bedDuration);

      // TODO:  Make async request to API rather than use setTimeout
      setTimeout(() => {setOutput(`${newCalculation}`)}, 1000);
    }
  };

  // Logic for disabling 'Calculate' button
  const handleDisable = () => {
    if (selectedBedOption && selectedAsleepOption) {
      const asleepDuration = Number(selectedAsleepOption.value);
      const bedDuration = Number(selectedBedOption.value);
      if (asleepDuration > bedDuration) {
        return true;
      }
      return false;
    }

    return true;
  }

  return (
    <div className="App">
      <div className="App-body">
        <div className="dropdown-container">
          <label className="dropdown-label">Duration in Bed</label>
          <Dropdown
            placeholder="Select a Duration"
            options={durationOptions}
            selectedOption={selectedBedOption}
            setSelectedOption={setSelectedBedOption}
          />
        </div>
        <div className="dropdown-container">
          <label className="dropdown-label">Duration Asleep</label>
          <Dropdown
            placeholder="Select a Duration"
            options={durationOptions}
            selectedOption={selectedAsleepOption}
            setSelectedOption={setSelectedAsleepOption}
          />
        </div>
      </div>
      <Button
        onClick={handleButtonClick}
        text="Calculate"
        disabled={handleDisable()}
      />
      <OutputText output={output} />
    </div>
  );
}

export default App;
