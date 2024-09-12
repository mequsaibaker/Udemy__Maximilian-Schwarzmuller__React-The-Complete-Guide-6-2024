const Review = ({ feedback, name }) => {
  return (
    <div id="draft">
      <figure>
        <blockquote>
          <p>{feedback}</p>
        </blockquote>
        <figcaption>{name}</figcaption>
      </figure>
      <button>Save</button>
    </div>
  );
};

export default Review;
