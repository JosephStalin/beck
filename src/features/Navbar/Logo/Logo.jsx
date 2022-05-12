import "./Logo.css";

const Logo = (props) => {
  const { getStories } = props;
  return (
    <div className='logo'>
      <button onClick={() => getStories()}>
      <span>K</span>news
      </button>
    </div>
  );
};

export default Logo;
