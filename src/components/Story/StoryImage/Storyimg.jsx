import './Storyimg.css'
import src from '../../Images/recession.jpg'

function StoryImg() {
    return (
        <div
        className='storyimg'
        >
            <img src={src} alt='test'></img>
        </div>
    )
}

export default StoryImg;