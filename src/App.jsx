import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood.length === 0 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood.includes(good)
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={
                    selectedGood.includes(good) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className="button is-info"
                  onClick={() => {
                    // I've no idea why this is an issue, but yea.
                    // eslint-disable-next-line no-unused-expressions
                    selectedGood ? setSelectedGood('') : setSelectedGood(good);
                  }}
                >
                  {selectedGood.includes(good) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
