import { useState } from "react";

const photos = [
  {
    src: "/people/employee-group-01.jpg",
    label: "S3M MPC employee group photo 1",
  },
  {
    src: "/people/employee-group-02.jpg",
    label: "S3M MPC employee group photo 2",
  },
  {
    src: "/people/employee-group-03.jpg",
    label: "S3M MPC employee group photo 3",
  },
  {
    src: "/people/employee-group-04.jpg",
    label: "S3M MPC employee group photo 4",
  },
];

function PeopleSlide({ photo, index }) {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <div className="people-slide">
      <div className="people-slide-placeholder">
        <span className="placeholder-label">
          EMPLOYEE PHOTO {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      {!imageMissing && (
        <img
          src={photo.src}
          alt={photo.label}
          onError={() => setImageMissing(true)}
        />
      )}
      <span className="people-slide-caption">{photo.label}</span>
    </div>
  );
}

function PeopleCarousel() {
  const [activePhoto, setActivePhoto] = useState(0);

  function move(direction) {
    setActivePhoto(
      (current) => (current + direction + photos.length) % photos.length,
    );
  }

  return (
    <div
      className="people-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="S3M MPC employee photos"
    >
      <div className="people-carousel-viewport">
        <div
          className="people-carousel-track"
          style={{ transform: `translateX(-${activePhoto * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <PeopleSlide photo={photo} index={index} key={photo.src} />
          ))}
        </div>
        <button
          className="people-carousel-arrow previous"
          type="button"
          onClick={() => move(-1)}
          aria-label="Show previous employee photo"
        >
          ←
        </button>
        <button
          className="people-carousel-arrow next"
          type="button"
          onClick={() => move(1)}
          aria-label="Show next employee photo"
        >
          →
        </button>
      </div>
      <div className="people-carousel-footer">
        <span>
          {String(activePhoto + 1).padStart(2, "0")} <i>/</i>{" "}
          {String(photos.length).padStart(2, "0")}
        </span>
        <div
          className="people-carousel-dots"
          aria-label="Select employee photo"
        >
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={activePhoto === index ? "active" : ""}
              onClick={() => setActivePhoto(index)}
              aria-label={`Show employee photo ${index + 1}`}
              aria-current={activePhoto === index ? "true" : undefined}
            ></button>
          ))}
        </div>
        <span>Use arrows to browse</span>
      </div>
    </div>
  );
}

export default PeopleCarousel;
