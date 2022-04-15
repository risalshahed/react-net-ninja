import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  // pass a inital value empty string ''
  // 2ta value pabo, 1. data (title); 2. A function (setTitle) to change that value
  const [title, setTitle] = useState('');
  // tar mane hosse, amdr title is empty string, ekhn user jeitai type krbe, seitai setTitle er maddhome update hoye save hbe
  const handleSubmit = (e) => {
    e.preventDefault();
    // update the data into the browser
    addSong(title);
    // clear the input field after adding data
    setTitle('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>
          <label htmlFor="">Song Name</label>
        </h4>
        <p>
          {/* user ki type/change kre seita amra track krbo with a function here */}
          {/* vitorer jei feunction, (e) => {.......} a, amra ja type krbo ta "sort of local state" a STORE hbe; ei "localState" use krte amra "useState" HOOK use krbo */}
          <input type="text" value={title} required onChange={ (e) => { setTitle(e.target.value) } } />
        </p>
        <p>
          <input type="submit" value="add song" />
        </p>
      </form>
    </>
  );
}
 
export default NewSongForm;