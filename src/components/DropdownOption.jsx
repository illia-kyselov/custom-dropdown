import React from 'react';

const DropdownOption = ({ option, onClick, renderOption }) => (
  <div
    className="custom-dropdown__option"
    onClick={() => onClick(option)}
  >
    {renderOption ? renderOption(option) : option}
  </div>
);

export default DropdownOption;
