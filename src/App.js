import SearchBar from './Components/SearchBar'
import GistList from './Components/GistList'

import React, { useState } from 'react';
const { Octokit } = require("@octokit/core");


function App() {

  const [octokit] = useState(new Octokit({ auth: `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` }));

  const [userName, setUserName] = useState("");
  const [gistList, setGistList] = useState([]);

  return (
    <div className='main-app'>
      <SearchBar userName={userName} setUserName={setUserName} setGistList={setGistList} octokit={octokit} />
      <div className='flex-container1'>
        <h3>Gists List for {userName}</h3>
        {gistList.length > 0 && <img src={gistList[0].owner.avatar_url} alt='avatar'></img>}
      </div>
      {gistList.length > 0 && <GistList gistList={gistList} octokit={octokit} />}
    </div>
  );
}

export default App;