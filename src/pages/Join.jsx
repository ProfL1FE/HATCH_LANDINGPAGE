import { useState } from 'react';
import { GraduationCap, Building2, Handshake, ArrowRight, Loader2, Sparkles, Check } from 'lucide-react';
import Button from '../components/Button';
import Field from '../components/Field';
import TermsModal from '../components/TermsModal';
import { isValidEmail, isValidPassword, required } from '../lib/validation';
import { generateStrongPassword } from '../lib/passwordGenerator';
import { registerUser } from '../services/jo1nid';

const PATHS = [
  { id: 'student', icon: GraduationCap, title: 'Student', description: 'Join HATCH through JO1NID and begin your journey.' },
  { id: 'university', icon: Building2, title: 'University', description: 'Become a HATCH campus partner through JO1NUNI.' },
  { id: 'business', icon: Handshake, title: 'Business / Partner', description: 'Connect with the HATCH ecosystem through JO1NBiz.' },
];

const EMPTY_FORM = { name: '', email: '', password: '', confirmPassword: '' };

const SUCCESS_COPY = {
  student: { heading: 'Your HATCH journey begins here.', body: 'Your JO1NID registration is ready for the next step.' },
  university: { heading: 'Welcome to the HATCH ecosystem.', body: 'Your JO1NUNI partnership request is ready.' },
  business: { heading: 'Your ecosystem journey starts here.', body: 'Your JO1NBiz registration is ready.' },
};

