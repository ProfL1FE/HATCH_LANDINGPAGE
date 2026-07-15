export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/challenge', label: 'Challenge' },
  { to: '/journey', label: 'Journey' },
  { to: '/awards', label: 'Awards' },
  { to: '/partners', label: 'Partners' },
  { to: '/resources', label: 'Resources' },
]

export const HERO_STATS = [
  { icon: '👥', value: '10K+', label: 'Students' },
  { icon: '🏛️', value: '120+', label: 'Universities' },
  { icon: '💡', value: '2K+', label: 'Ideas Submitted' },
  { icon: '🌍', value: '1', label: 'Mission' },
]

export const ECOSYSTEM_NODES = [
  { icon: '💼', label: 'CareerBank™', sub: 'Your Professional Home', pos: 'left-[-8%] top-[4%]' },
  { icon: '🪪', label: 'Jo1nID™', sub: 'Your Digital Identity', pos: 'left-[-14%] top-[36%]' },
  { icon: '✅', label: 'Veri5™', sub: 'Verified Achievements', pos: 'left-[-10%] top-[68%]' },
  { icon: '📋', label: 'Jo1nBiz™', sub: 'Build. Manage. Grow.', pos: 'right-[-8%] top-[2%]' },
  { icon: '🎓', label: 'Jo1nUni™', sub: 'University Partners', pos: 'right-[-16%] top-[32%]' },
  { icon: '🐝', label: 'HIVE™', sub: 'Founder Community', pos: 'right-[-12%] top-[56%]' },
  { icon: '🏆', label: 'Launchpad™', sub: 'Turn Ideas Into Ventures', pos: 'right-[-6%] top-[80%]' },
]

export const STAGES = [
  {
    icon: '👤',
    title: 'Register',
    tag: 'Create JO1NID',
    desc: 'Create your JO1NID, complete your CareerBank profile, and begin VERI5 verification.',
    unlock: 'Professional identity, HATCH access, download centre.',
    phase: 'Challenge',
  },
  {
    icon: '💡',
    title: 'Submit Idea',
    tag: 'Enter challenge',
    desc: 'Identify a real-world problem and submit your AI for Humanity solution.',
    unlock: 'National entry, participation record, digital certificate eligibility.',
    phase: 'Challenge',
  },
  {
    icon: '🏅',
    title: 'Top 100',
    tag: 'Development Sprint',
    desc: 'Selected teams unlock the HATCH Development Sprint with structured learning.',
    unlock: 'Founder bootcamp, AI workshops, business workshops, pitch coaching.',
    phase: 'Lab',
  },
  {
    icon: '🚀',
    title: 'Sprint',
    tag: 'Build stronger',
    desc: 'Improve your solution through customer validation, team development, and guided learning.',
    unlock: 'Progress evaluation, venture refinement, stronger portfolio.',
    phase: 'Lab',
  },
  {
    icon: '⭐',
    title: 'Top 20',
    tag: 'National Finalist',
    desc: 'Finalist teams advance to the national stage and showcase opportunity.',
    unlock: 'Finalist trophy, certificate, demo booth, photography, media exposure.',
    phase: 'Summit',
  },
  {
    icon: '🎤',
    title: 'Finals',
    tag: 'Pitch live',
    desc: 'Present your solution before judges, partners, and industry guests.',
    unlock: 'National stage pitch, executive networking, corporate matching opportunities.',
    phase: 'Summit',
  },
  {
    icon: '👑',
    title: 'Champion',
    tag: 'Venture of the Year™',
    desc: 'One winning venture receives the highest HATCH recognition.',
    unlock: 'Champion trophy, certificate, media recognition, featured founder status.',
    phase: 'Summit',
  },
  {
    icon: '💼',
    title: 'Launchpad',
    tag: '12 months',
    desc: 'Champion enters a 12-month venture development journey valued at USD30,000.',
    unlock: 'Founder development, validation, branding, legal/IP, accounting and corporate introductions.',
    phase: 'Circle',
  },
  {
    icon: '🌍',
    title: 'HIVE',
    tag: 'Lifetime network',
    desc: 'Continue into the founder and alumni community after Launchpad.',
    unlock: 'HIVE Founder Membership and CareerBank Lifetime Network.',
    phase: 'Circle',
  },
]

export const AWARDS = [
  {
    icon: '🏆',
    badge: 'Champion',
    badgeVariant: 'gold',
    title: 'HATCH Venture of the Year™',
    accentBorder: true,
    perks: [
      'Champion Trophy',
      'National Champion Certificate',
      'Gold VERI5™ Verified Achievement',
      'Media Recognition',
      'CareerBank Featured Founder',
      '12-Month HATCH Launchpad™',
      'HIVE™ Founder Membership',
      'Business validation, branding, legal/IP and accounting clinics',
      'Corporate introductions',
      'Lifetime Founder Recognition',
    ],
  },
  {
    icon: '🥈',
    badge: 'Top 20',
    title: 'National Finalists',
    perks: [
      'National Finalist Trophy',
      'National Finalist Certificate',
      'National Stage Pitch',
      'Demo Booth Showcase',
      'Professional Photography',
      'Media Exposure',
      'CareerBank Featured Profile',
      'Corporate Networking',
    ],
  },
  {
    icon: '🥉',
    badge: 'Top 100',
    title: 'Development Sprint',
    perks: [
      'Top 100 Achievement Certificate',
      'Official Top 100 Recognition',
      'Development Sprint',
      'Founder Bootcamp',
      'AI Masterclasses',
      'Business Development Workshops',
      'Pitch Coaching',
      'Customer Validation Training',
      'CareerBank Featured Achievement',
    ],
  },
  {
    icon: '⭐',
    badge: 'Participant',
    title: 'Every Registered Student',
    perks: [
      'Digital Certificate',
      'CareerBank™ Professional Profile',
      'JO1NID™ Digital Identity',
      'VERI5™ Verification',
      'Digital Achievement Portfolio',
      'AI for Humanity Learning Resources',
      'Entrepreneurship Learning',
      'National Participation Record',
    ],
  },
]

