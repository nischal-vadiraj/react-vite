//Stateful and Stateless Components
function Store() {
    const [sell, setSell] = useState("anything");
  
    
    return <h1>I'm selling {sell}.</h1>;
    
  }
  
  function Week(props){
    
    return <h1>Today is {props.day}!</h1>;
    
  }

//react programming way

// This is a stateless child component.
function BabyYoda(props) {
    return <h2>I am {props.name}!</h2>;
  }
  
  // This is a stateful Parent element.
  function Yoda() {
    const [ name, setName ] = useState("Toyoda")
  
    // The child component will render information passed down from the parent component.
    return <BabyYoda name={name} />;
    
  }

//Changing Props and State
function Clock(props) {
    const [ date, setDate ] = useState(new Date());
  
    const updateTime = () => {
      setDate(new Date());
    }
    
    return (
      <div>
        <h1>It is currently {date.toLocaleTimeString()}</h1>
        <h2>{props.subtitle}</h2>
        <button onClick={updateTime}>Update the clock</button>
      </div>
    );
  }


//Event Handlers 
function MyComponent() {
    const [ text, setText ] = useState("");
  
    const handleChange(event) => {
      setText(event.target.value);
    }
    
    return (
      <div>
        <input onChange={handleChange} value={text} />
        <p>You typed {text}</p>
      </div>
    );
  }

