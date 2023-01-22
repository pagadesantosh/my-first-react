const Shimmer = () => {
  return (
    <div className="row">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="col-lg-4 col-md-6 col-12">
            <div key={index} className="shimmer-card"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
