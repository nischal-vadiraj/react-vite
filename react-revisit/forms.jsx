//Controlled vs. Uncontrolled Form Fields

const uncontrolledInput = <input />;

const controlledInput = (
  <input value={stateValue} onChange={handleInputChange} />
);

//Controlled Components

const controlledInput = (
    <input value={stateValue} onChange={handleInputChange} />
  );