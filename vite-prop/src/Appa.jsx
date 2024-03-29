// Passing numbers as prop

const RandomNumber = ({
    limit
  }) => {
    const randomNumber = Math.floor(Math.random() * limit);
  
    return <b>{randomNumber}</b>;
  };
  
  const LuckyNumber = () => (
    <div>
      <h1>Your Lucky number</h1>
      <RandomNumber limit={10} />
    </div>
  );
  
  export default LuckyNumber;