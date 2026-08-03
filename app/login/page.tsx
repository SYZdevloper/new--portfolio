import { login } from './actions'
import './login.css'

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Admin Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="admin@hyperlink.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required />
          </div>
          <button formAction={login} className="btn primary full">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
