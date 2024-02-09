const Shimmer = () => {
  return (
    <div>
      <div className="categories-shimmer">
        <ul>
          {[...Array(5)].map((el, index) => (
            <li key={index} className="shimmer-category"></li>
          ))}
        </ul>
      </div>
      <div className="shimmer-container">
        {[...Array(10)].map((arr, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
