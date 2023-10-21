export default function FeatureItem({ image, alt, title, content }) {
    return (
      <div className='feature-item'>
        <img src={image} alt={alt} className='feature-icon' />
        <h3 className='feature-item_title'>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }