function Dashboard() {
  return (
    <section className="container py-5">
      <h2 className="fw-semibold">Your placement overview</h2>

      <p className="text-secondary mb-4">
        Keep track of your career progress in one place.
      </p>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5>Placement Drives</h5>
              <p className="display-5 fw-semibold">12</p>
              <p className="text-secondary">Explore opportunities.</p>
              <a href="/placements" className="btn btn-outline-primary">
                View drives
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5>My Applications</h5>
              <p className="display-5 fw-semibold">4</p>
              <p className="text-secondary">Track your applications.</p>
              <a href="/applications" className="btn btn-outline-primary">
                View applications
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5>AI Resume Analysis</h5>
              <p className="display-5 fw-semibold">AI</p>
              <p className="text-secondary">Discover skills to improve.</p>
              <a href="/resume" className="btn btn-outline-primary">
                Analyze resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
