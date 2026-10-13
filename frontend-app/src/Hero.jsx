function Hero() {
  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <p className="text-primary fw-semibold">
            YOUR CAREER, YOUR FUTURE
          </p>

          <h1 className="display-3 fw-semibold mb-4">
            Discover your next opportunity.
          </h1>
	 <p> <b>jai praveen baba</b></p>
          <p className="lead text-secondary mb-4">
            Explore placement drives, track your applications,
            and prepare for your dream role with AI-powered insights.
          </p>

          <a href="/placements" className="btn btn-primary btn-lg me-3">
            Explore placements
          </a>

          <a href="/profile" className="btn btn-outline-dark btn-lg">
            View profile
          </a>
        </div>

        <div className="col-lg-5 mt-5 mt-lg-0">
          <div className="bg-light rounded-4 p-5">
            <h3 className="fw-semibold">Your career dashboard</h3>
            <p className="text-secondary">
              One place for placements, applications, and AI insights.
            </p>
            <div className="border-top pt-3 mt-4">
              <span className="text-secondary">Next step</span>
              <h5 className="mt-2">Complete your student profile</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
