import { X } from 'lucide-react';

/**
 * PLACEHOLDER legal copy — this is NOT real, reviewed legal text. It exists
 * so the terms-acceptance checkbox in the Join page has something real to
 * link to during development. Replace with actual HATCH Terms of Service
 * and Privacy Policy content before this goes live, ideally reviewed by
 * whoever handles that for the team.
 */
export default function TermsModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-panel p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted hover:text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <h2 id="terms-modal-title" className="text-lg font-semibold text-ink">
          HATCH™ 2027 — Terms &amp; Privacy (Draft)
        </h2>
        <p className="mt-2 rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs text-gold">
          Placeholder text for development only — replace with reviewed Terms of Service and
          Privacy Policy content before launch.
        </p>

        <div className="mt-4 space-y-3 text-sm text-muted">
          <p>
            By registering for HATCH™ 2027, you agree to participate in accordance with the
            competition rules published on this site, and you consent to your registration
            details being used to administer the challenge, contact you about your application,
            and connect you with the wider ecosystem (JO1NID, CareerBank, JO1NBiz, JO1NUNI) as
            described in the programme materials.
          </p>
          <p>
            You are responsible for the accuracy of the information you provide and for keeping
            your account credentials confidential. Participation is subject to the eligibility
            and conduct rules set out in the official HATCH™ challenge documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
