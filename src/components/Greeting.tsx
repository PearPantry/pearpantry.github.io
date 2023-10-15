import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      setGreeting('Good morning :)');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon <3');
    } else {
      setGreeting('Good evening!');
    }
  }, []);

  return (
    <div className="Greeting">
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;