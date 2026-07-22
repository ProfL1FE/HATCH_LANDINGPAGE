import { useState } from 'react';
import { GraduationCap, Building2, Handshake, ArrowRight, Loader2, Sparkles, Check, Plus, X } from 'lucide-react';
import Button from '../components/Button';
import Field from '../components/Field';
import TermsModal from '../components/TermsModal';
import { isValidEmail, isValidPassword, required } from '../lib/validation';
import { generateStrongPassword } from '../lib/passwordGenerator';
import { registerUser } from '../services/jo1nid';
import { createTeamRegistration, submitPartnerRequest } from '../services/supabase';

const PATHS = [
  { id: 'student', icon: GraduationCap, title: 'Student', description: 'Join HATCH through JO1NID and begin your journey.' },
  { id: 'university', icon: Building2, title: 'University', description: 'Become a HATCH campus partner through JO1NUNI.' },
  { id: 'business', icon: Handshake, title: 'Business / Partner', description: 'Connect with the HATCH ecosystem through JO1NBiz.' },
];

// Matches Hatchbac's package model exactly — the live `teams` table has a
// NOT NULL check constraint on `package` restricted to these three values.
const PACKAGES = [
  { id: 'explorer', label: 'Explorer Pass', teamSize: 'Individual', min: 1, max: 1 },
  { id: 'challenger', label: 'Challenger Pass', teamSize: 'Team of 2', min: 2, max: 2 },
  { id: 'challenger_plus', label: 'Challenger Plus', teamSize: 'Team of 3 to 5', min: 3, max: 5 },
];

