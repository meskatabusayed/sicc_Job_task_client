const ExtraSection = () => {
  return (
    <div className="mb-16">
      <h1 className="text-center font-extrabold text-5xl my-10">
        Who Use This Site
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 px-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Developers</h2>
            <p>This site is developers for  task management</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Let’s Explore</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Corporate professionals</h2>
            <p>This site is corporate professionals for  task management</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Let’s Explore</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Bankers</h2>
            <p>This site is bankers for  task management</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Let’s Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
