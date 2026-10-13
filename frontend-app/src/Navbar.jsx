import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container">
        <Link
          className="navbar-brand fw-semibold"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Placement Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            menuOpen ? 'show' : ''
          }`}
        >
          <div className="navbar-nav ms-auto gap-lg-3">
            <Link
              className="nav-link text-dark"
              to="/placements"
              onClick={() => setMenuOpen(false)}
            >
              Placements
            </Link>

            <Link
              className="nav-link text-dark"
              to="/applications"
              onClick={() => setMenuOpen(false)}
            >
              Applications
            </Link>

            <Link
              className="nav-link text-dark"
              to="/profile"
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
