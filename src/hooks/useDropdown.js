import { useState, useRef, useEffect } from "react";

const useDropdown = (options, onSearch) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchFilteredOptions = async () => {
      if (onSearch) {
        const results = await onSearch(searchTerm);
        setFilteredOptions(results);
      } else {
        setFilteredOptions(
          options.filter((option) =>
            option.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    };
    fetchFilteredOptions();
  }, [searchTerm, options, onSearch]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsOpen(false);
  };

  return {
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
  };
};

export default useDropdown;
