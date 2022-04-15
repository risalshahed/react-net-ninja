import React, { useState, useEffect } from 'react';
// unique id generator, which creates new unique IDs (npm install uuid)
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  // class component a state {.....} ja kre, functional component a ta useState HOOK kre
  // useState function returns an array and inside that array that it returns to us there's two values, first (songs) is actual data (vitorer title & id gula), second (setSongs) is a function which edit the data in "useState HOOK"
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ]);
  // let's edit the data (songs)
  const addSong = (title) => {
    setSongs([
      ...songs,
      // {title: title, id: uuid()},
      // property r value same hoile, ES6 shorthand as "title: title -> title"
      {title, id: uuid()},
    ])
  }
  // useEffect( er vitore ()->callback function is a parameter )
  // ei callback will run every time the component renders or re-renders i.e. the data in our component changes, it'll run in initial render as well!
  // to solve this, we add a second parameter [songs]
  // means, songs tokhn e callback function run hbe, jokhn songs array er data change hbe, otherwise useEffect( er vitore ()->callback function RUN hbe NAA
  useEffect( () => {
    console.log('useEffect ran', songs);
  }, [songs]);

  // useState is a HOOK
  // useState function (Line 8) ekta array return kre, jar vitore 2ta jinish thake
  // 1. actual value of the state; 2. a function to change that value
  const [age, setAge] = useState(20);
  useEffect( () => {
    console.log('useEffect ran', age);
  }, [age]);
  return (
    <>
      <div className="song-list">
        <ul>
          {songs.map(song => {
            return(
              <li key={song.id}>{song.title}</li>
            );
          })}
        </ul>
        <NewSongForm addSong={addSong} />
        <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
      </div>
    </>
  );
}

export default SongList;