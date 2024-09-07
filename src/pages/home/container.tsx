import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../redux/actionTypes';

const ContainerUpdateComponent = () => {
  const dispatch = useDispatch();
  const containers = useSelector(state => state.containers);
  const [selectedId, setSelectedId] = useState('id1');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const currentValue = containers[selectedId];
      const newValue = Math.max(parseInt(inputValue) - currentValue, 0);
      dispatch({
        type: ActionTypes.UPDATE_CONTAINER,
        payload: { id: selectedId, inputValue: newValue }
      });
      setInputValue('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Контейнер жаңыртуу</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="container-id" className="block text-sm font-medium text-gray-700 mb-1">
            Контейнер ID
          </label>
          <select
            id="container-id"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {Object.keys(containers).map((id) => (
              <option key={id} value={id}>
                {id} (Учурдагы маани: {containers[id]})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="input-value" className="block text-sm font-medium text-gray-700 mb-1">
            Жаңы маани
          </label>
          <input
            type="number"
            id="input-value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Жаңы маанини киргизиңиз"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Жаңыртуу
        </button>
      </form>
    </div>
  );
};

export default ContainerUpdateComponent;