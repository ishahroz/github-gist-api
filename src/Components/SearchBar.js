function SearchBar({ userName, setUserName, setGistList, octokit }) {
    function onTextChange(e) {
        setUserName(e.target.value);
        getGistList();
    }

    async function getGistList() {
        await octokit.request('GET /users/{username}/gists', {
            username: userName
        })
            .then(res => {
                setGistList(res.data);
            })
            .catch(err => {
                // console.error(err);
            })
    }

    return (
        <div>
            <h3>Search Username</h3>
            <input onChange={(e) => (onTextChange(e))}></input>
        </div>
    );
}

export default SearchBar;