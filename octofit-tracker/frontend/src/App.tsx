import { Link, Route, Routes } from 'react-router-dom';

const highlights = [
  'User authentication and profiles',
  'Activity logging and tracking',
  'Team creation and management',
  'Competitive leaderboard',
  'Personalized workout suggestions'
];

function Home() {
  return (
    <main className="app-shell">
      <section className="hero card border-0 shadow-lg">
        <div className="card-body p-4 p-md-5">
          <span className="badge text-bg-dark mb-3">OctoFit Tracker</span>
          <h1 className="display-5 fw-bold mb-3">Train smarter, track everything, compete with your team.</h1>
          <p className="lead text-secondary mb-4">
            A modern multi-tier fitness app built with React 19, Vite, Express, TypeScript, and MongoDB.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <Link className="btn btn-primary btn-lg" to="/dashboard">Open dashboard</Link>
            <Link className="btn btn-outline-secondary btn-lg" to="/about">See the stack</Link>
          </div>
        </div>
      </section>

      <section className="row g-4 mt-1">
        {highlights.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={item}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h2 className="h5 fw-semibold">{item}</h2>
                <p className="text-secondary mb-0">
                  Core capability planned for the OctoFit Tracker platform.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="app-shell">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h1 className="h3 fw-bold">Dashboard</h1>
          <p className="text-secondary mb-0">Frontend is wired for routing and Bootstrap styling.</p>
        </div>
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="app-shell">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <h1 className="h3 fw-bold">Stack</h1>
          <ul className="mb-0">
            <li>React 19 with Vite</li>
            <li>react-router-dom</li>
            <li>Bootstrap</li>
            <li>Express + TypeScript backend</li>
            <li>Mongoose for MongoDB access</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-background">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-md-4">
        <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
        <div className="navbar-nav ms-auto gap-2">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