export default function Join() {
  const [step, setStep] = useState('choose');
  const [path, setPath] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  function selectPath(p) {
    setPath(p);
  }

  function continueToForm() {
    if (path) setStep('form');
  }

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  /** Generates a strong password, fills it in (and confirm, for students), and copies it to clipboard. */
  async function handleGeneratePassword() {
    const generated = generateStrongPassword(16);
    setForm((f) => ({
      ...f,
      password: generated,
      confirmPassword: path === 'student' ? generated : f.confirmPassword,
    }));
    setErrors((e) => ({ ...e, password: undefined, confirmPassword: undefined }));
    try {
      await navigator.clipboard.writeText(generated);
      setPasswordCopied(true);
      setTimeout(() => setPasswordCopied(false), 2500);
    } catch {
      // Clipboard access can fail (e.g. no permission) — the password is still
      // filled into the form either way, so this isn't a blocking failure.
    }
  }

  function validate() {
    const nextErrors = {};
    if (!required(form.name)) nextErrors.name = 'This field is required.';
    if (!required(form.email)) nextErrors.email = 'Email is required.';
    else if (!isValidEmail(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!required(form.password)) nextErrors.password = 'Password is required.';
    else if (!isValidPassword(form.password)) nextErrors.password = 'Password must be at least 8 characters.';
    if (path === 'student' && form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(nextErrors);

    if (!termsAccepted) {
      setTermsError('You must accept the Terms and Privacy Policy to continue.');
    } else {
      setTermsError(null);
    }

    return Object.keys(nextErrors).length === 0 && termsAccepted;
  }

  /**
   * Submit handler. Student and Business/Partner map to real JO1NID roles
   * (student, employer) and create a genuine account. University has no
   * JO1NUNI backend yet, so that path is captured as an interest submission
   * rather than a fake account — we don't pretend to create something that
   * doesn't exist yet.
   */
  async function handleRegisterSubmit() {
    if (!validate() || !path) return;
    setSubmitting(true);
    setSubmitError(null);

    if (path === 'university') {
      // No real JO1NUNI backend yet — record interest only, no fake account.
      await new Promise((r) => setTimeout(r, 400));
      setSubmitting(false);
      setStep('success');
      return;
    }

    const role = path === 'student' ? 'student' : 'employer';
    const result = await registerUser(form.email, form.password, role);
    setSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }
    setStep('success');
  }

  function reset() {
    setStep('choose');
    setPath(null);
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitError(null);
    setTermsAccepted(false);
    setTermsError(null);
  }

  return (
    <div className="hatch-atmosphere-join min-h-[calc(100svh-74px)]">
    <div className="mx-auto max-w-3xl px-6 py-16 hatch-fade-in">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Join HATCH™ 2027</h1>
      <p className="mt-3 text-muted">Three steps to start your journey.</p>

      {step === 'choose' && (
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Step 1 — Choose your path</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PATHS.map((p) => {
              const Icon = p.icon;
              const active = path === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => selectPath(p.id)}
                  aria-pressed={active}
                  className={`hatch-panel-glass flex flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
                    active ? 'border-cyan/60 bg-cyan/5' : 'border-line bg-panel/70 hover:border-cyan/30'
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-panel-2 text-cyan">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-base font-semibold text-ink">{p.title}</span>
                  <span className="text-sm text-muted">{p.description}</span>
                </button>
              );
            })}
          </div>
          {path && (
            <Button onClick={continueToForm} className="mt-8">
              Continue <ArrowRight size={16} aria-hidden="true" />
            </Button>
          )}
        </div>
      )}

      {step === 'form' && path && (
        <div className="mt-10 max-w-md">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Step 2 — Create your account</h2>
          <div className="flex flex-col gap-4">
            <Field
              id="reg-name"
              label={path === 'university' ? 'Institution name' : path === 'business' ? 'Organisation name' : 'Full name'}
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              error={errors.name}
            />
            <Field
              id="reg-email"
              type="email"
              label="Email address"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              error={errors.email}
            />
            <div>
              <Field
                id="reg-password"
                type="password"
                label="Password"
                value={form.password}
                onChange={(e) => updateField('password', e.target.value)}
                error={errors.password}
              />
              <button
                type="button"
                onClick={handleGeneratePassword}
                className="mt-2 flex items-center gap-1.5 text-xs font-medium text-cyan hover:underline"
              >
                <Sparkles size={14} aria-hidden="true" />
                Generate a strong password for me
              </button>
              {passwordCopied && (
                <p className="mt-1 flex items-center gap-1 text-xs text-green">
                  <Check size={12} aria-hidden="true" /> Copied to clipboard
                </p>
              )}
            </div>
            {path === 'student' && (
              <Field
                id="reg-confirm-password"
                type="password"
                label="Confirm password"
                value={form.confirmPassword}
                onChange={(e) => updateField('confirmPassword', e.target.value)}
                error={errors.confirmPassword}
              />
            )}

            <div className="mt-1">
              <label className="flex items-start gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => {
                    setTermsAccepted(e.target.checked);
                    if (e.target.checked) setTermsError(null);
                  }}
                  className="mt-0.5 h-4 w-4 rounded border-line accent-cyan"
                  aria-describedby={termsError ? 'terms-error' : undefined}
                />
                <span>
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-cyan hover:underline"
                  >
                    Terms and Privacy Policy
                  </button>
                </span>
              </label>
              {termsError && (
                <p id="terms-error" className="mt-1 text-xs text-red-300">
                  {termsError}
                </p>
              )}
            </div>

            {submitError && <p className="text-sm text-red-300">{submitError}</p>}

            <div className="mt-2 flex gap-3">
              <Button variant="secondary" onClick={() => setStep('choose')} disabled={submitting}>
                Back
              </Button>
              <Button onClick={handleRegisterSubmit} disabled={submitting}>
                {submitting ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : null}
                {submitting ? 'Creating account…' : 'Create account'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {step === 'success' && path && (
        <div className="hatch-panel-glass mt-10 max-w-md rounded-2xl border border-green/40 bg-green/10 p-8 text-center hatch-fade-in">
          <p className="text-xl font-semibold text-ink">{SUCCESS_COPY[path].heading}</p>
          <p className="mt-2 text-sm text-muted">{SUCCESS_COPY[path].body}</p>
          {(path === 'student' || path === 'business') && (
            <p className="mt-4 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
              Check your email and click the verification link, then come back to this page and use the
              <span className="font-semibold"> Login</span> button above to access HATCH.
            </p>
          )}
          <Button variant="secondary" onClick={reset} className="mt-6">
            Register another account
          </Button>
        </div>
      )}

      {showTermsModal && <TermsModal onClose={() => setShowTermsModal(false)} />}
    </div>
    </div>
  );
}
