//boolean props

const ToggleButton = ({
    isEnabled
}) => (
  <button disabled={!isEnabled}>
    {isEnabled ? "Enabled" : "Disabled"}
  </button>
);

const App = () => <ToggleButton isEnabled />;

export default App;