const EMPTY_FORM = { name: '', email: '', password: '', confirmPassword: '', school: '' };
const EMPTY_MEMBER = { name: '', email: '', phone: '', school: '' };

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

  // Team registration state — Student path only.
  const [pkg, setPkg] = useState('explorer');
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState([]);
  const [teamError, setTeamError] = useState(null);

  const selectedPackage = PACKAGES.find((p) => p.id === pkg);
  const requiresTeam = selectedPackage.max > 1;

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

  function handlePackageChange(newPkg) {
    setPkg(newPkg);
    const info = PACKAGES.find((p) => p.id === newPkg);
    const neededMembers = Math.max(0, info.min - 1); // minus the representative themself
    setMembers(Array.from({ length: neededMembers }, () => ({ ...EMPTY_MEMBER })));
    setTeamError(null);
  }

  function addMember() {
    if (members.length + 1 >= selectedPackage.max) return; // +1 for the representative
    setMembers((m) => [...m, { ...EMPTY_MEMBER }]);
  }

  function removeMember(index) {
    if (members.length + 1 <= selectedPackage.min) return;
    setMembers((m) => m.filter((_, i) => i !== index));
    setErrors((e) => {
      const next = { ...e };
      delete next[`tm-${index}-name`];
      delete next[`tm-${index}-email`];
      return next;
    });
  }

  function updateMember(index, key, value) {
    setMembers((m) => m.map((mem, i) => (i === index ? { ...mem, [key]: value } : mem)));
    if (key === 'name' || key === 'email') {
      setErrors((e) => ({ ...e, [`tm-${index}-${key}`]: undefined }));
    }
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
    if (path === 'student' && !required(form.school)) {
      nextErrors.school = 'Enter your school or institution.';
    }
    setErrors(nextErrors);

    if (!termsAccepted) {
      setTermsError('You must accept the Terms and Privacy Policy to continue.');
    } else {
      setTermsError(null);
    }

    let teamOk = true;
    if (path === 'student' && requiresTeam) {
      if (!required(teamName)) {
        setTeamError('Team name is required for this package.');
        teamOk = false;
      } else if (members.length + 1 < selectedPackage.min) {
        setTeamError(`${selectedPackage.label} needs at least ${selectedPackage.min} people including you.`);
        teamOk = false;
      } else if (members.some((m) => !required(m.name) || !required(m.email) || !isValidEmail(m.email))) {
        setTeamError('Each teammate needs a name and a valid email.');
        teamOk = false;
      } else {
        setTeamError(null);
      }
    }

    return Object.keys(nextErrors).length === 0 && termsAccepted && teamOk;
  }

  /**
   * Submit handler. Student and Business/Partner map to real JO1NID roles
   * (student, employer) and create a genuine account. University has no
   * JO1NUNI backend yet, so that path is captured as a partner request
   * instead — we don't pretend to create something that doesn't exist yet.
   */
  async function handleRegisterSubmit() {
    if (!validate() || !path) return;
    setSubmitting(true);
    setSubmitError(null);

    if (path === 'university') {
      const result = await submitPartnerRequest('university', form.name, form.name, form.email, '');
      setSubmitting(false);
      if (!result.ok) {
        setSubmitError(result.message);
        return;
      }
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

    // Business/Partner also gets logged as a partner request for the team to follow up on,
    // in addition to their real JO1NID account.
    if (path === 'business') {
      await submitPartnerRequest('business', form.name, form.name, form.email, '');
    }

    // Student with a team package: save the team + members now, using the
    // newly created identity as the representative.
    if (path === 'student' && requiresTeam) {
      const identityId = result.data?.identityId || form.email; // fall back to email if the field name differs
      const teamResult = await createTeamRegistration(
        teamName,
        pkg,
        identityId,
        form.email,
        members.map((m) => ({ name: m.name, email: m.email, phone: m.phone, school: m.school })),
      );
      if (!teamResult.ok) {
        setSubmitError(`Account created, but saving your team failed: ${teamResult.message}`);
        return;
      }
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
    setPkg('explorer');
    setTeamName('');
    setMembers([]);
    setTeamError(null);
  }

  return (
    <div className="hatch-atmosphere-join min-h-[calc(100svh-74px)]">
    <div className="hatch-on-gradient mx-auto max-w-3xl px-6 py-16 hatch-fade-in">
      <h1 className="text-4xl font-bold tracking-tight text-ink">Join HATCH™ 2027</h1>
      <p className="mt-3 text-ink">Three steps to start your journey.</p>

      {step === 'choose' && (
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">Step 1 — Choose your path</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PATHS.map((p, i) => {
              const Icon = p.icon;
              const active = path === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => selectPath(p.id)}
                  aria-pressed={active}
                  style={{ animationDelay: `${i * 0.9}s` }}
                  className={`hatch-panel-glass anim-float flex flex-col items-start gap-3 rounded-2xl border p-5 text-left shadow-[0_25px_60px_rgba(6,16,28,0.4)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan ${
                    active ? 'border-cyan/60 bg-panel-2/95' : 'border-line bg-panel/95 hover:border-cyan/30'
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
        <div
          className={`hatch-panel-glass anim-float mt-10 rounded-xl border border-line bg-panel/95 p-6 shadow-[0_30px_70px_rgba(6,16,28,0.45)] ${
            path === 'student' ? 'max-w-lg' : 'max-w-md'
          }`}
        >
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">Step 2 — Create your account</h2>
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
            {path === 'student' && (
              <Field
                id="reg-school"
                label="School / institution"
                placeholder="e.g. Universiti Malaya"
                value={form.school}
                onChange={(e) => updateField('school', e.target.value)}
                error={errors.school}
              />
            )}
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

            {path === 'student' && (
              <div className="rounded-lg border border-line bg-panel-2/50 p-4">
                <p className="text-sm font-medium text-ink">Registration package</p>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {PACKAGES.map((p) => (
                    <label
                      key={p.id}
                      className={`flex cursor-pointer items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors ${
                        pkg === p.id ? 'border-cyan/60 bg-cyan/10' : 'border-line'
                      }`}
                    >
                      <span>
                        <span className="font-medium text-ink">{p.label}</span>{' '}
                        <span className="text-muted">— {p.teamSize}</span>
                      </span>
                      <input
                        type="radio"
                        name="package"
                        checked={pkg === p.id}
                        onChange={() => handlePackageChange(p.id)}
                        className="accent-cyan"
                      />
                    </label>
                  ))}
                </div>

                {requiresTeam && (
                  <div className="mt-4 flex flex-col gap-3">
                    <Field id="team-name" label="Team name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />

                    <p className="text-xs text-muted">
                      Add your teammates ({selectedPackage.min - 1} to {selectedPackage.max - 1} more, plus you as the
                      representative). Teammates don't need their own JO1NID yet.
                    </p>

                    {members.map((m, i) => (
                      <div key={i} className="rounded-md border border-line bg-panel-2/60 p-3">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-wide text-cyan">Teammate {i + 1}</p>
                          {members.length + 1 > selectedPackage.min && (
                            <button
                              type="button"
                              onClick={() => removeMember(i)}
                              aria-label={`Remove teammate ${i + 1}`}
                              className="text-muted transition-colors hover:text-red-300"
                            >
                              <X size={14} aria-hidden="true" />
                            </button>
                          )}
                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <Field
                            id={`tm-name-${i}`}
                            label="Full name"
                            value={m.name}
                            onChange={(e) => updateMember(i, 'name', e.target.value)}
                            error={errors[`tm-${i}-name`]}
                          />
                          <Field
                            id={`tm-email-${i}`}
                            type="email"
                            label="Email address"
                            value={m.email}
                            onChange={(e) => updateMember(i, 'email', e.target.value)}
                            error={errors[`tm-${i}-email`]}
                          />
                          <Field
                            id={`tm-phone-${i}`}
                            type="tel"
                            label="Phone (optional)"
                            value={m.phone}
                            onChange={(e) => updateMember(i, 'phone', e.target.value)}
                          />
                          <Field
                            id={`tm-school-${i}`}
                            label="School / institution"
                            value={m.school}
                            onChange={(e) => updateMember(i, 'school', e.target.value)}
                          />
                        </div>
                      </div>
                    ))}

                    {members.length + 1 < selectedPackage.max && (
                      <button
                        type="button"
                        onClick={addMember}
                        className="flex items-center justify-center gap-1.5 rounded-md border border-dashed border-line py-2 text-sm text-cyan hover:border-cyan/50"
                      >
                        <Plus size={14} aria-hidden="true" /> Add another teammate
                      </button>
                    )}

                    {teamError && <p className="text-xs text-red-300">{teamError}</p>}
                  </div>
                )}
              </div>
            )}

            <div className="mt-1">
              <label className="flex items-start gap-2 text-sm text-ink/90">
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
            <p className="mt-4 rounded-xl border border-gold/40 bg-panel-2/85 px-4 py-3 text-sm text-gold">
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
