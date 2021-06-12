function ForkList(forkList) {

    return (
        <div className="fork-list">
            <div>Latest Forks by: </div>
            {Object.entries(forkList).map((fork) => {
                return <div>
                    <span>{fork[1][0]}</span>
                    <span>{fork[1][1]}</span>
                    <span>{fork[1][2]}</span>
                </div>;
            })}
        </div>
    );
}

export default ForkList;