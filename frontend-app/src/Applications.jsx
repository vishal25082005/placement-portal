function Applications() {
  return (
    <main className="container py-5">
      <h1 className="fw-semibold">My applications</h1>

      <p className="text-secondary mb-4">
        Track the progress of your job applications.
      </p>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Example Company</td>
                <td>Cloud Engineer Intern</td>
                <td>
                  <span className="badge text-bg-primary">
                    Under Review
                  </span>
                </td>
              </tr>

              <tr>
                <td>Sample Technologies</td>
                <td>DevOps Intern</td>
                <td>
                  <span className="badge text-bg-secondary">
                    Applied
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Applications
