import { useState, useEffect } from "react";
import ForkList from "./ForkList";

function Gist({ gist, setSnippet, setLang, octokit }) {

    const [forkList, setForkList] = useState([]);

    useEffect(() => {

        let innerForkList = []

        octokit.request('GET /gists/{gist_id}/forks', {
            gist_id: gist.id
        })
            .then(res => {
                let reversedList = res.data.reverse();
                var i;
                for (i = 0; i < reversedList.length; i++) {
                    if (i === 3) { break; }
                    innerForkList.push(reversedList[i].owner.login);
                }
                setForkList(innerForkList);
            })
            .catch(err => {
                // console.error(err);
            })
    }, [gist.id]);

    function onGistClick(file) {
        setLang(file.language.toLowerCase());
        fetch(file.raw_url)
            .then(response => { return response.text() })
            .then(data => setSnippet(data));
    }

    return (
        <div className="gist">
            <div className="gist-meta">Last Updated: {gist.updated_at.split('T')[0]}</div>
            {Object.entries(gist.files).map((file) => {
                return <div>
                    <button className="gist-file" onClick={() => { onGistClick(file[1]) }}>{file[1].filename}</button>
                    <button className="gist-lang">{file[1].language}</button>
                </div>
            })}
            <ForkList forkList={forkList} />
        </div >
    );
}

export default Gist;