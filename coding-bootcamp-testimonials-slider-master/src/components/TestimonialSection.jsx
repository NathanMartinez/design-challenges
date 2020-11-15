export default function TestimonialSection({ data }) {
  return (
    <div className="testimonial-section">
      <blockquote>{data.quote}</blockquote>
      <div className="user-info">
        <h5>{data.name}</h5>
        <p>{data.jobTitle}</p>
      </div>
    </div>
  );
}
