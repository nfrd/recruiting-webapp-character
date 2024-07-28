import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';

import {
  initialAttributes,
  incrementAttribute,
  decrementAttribute,
} from './attributes';

function App() {
  const [attributes, setAttributes] = useState(initialAttributes);
  const [classRequirements, setClassRequirements] = useState();

  const meetsMinimum = (char) => {
    const classStats = CLASS_LIST[char];
    let meetsMin = true;

    for (const [key, val] of Object.entries(attributes)) {
      if (classStats[key] > val) {
        meetsMin = false;
        break;
      }
    }
    return meetsMin;
  };

  const openRequirements = (el) => {
    setClassRequirements(CLASS_LIST[el]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Build Your Character</h1>
      </header>
      <section className="App-section">

        <div>
          <h2>Profile Stats</h2>
          {ATTRIBUTE_LIST.map((el, ind) => (
            <div key={ind}>
              <span>{el}: {attributes[el]} </span>
              <button onClick={() => incrementAttribute(attributes, setAttributes, el)}>+</button>
              <button onClick={() => decrementAttribute(attributes, setAttributes, el)}>-</button>
              <div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2>Classes</h2>
          {Object.keys(CLASS_LIST).map((el, ind) => (
            <div key={ind}>
              <button onClick={() => openRequirements(el)} className={meetsMinimum(el) ? 'meet-requirements' : ''}>
                {el}
              </button>
            </div>
          ))}
        </div>
        <div>
          {classRequirements && Object.entries(classRequirements).map(([key, val]) => (
            <p key={key}>{key}: {val}</p>
          ))}
          {classRequirements && <button onClick={() => setClassRequirements(null)}>close stats</button>}
        </div>

      </section>
    </div>
  );
}

export default App;
