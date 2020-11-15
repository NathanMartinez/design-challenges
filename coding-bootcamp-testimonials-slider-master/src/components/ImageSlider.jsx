export default function ImageSlider({ data, setJohn }) {
  return (
    <div className="image-slider">
      <div className="image-container">
        <img
          src={`./images/image-${data.imageName}.jpg`}
          alt="Profile-Picture"
        />
        <div className="slider-buttons">
          <div
            className="slider-button"
            onClick={() => setJohn((prev) => !prev)}
          >
            <img src="./images/icon-prev.svg" alt="profile-picture" />
          </div>
          <div
            className="slider-button"
            onClick={() => setJohn((prev) => !prev)}
          >
            <img src="./images/icon-next.svg" alt="profile-picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
