import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function Rating({ value, text }) {
    const star = [];
    for(let i = 0; i <= 5 ; i++){
        if(value >= i){
            star.push(<FaStar key={i} />)
        } else if(value >= i - 0.5){
            star.push(<FaStarHalfAlt key={i} />)
        } else{
            star.push(<FaRegStar key={i} />)
        }
    }
  return (
    <div className="rating">
      
      <span>{star}</span>      
      <span className='rating-text'>{text}</span>
    </div>
  );
}

export default Rating;
