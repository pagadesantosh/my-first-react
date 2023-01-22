const Shimmer = () => {
  return (
    <div className="row">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12">
            <div className="shimmer-card"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