export const PACKAGES = [
  {
    badge: 'Individual',
    name: 'Explorer Pass',
    price: 19,
    desc: 'For individual students who want to challenge themselves.',
    perks: ['Competition entry', 'CareerBank profile', 'JO1NID + VERI5', 'Learning resources', 'Digital certificate'],
    cta: 'Choose Explorer',
  },
  {
    badge: 'Team of 2',
    name: 'Challenger Pass',
    price: 39,
    desc: 'For pairs building a stronger venture submission together.',
    perks: ['Everything in Explorer', 'Team participation', 'Team collaboration', 'Venture submission', 'Shared project workspace'],
    cta: 'Choose Challenger',
    highlight: true,
  },
  {
    badge: 'Team 3–5',
    name: 'Challenger Plus',
    price: 59,
    desc: 'For multidisciplinary teams ready to build bigger ideas.',
    perks: ['Everything above', 'Larger team collaboration', 'Multi-disciplinary recognition', 'Role allocation', 'Team venture profile'],
    cta: 'Choose Plus',
  },
]

export const DOWNLOADS = [
  { title: 'Student Brief', desc: 'Competition overview, packages, benefits, stages, FAQ.' },
  { title: 'University Partnership Brief', desc: 'Campus partner process, university benefits, dashboard and reporting.' },
  { title: 'Pitch Deck Template', desc: 'Suggested structure for student idea submissions.' },
  { title: 'Judging Criteria', desc: 'Evaluation areas for problem, solution, impact, feasibility and presentation.' },
  { title: 'AI Usage Guidelines', desc: 'Disclosure and responsible AI expectations for participants.' },
  { title: 'Media Kit', desc: 'Official introduction, logos, captions and social sharing material.' },
]

export const FAQ = [
  { q: 'Do I need to study business?', a: 'No. HATCH welcomes students from every faculty and discipline.' },
  { q: 'Can I join alone?', a: 'Yes. Explorer Pass is designed for individual participants.' },
  { q: 'Who owns my idea?', a: 'You retain your intellectual property unless you voluntarily enter into a separate written agreement.' },
  { q: 'Can I use AI?', a: 'Yes. AI is encouraged when used responsibly. Significant AI tools used in developing your solution should be disclosed.' },
  { q: 'Is there a cash prize?', a: 'The main reward is the 12-Month HATCH Launchpad™, valued at approximately USD30,000 in venture development support. It is not positioned as a cash prize.' },
  { q: 'Can students from different universities form a team?', a: 'Yes. Teams can register together and can later be supported through team matching via JO1NID.' },
]

export const TIMELINE = [
  { date: 'Aug 2027', label: 'Registration opens', detail: 'JO1NID sign-up, CareerBank profile creation, brief download.' },
  { date: 'Sep 2027', label: 'Idea submission', detail: 'Teams submit their AI for Humanity solution for review.' },
  { date: 'Oct 2027', label: 'Top 100 announced', detail: 'Shortlisted teams enter the Development Sprint.' },
  { date: 'Nov 2027', label: 'Development Sprint', detail: 'Founder bootcamp, AI masterclasses, pitch coaching.' },
  { date: 'Dec 2027', label: 'Top 20 announced', detail: 'National finalists confirmed for the live stage.' },
  { date: 'Jan 2028', label: 'National Finals', detail: 'Live pitch before judges, partners and industry guests.' },
]

export const ELIGIBILITY = [
  'Currently enrolled student at a university, college or TVET institution',
  'Open to all faculties — not only business or engineering students',
  'Individuals or teams of up to 5 members',
  'A valid JO1NID and completed CareerBank profile',
  'Willingness to disclose significant AI tool usage in your submission',
]

export const RULES = [
  'Each participant may be part of only one team per HATCH cycle.',
  'Submissions must address a genuine real-world problem using AI responsibly.',
  'Teams retain intellectual property unless a separate written agreement is signed.',
  'Plagiarism, fabricated data, or undisclosed AI-generated content is grounds for disqualification.',
  'Judging decisions are final at every stage of the pathway.',
]

export const PARTNER_TYPES = [
  {
    title: 'Universities',
    desc: 'Campus Partner Recognition, dashboard access, campus briefings, and annual impact reporting.',
    icon: '🎓',
  },
  {
    title: 'Sponsors',
    desc: 'Brand visibility across the website, media kit, finalist showcase, and event materials.',
    icon: '🤝',
  },
  {
    title: 'Industry',
    desc: 'Corporate matching with finalist teams and emerging student ventures as they mature.',
    icon: '🏢',
  },
]

export const RECOGNITION = [
  { stat: 'Top 100', label: 'Development Sprint' },
  { stat: 'Top 20', label: 'National Finalists' },
  { stat: 'USD30k', label: 'Launchpad value' },
  { stat: '12 Months', label: 'Founder support' },
]
