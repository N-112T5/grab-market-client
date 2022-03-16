import React from "react";

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log('Component Update..');

    React.useEffect(() => {
        setTime(time+1);
    },[])
    return (
        <div>
            <h1>{time}sec</h1>
            <button>Click to 1 UP</button>
        </div>
    )
}

export default TimerComponent;