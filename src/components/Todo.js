import React from 'react';

export default function Todo({ text, completed }) {
  return (
    <div>
      {text}
      <input
        type="checkbox"
        value={completed}
      />
      <button>Delete me</button>
    </div>
  );
}
