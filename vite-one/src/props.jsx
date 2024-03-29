//props - initial value passed to a component ,  means of passing data from one component to another

function WelcomeMessage() {
    return <p>Welcome!</p>
  }

<WelcomeMessage /> //dosent have any props

<WelcomeMessage myprop={'some value'} /> // Props can be passed as attributes to the component

function WelcomeMessage(props) { //insdide the component receive the props as argument
    return <p>Welcome!</p>
  }

function WelcomeMessage({ myprop }) { //same using object destructuring
    return <p>Welcome!</p>
  }

function WelcomeMessage({ myprop }) { //use prop inside the component
    return <p>{myprop}</p>
  }


  //data flow - from a parent component to a child component

const Counter = ({ count, setCount }) => { //count-state setcount-prop
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <Counter setCount={setCount} count={count} />
    </div>
  )
}

export default App