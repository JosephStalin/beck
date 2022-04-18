import "./StoryImage.css";

const StoryImage = (props) => {
  const { src } = props;

  return (
    <div className='storyimg'>
      <img src={src} alt='test'></img>
    </div>
  );
};

export default StoryImage;
