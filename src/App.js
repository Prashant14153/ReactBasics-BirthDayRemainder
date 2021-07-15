import React, { useState } from 'react';
import './index.css';
import { Button } from 'react-bootstrap';
import data from './Data';

export default function App() {
  const [items, setItems] = useState(data);

  return (
    <>
      <h4>Today's Birthday</h4>
      <Button onClick={() => setItems([])}>Clear All :)</Button>

      {items.map(item => {
        const { id, name, age, image } = item;
        return (
          <>
            <article key={id}>
              <h4>{name}</h4>
              <h4>{age}</h4>
              <img src={image} name={image} />
            </article>
          </>
        );
      })}
    </>
  );
}
