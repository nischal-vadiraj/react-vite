//Returning HTML Elements and Components
function Header() {
    return (
      <div>
        <Logo />
        <h1>Codecademy</h1>
      </div>
    );
  }

//Accessing Props
function Hello(props) {
    return <h1>Hi there, {props.firstName}!</h1>;
  }
  
  ReactDOM.createRoot(document.getElementById('app')).render(<Hello firstName="Kim" />)

//defaultProps
function Profile(props) {
    return (
      <div>
        <img src={props.profilePictureSrc} alt="" />
        <h2>{props.name}</h2>
      </div>
    );
  }
  
  Profile.defaultProps = {
    profilePictureSrc: 'https://example.com/no-profile-picture.jpg',
  };
  
  function MyFriends(props) {
    return (
      <div>
        <h1>My friends</h1>
        <Profile
          name="Jane Doe"
          profilePictureSrc="https://example.com/jane-doe.jpg"
        />
        <Profile name="John Smith" />
      </div>
    );
  }

