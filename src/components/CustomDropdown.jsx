import React from 'react';
import useDropdown from '../hooks/useDropdown';
import ArrowIcon from '../icons/ArrowIcon';
import '../styles/globals.scss';


const CustomDropdown = ({ options, renderOption, renderSelected, onSearch }) => {
  const {
    isOpen,
    searchTerm,
    filteredOptions,
    selectedOption,
    dropdownRef,
    handleSelect,
    handleSearch,
    handleToggle,
    handleMouseEnter,
    handleMouseLeave,
  } = useDropdown(options, onSearch);

  return (
    <div
      className={`custom-dropdown ${isOpen ? 'custom-dropdown__selected' : ''}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="custom-dropdown__selected-content"
        onClick={handleToggle}
        tabIndex={0}
      >
        {selectedOption ? (
          renderSelected ? renderSelected(selectedOption) : selectedOption
        ) : (
          <div className="flex">
            <div className='custom-dropdown__placeholder'>Оберіть ваше місто</div>
            <ArrowIcon />
          </div>
        )}
      </div>
      {
        isOpen && (
          <div className={`custom-dropdown__list ${isOpen ? 'custom-dropdown__list-selected' : ''}`}>
            <div className="custom-dropdown__list-search">
              <input
                type="text"
                value={searchTerm}
                className='custom-dropdown__list-search-line'
                onChange={handleSearch}
                placeholder="Пошук..."
              />
            </div>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className="custom-dropdown__option"
                  onClick={() => handleSelect(option)}
                >
                  {renderOption ? renderOption(option) : option}
                </div>
              ))
            ) : (
              <div className="custom-dropdown__option">
                Нічого не знайдено
              </div>
            )}
          </div>
        )
      }
    </div >
  );
};

export default CustomDropdown;
