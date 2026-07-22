import { X } from 'lucide-react';

/**
 * Terms & Privacy content mirrors the ELIGIBILITY and RULES already
 * published in src/data/hatch.js (used elsewhere on the site) so this
 * modal never states something the Home page contradicts. It's a
 * thorough draft, not final legal copy — see the notice below.
 */
export default function TermsModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div className="hatch-panel-glass relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-panel p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted hover:text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2 id="terms-modal-title" className="text-lg font-semibold text-ink">
          HATCH™ 2027 — Terms of Participation &amp; Privacy Policy
        </h2>
        <p className="mt-2 rounded-lg border border-line bg-panel-2/60 px-3 py-2 text-xs text-muted">
          This is HATCH™ 2027's draft Terms &amp; Privacy Policy, reflecting the eligibility, rules
          and data practices described elsewhere on this site. It is pending final legal review
          and sign-off before the competition's official launch.
        </p>

        <div className="mt-4 space-y-5 text-sm leading-6 text-muted">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">Eligibility</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>You must be a currently enrolled student at a university, college or TVET institution.</li>
              <li>Open to all faculties — not only business or engineering students.</li>
              <li>You may enter as an individual or as part of a team of up to 5 members.</li>
              <li>You need a valid JO1NID and a completed CareerBank profile.</li>
              <li>Each participant may be part of only one team per HATCH cycle.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">Your Account</h3>
            <p className="mt-2">
              Registering creates a JO1NID identity used to access HATCH™ and the wider CareerBank
              ecosystem. You're responsible for the accuracy of the information you provide and for
              keeping your login credentials confidential. Activity under your account is treated as
              activity you authorised.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">
              Submissions &amp; Intellectual Property
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Submissions must address a genuine real-world problem using AI responsibly.</li>
              <li>You must disclose significant AI tool usage in your submission.</li>
              <li>
                You and your team retain intellectual property in your submission, unless a separate
                written agreement is signed (for example, if you choose to enter the HATCH Launchpad™
                venture-development track as the Champion).
              </li>
              <li>
                By submitting, you grant HATCH™ and CareerBank a licence to display, promote and
                reference your submission and team name for competition and marketing purposes.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">
              Conduct &amp; Disqualification
            </h3>
            <p className="mt-2">
              Plagiarism, fabricated data, or undisclosed AI-generated content is grounds for
              disqualification at any stage. Judging decisions are final at every stage of the
              pathway, from Top 100 selection through the National Finals.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">Rewards</h3>
            <p className="mt-2">
              The Champion enters the 12-Month HATCH Launchpad™, valued at approximately USD30,000 in
              venture-development support — this is not a cash prize. National Finalists and Top 100
              teams also receive certificates, mentorship and CareerBank recognition. Reward
              structures may change before the competition launches; the current published terms and
              conditions at that time will govern.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">
              How We Use Your Data
            </h3>
            <p className="mt-2">
              We collect the information you provide at registration (name, email, and — for JO1NID
              accounts — a securely stored password) to create and secure your account, administer
              the competition, and contact you about your application and important updates.
            </p>
            <p className="mt-2">
              Depending on how you register, your details may be shared within the HATCH™ ecosystem —
              JO1NID (identity and authentication), CareerBank (your professional profile), JO1NBiz
              (business/partner access) and JO1NUNI (university partner access) — solely to provide
              the services those systems are responsible for. We don't sell your personal data to
              third parties.
            </p>
            <p className="mt-2">
              You can request access to, correction of, or deletion of your personal data by
              contacting the HATCH™ 2027 team through the official channels listed on this site. We
              retain registration data for as long as your account is active and as needed to
              administer the current competition cycle.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink">
              Changes to These Terms
            </h3>
            <p className="mt-2">
              We may update these terms as the competition timeline and rules are finalised. Material
              changes will be reflected here before they take effect. Continued participation after an
              update means you accept the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
