import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, LayoutTemplate, BookOpen, Image, Download, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { RESOURCES, CATEGORIES } from '../data/resources';
import { isLoggedIn } from '../lib/auth';

const CATEGORY_ICON = {
  Briefs: FileText,
  Templates: LayoutTemplate,
  Guides: BookOpen,
  Media: Image,
};

export default function Resources({ onRequireAuth }) {
  const location = useLocation();
  const [category, setCategory] = useState('All');
  // If the user was sent to Sign In for a specific resource and just returned,
  // surface it as granted so the loop completes visibly.
  const [unlockedTitle, setUnlockedTitle] = useState(location.state?.unlocked ?? null);

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => category === 'All' || r.category === category);
  }, [category]);

  // Count per category for the sidebar rail — derived once from the source data.
  const counts = useMemo(() => {
    const map = { All: RESOURCES.length };
    for (const c of CATEGORIES) {
      if (c !== 'All') map[c] = RESOURCES.filter((r) => r.category === c).length;
    }
    return map;
  }, []);

  function handleDownload(title) {
    if (isLoggedIn()) {
      setUnlockedTitle(title);
    } else {
      onRequireAuth(title);
    }
  }

  const loggedIn = isLoggedIn();

  return (
    <main className="hatch-atmosphere-resources hatch-font-plain relative min-h-[calc(100svh-74px)] px-6 py-16 text-ink sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl hatch-fade-in">
        <div className="hatch-on-gradient max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">HATCH™ 2027 / RESOURCES</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Move with clarity.</h1>
          <p className="mt-3 text-base leading-7 text-ink">
            Resources, frameworks and tools to help you move from idea to action.
          </p>
        </div>

        {/* Category navigation — evenly spread columns */}
        <nav
          className="mt-8 grid grid-cols-2 gap-2 border-b border-line pb-4 sm:grid-cols-3 lg:grid-cols-5"
          role="tablist"
          aria-label="Resource categories"
        >
          {CATEGORIES.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(c)}
                className={`hatch-on-gradient flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                  active ? 'bg-panel-2/60 text-gold' : 'text-ink/95 hover:text-ink'
                }`}
              >
                <span>{c}</span>
                <span className={`text-[10px] font-medium tracking-normal ${active ? 'text-gold/70' : 'text-ink/75'}`}>
                  {counts[c]}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Status + resource grid */}
        <div className="mt-8">
          {unlockedTitle && (
            <div className="hatch-on-gradient mb-8 flex items-center gap-3 border-l-2 border-gold pl-4 py-1 hatch-fade-in">
              <CheckCircle2 size={17} aria-hidden="true" className="shrink-0 text-gold" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">RESOURCE ACCESS GRANTED</p>
                <p className="mt-1 text-sm text-ink">{unlockedTitle}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => {
              const Icon = CATEGORY_ICON[resource.category];

              return (
                <article
                  key={resource.id}
                  className="hatch-panel-glass flex flex-col rounded-xl border border-line bg-panel/70 p-6 transition-colors duration-[250ms] hover:border-gold/30"
                >
                  <div className="mb-4">
                    {loggedIn ? (
                      <div className="flex items-center gap-2">
                        <Icon size={14} aria-hidden="true" className="text-gold" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{resource.category}</span>
                      </div>
                    ) : (
                      <span className="inline-flex rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-bg">
                        JO1NID required
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-ink/80">{resource.description}</p>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleDownload(resource.title)}
                    className="mt-6 w-full"
                  >
                    <Download size={15} aria-hidden="true" />
                    Download
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
