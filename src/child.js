function ChildComponent(props){
    const { name, age } = props;

    return <div>
        <p>I'm Child</p>
            <p>
                name : {name}, age : {age}
            </p>
        </div>
}

export default ChildComponent;