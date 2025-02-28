import React from 'react';

const Checkbox = ({ id, checked, onChange, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
