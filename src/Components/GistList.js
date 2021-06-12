import Gist from './Gist'
import MyCodeBlock from './MyCodeBlock'
import React, { useState } from 'react';

function GistList({ gistList, octokit }) {

    const [codeSnippet, setCodeSnippet] = useState("");
    const [codeLang, setCodeLang] = useState("text");

    return (
        <div className='gist-list'>
            <div className='flex-container2'>
                <div>
                    <p>All Gists</p>
                    {gistList.map((gist) => {
                        return <div>
                            <Gist gist={gist} setSnippet={setCodeSnippet} setLang={setCodeLang} octokit={octokit} />
                        </div>
                    })}
                </div>
                <div><MyCodeBlock code={codeSnippet} language={codeLang} /></div>
            </div>
        </div>
    );
}

export default GistList;