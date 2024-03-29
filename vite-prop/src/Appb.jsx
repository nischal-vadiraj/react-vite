//Passing expressions as prop

const SpeedoMeter = ({isExceedingLimit}) => (
    <strong>
      {isExceedingLimit
        ? "Slow down!!! You're exceeding the speed limit"
        : "You're within the speed limit. Drive safely"}
    </strong>
  );
  
  const App = () => {
    const currentSpeed = 90;
    const maximumLimit = 45;
  
    const isExceedingLimit = currentSpeed > maximumLimit;
  
    return (
      <div>
        <p>Speed limit: {maximumLimit}</p>
        <p>Current speed: {currentSpeed}</p>
        <SpeedoMeter isExceedingLimit={isExceedingLimit} />
      </div>
    );
  };
  
  export default App;