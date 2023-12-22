const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl my-10">
        Contact Us
        <div className="mt-10">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Write Your Message</span>
                    </label>
                    <textarea className="textarea textarea-secondary" placeholder="Write Your Message"></textarea>
                    
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Contact;
