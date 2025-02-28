import React from 'react';

export const RadioGroup = ({ value, onValueChange, children, className }) => {
    console.log("RadioGroup - onValueChange:", typeof onValueChange); // Debug log
    return (
      <div role="radiogroup" className={className}>
        {React.Children.map(children, (child) => {
          console.log("RadioGroup - child:", child); // Debug log for each child
          return React.cloneElement(child, {
            selected: child.props.value === value,
            onValueChange,
          });
        })}
      </div>
    );
  };
  

  export const RadioGroupItem = ({ id, value, selected, onValueChange }) => {
    console.log("RadioGroupItem - onValueChange:", typeof onValueChange); // Debug log
    return (
      <div className="flex items-center space-x-2">
        <input
          id={id}
          type="radio"
          value={value}
          checked={selected}
          onChange={() => onValueChange(value)} // This must be valid
          className="w-4 h-4 text-blue-600 bg-zinc-800 border-zinc-700 focus:ring-blue-500"
        />
        <label htmlFor={id} className="text-sm text-zinc-300 cursor-pointer">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </label>
      </div>
    );
  };
  
