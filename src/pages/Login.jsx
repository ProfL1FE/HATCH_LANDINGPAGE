import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Loader2, Fingerprint, GraduationCap, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Field from '../components/Field';
import { isValidEmail, required } from '../lib/validation';
import { loginUser } from '../services/jo1nid';
import { saveSession } from '../lib/auth';

const ROUTES = [
  { id: 'JO1NID', icon: Fingerprint, description: 'Your digital identity for the HATCH journey.', accent: '#6ee7ff' },
  { id: 'JO1NUNI', icon: GraduationCap, description: 'Campus access for HATCH partner institutions.', accent: '#a78bfa' },
  { id: 'JO1NBiz', icon: Briefcase, description: 'Business and ecosystem partner access.', accent: '#ffd166' },
];

export default function Login({ pendingResource, onSignedIn }) {
  const [route, setRoute] = useState('JO1NID');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  function validate() {
    const next = {};
    if (!required(email)) next.email = 'Email is required.';
    else if (!isValidEmail(email)) next.email = 'Enter a valid email address.';
    if (!required(password)) next.password = 'Password is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function signIn() {
    setError(null);
    if (!validate()) return;

    if (route !== 'JO1NID') {
      setError(`${route} sign in happens inside that app directly. Use JO1NID here for HATCH access.`);
      return;
    }

    setStatus('loading');
    const result = await loginUser(email, password);

    if (!result.ok || !result.data) {
      setStatus('idle');
      setError(result.message);
      return;
    }

    saveSession(
      {
        token: result.data.accessToken,
        refreshToken: result.data.refreshToken,
        role: result.data.role,
        email,
      },
      rememberMe,
    );
    setStatus('success');
    onSignedIn();
  }

  const activeRoute = ROUTES.find((r) => r.id === route);

  return (
    <div className="hatch-atmosphere-signin relative min-h-[calc(100svh-74px)]">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16 lg:py-20">
        {/* Left — page identity */}
        <div className="hatch-fade-in max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/80">HATCH™ 2027 / ACCESS</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Continue where you left off.</h1>
          <p className="mt-3 text-base leading-7 text-muted">Sign in to access your HATCH journey.</p>
          <p className="mt-10 text-[10px] font-semibold uppercase leading-6 tracking-[0.25em] text-muted/50">
            One ecosystem.
            <br />
            One journey.
          </p>
        </div>

        {/* Right — sign-in panel */}
        <div className="hatch-fade-in mx-auto w-full max-w-md lg:mx-0">
          <div className="rounded-xl border border-line bg-panel/70 p-6">
            {pendingResource && (
              <div className="mb-6 border-l-2 border-gold/60 pl-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold/80">RESOURCE ACCESS</p>
                <p className="mt-1 text-sm text-muted">
                  Sign in to continue to <span className="font-medium text-ink">{pendingResource}</span>.
                </p>
              </div>
            )}

            {/* Route selector — precise segmented navigation, JO1NID as the primary route */}
            <div role="tablist" aria-label="Access route" className="flex border-b border-line">
              {ROUTES.map((r) => {
                const Icon = r.icon;
                const active = route === r.id;
                return (
                  <button
                    key={r.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setRoute(r.id)}
                    className={`relative -mb-px flex flex-1 items-center justify-center gap-1.5 border-b-2 px-2 pb-2.5 pt-1 text-xs font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                      active ? 'border-gold text-gold' : 'border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    <Icon size={14} aria-hidden="true" />
                    {r.id}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-muted">{activeRoute?.description}</p>
            {route !== 'JO1NID' && (
              <p className="mt-2 text-xs text-muted/70">
                {route} has its own sign-in — you’re not signing into the wrong system.
              </p>
            )}

            <div className="mt-6 flex flex-col gap-4">
              <Field
                id="signin-email"
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <div className="relative">
                <Field
                  id="signin-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password}
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-[38px] text-muted transition-colors hover:text-gold"
                >
                  {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                </button>
              </div>

              <div className="flex items-center text-sm">
                <label className="flex items-center gap-2 text-muted">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-line accent-gold"
                  />
                  Remember me
                </label>
              </div>

              {error && <p className="text-sm text-red-300">{error}</p>}

              {status === 'success' ? (
                <div className="hatch-fade-in flex items-center gap-3 border-l-2 border-gold pl-4 py-2">
                  <CheckCircle2 size={17} aria-hidden="true" className="shrink-0 text-gold" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">ACCESS CONFIRMED</p>
                    <p className="mt-1 text-sm text-muted">Preparing your HATCH workspace.</p>
                  </div>
                </div>
              ) : (
                <Button variant="gold" onClick={signIn} disabled={status === 'loading'} className="w-full">
                  {status === 'loading' ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : null}
                  {status === 'loading' ? 'Authenticating…' : 'Continue to HATCH'}
                </Button>
              )}

              <div className="border-t border-line pt-5 text-center text-sm">
                <span className="text-muted">New to HATCH? </span>
                <Link
                  to="/join"
                  className="inline-flex items-center gap-1 font-medium text-gold/90 transition-opacity hover:opacity-70"
                >
                  Begin your journey <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
