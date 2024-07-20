import React from 'react';
import DropdownOption from './DropdownOption';

const DropdownList = ({ options, onSelect, renderOption, searchTerm }) => (
  <div className={`custom-dropdown__list ${searchTerm ? 'custom-dropdown__list-selected' : ''}`}>
    <div className="custom-dropdown__list-search">
      <input
        type="text"
        value={searchTerm}
        className='custom-dropdown__list-search-line'
        onChange={onSelect}
        placeholder="Пошук..."
      />
    </div>
    <div className="custom-dropdown__options">
      {options.length > 0 ? (
        options.map((option, index) => (
          <DropdownOption
            key={index}
            option={option}
            onClick={onSelect}
            renderOption={renderOption}
          />
        ))
      ) : (
        <div className="custom-dropdown__option">
          Нічого не знайдено
        </div>
      )}
    </div>
  </div>
);

export default DropdownList;
