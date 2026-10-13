function Profile() {
  return (
    <main className="container py-5">
      <h1 className="fw-semibold">My profile</h1>

      <p className="text-secondary mb-4">
        Manage your student details and career preferences.
      </p>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h4 className="mb-4">Student information</h4>

          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Degree and branch</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. B.Tech ECE"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Skills</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. AWS, Linux, Docker, Java"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Career interest</label>
            <select className="form-select" defaultValue="">
              <option value="" disabled>Select a career interest</option>
              <option>Cloud Engineering</option>
              <option>DevOps Engineering</option>
              <option>Site Reliability Engineering</option>
              <option>Software Engineering</option>
            </select>
          </div>

          <button className="btn btn-primary" disabled>
            Save profile — coming soon
          </button>
        </div>
      </div>
    </main>
  )
}

export default Profile
