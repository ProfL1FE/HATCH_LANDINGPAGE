// All page copy for pages 4–6, sourced from HATCH_2027_Organised.pdf
// and the approved design mockups. Placeholder items are flagged so the
// team knows what still needs final copy.

export const journey = {
  tag: '04 — Journey',
  heroTitle: ['Your Journey.', 'Your Impact.', 'The Future.'],
  heroSub:
    'From a spark of an idea to a nationally recognised venture. HATCH is with you every step.',
  pathway: [
    { name: 'Challenge', tagline: 'Discover your potential' },
    { name: 'Lab', tagline: 'Develop your potential' },
    { name: 'Summit', tagline: 'Showcase your potential' },
    { name: 'Circle', tagline: 'Continue your journey' },
  ],
  stages: [
    {
      num: '01',
      title: 'Register',
      accent: 'gold',
      points: ['Create your JO1NID', 'Complete your CareerBank profile', 'Access resources and tools'],
      unlocks: 'Professional identity · HATCH access · Download Centre',
    },
    {
      num: '02',
      title: 'Build Your Idea',
      accent: 'purple',
      points: ['Identify real problems', 'Validate your solution', 'Shape your venture concept'],
    },
    {
      num: '03',
      title: 'Top 100',
      accent: 'blue',
      points: ['National selection', 'Join the Development Sprint', 'Workshops & masterclasses'],
    },
    {
      num: '04',
      title: 'Development Sprint',
      accent: 'blue',
      points: ['Refine your solution', 'Mentorship & guidance', 'Business & impact training'],
    },
    {
      num: '05',
      title: 'Top 20',
      accent: 'purple',
      points: ['National finalists', 'Pitch deck & demo booth', 'Media & industry exposure'],
    },
    {
      num: '06',
      title: 'National Finals',
      accent: 'purple',
      points: ['Pitch to leaders', 'Showcase on the national stage', 'Compete for the highest honours'],
    },
    {
      num: '07',
      title: 'Venture of the Year™ & 12-Month Launchpad™',
      accent: 'gold',
      points: ['Champion recognition', '12-Month Launchpad™ support', 'HIVE™ Founder Membership'],
    },
  ],
  unlockTiers: [
    {
      label: 'Available to everyone',
      accent: 'green',
      items: ['Register', 'Download the brief', 'Create your profile'],
    },
    {
      label: 'Selection-based',
      accent: 'blue',
      items: ['Top 100', 'Top 20', 'National Finals'],
    },
    {
      label: 'Winner only',
      accent: 'gold',
      items: ['HATCH Venture of the Year™', '12-Month Launchpad™'],
    },
  ],
  stats: [
    { value: '1', label: 'Mission', sub: 'Humanity first' },
    { value: '9', label: 'Milestones', sub: 'Structured journey' },
    { value: '100+', label: 'Learning Hours', sub: 'Build real skills' },
    { value: '∞', label: 'Lifetime Network', sub: 'Endless opportunities' },
  ],
  quote: {
    text: 'It always seems impossible until it’s done.',
    author: 'Nelson Mandela',
  },
  cta: {
    title: 'Ready for the next stage?',
    sub: 'Your idea has the power to change lives. Let’s build the future together.',
    button: 'Join HATCH Now',
  },
}

export const awards = {
  tag: '05 — Awards',
  heroTitle: ['Recognition That', 'Lasts a Lifetime'],
  heroSub: 'Celebrate your achievements. Unlock opportunities. Build your legacy.',
  tiers: [
    {
      id: 'champion',
      name: 'Champion',
      subtitle: 'HATCH Venture of the Year™ & 12-Month Launchpad™',
      accent: 'gold',
      badge: 'Winner Only',
      benefits: [
        'Champion Trophy',
        'National Champion Certificate',
        'Gold VERI5™ Verified Achievement',
        '12-Month HATCH Launchpad™ (≈ USD 30k value)',
        'HIVE™ Founder Membership',
        'Media Recognition',
        'CareerBank Featured Founder',
        'Corporate Introductions',
        'Business validation, branding, legal/IP & accounting clinics',
        'Lifetime Founder Recognition',
      ],
    },
    {
      id: 'top20',
      name: 'Top 20',
      subtitle: 'National Finalists',
      accent: 'purple',
      benefits: [
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
      id: 'top100',
      name: 'Top 100',
      subtitle: 'Development Sprint',
      accent: 'blue',
      benefits: [
        'Top 100 Achievement Certificate',
        'Official Top 100 Recognition',
        'Founder Bootcamp',
        'AI Masterclasses',
        'Business Development Workshops',
        'Pitch Coaching',
        'Customer Validation Training',
        'CareerBank Featured Achievement',
      ],
    },
    {
      id: 'participant',
      name: 'Participant',
      subtitle: 'Every Registered Student',
      accent: 'green',
      benefits: [
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
  ],
  comparison: {
    columns: ['Champion', 'Top 20', 'Top 100', 'Participant'],
    rows: [
      { benefit: 'Trophy', checks: [true, true, false, false] },
      { benefit: 'Certificate', checks: [true, true, true, true] },
      { benefit: 'National Stage Pitch', checks: [true, true, false, false] },
      { benefit: 'Media Exposure', checks: [true, true, false, false] },
      { benefit: '12-Month Launchpad™ Support', checks: [true, false, false, false] },
      { benefit: 'HIVE™ Membership', checks: [true, false, false, false] },
      { benefit: 'Workshops & Coaching', checks: [true, true, true, false] },
      { benefit: 'CareerBank Featured', checks: [true, true, true, false] },
      { benefit: 'VERI5™ Achievement', checks: ['gold', true, true, true] },
      { benefit: 'Digital Portfolio', checks: [true, true, true, true] },
    ],
  },
  // Placeholder testimonials from the design mockup — replace with real
  // stories once the first cohort completes.
  stories: [
    {
      quote: 'HATCH gave us the platform and support to turn our idea into a real solution.',
      name: 'Aiman H.',
      role: 'HATCH Champion',
    },
    {
      quote: 'The mentorship and exposure opened doors we never imagined possible.',
      name: 'Sarah L.',
      role: 'Top 20 Finalist',
    },
    {
      quote: 'The skills and connections I built through HATCH changed my future.',
      name: 'Daniel K.',
      role: 'Top 100 Participant',
    },
  ],
  cta: {
    title: 'Your recognition is just the beginning.',
    sub: 'Build. Grow. Impact.',
    button: 'Join HATCH Now',
  },
}

export const partners = {
  tag: '06 — Partners',
  heroTitle: ['Stronger Together.', 'Greater Impact.'],
  heroSub:
    'Join an ecosystem of universities, sponsors and industry leaders shaping the future.',
  audiences: [
    {
      id: 'universities',
      name: 'Universities',
      accent: 'gold',
      lead: 'Empower your students. Enhance employability. Create real impact.',
      points: ['Campus recognition', 'Student development', 'Impact reporting', 'Industry exposure'],
      link: '#campus',
      linkLabel: 'Learn More',
    },
    {
      id: 'sponsors',
      name: 'Sponsors',
      accent: 'blue',
      lead: 'Invest in the next generation of innovators and future leaders.',
      points: ['Brand visibility', 'Talent engagement', 'Innovation access', 'Event presence'],
      link: '#become-partner',
      linkLabel: 'Learn More',
    },
    {
      id: 'industry',
      name: 'Industry',
      accent: 'green',
      lead: 'Collaborate. Mentor. Build the solutions of tomorrow.',
      points: ['Access to talent', 'Co-innovation', 'Thought leadership', 'Ecosystem growth'],
      link: '#become-partner',
      linkLabel: 'Learn More',
    },
  ],
  campus: {
    title: 'Campus Partner Programme',
    lead: 'For Official HATCH Campus Partners. Universities get an organised participation system, stronger employability reporting, and structured industry engagement — without having to run everything manually.',
    process: [
      'Introductory meeting',
      'Campus partnership confirmation',
      'Appointment of campus coordinator',
      'Campus briefing and promotion',
      'Student registration',
      'Programme delivery',
      'Annual campus impact report',
      'Apply as JO1NUNI Partner',
    ],
    dashboard: [
      { metric: 'Registered Students', value: '248' },
      { metric: 'Verified JO1NID', value: '211' },
      { metric: 'Ideas Submitted', value: '76' },
      { metric: 'Top 100 Shortlisted', value: '18' },
      { metric: 'Employability Portfolio Completion', value: '84%' },
    ],
  },
  ecosystem: [
    { name: 'JO1NID™', desc: 'Digital Identity', accent: 'purple' },
    { name: 'CareerBank™', desc: 'Professional Home', accent: 'blue' },
    { name: 'JO1NBiz™', desc: 'Partner Platform', accent: 'gold' },
    { name: 'JO1NUNI™', desc: 'University Partners', accent: 'green' },
    { name: 'VERI5™', desc: 'Verified Achievements', accent: 'purple' },
    { name: 'Launchpad™', desc: 'Venture Acceleration', accent: 'blue' },
    { name: 'HIVE™', desc: 'Founder Community', accent: 'gold' },
  ],
  impact: [
    { value: '120+', label: 'Universities' },
    { value: '10,000+', label: 'Students' },
    { value: '200+', label: 'Partners' },
    { value: '30+', label: 'Countries' },
  ],
  strategic: ['World Halalpreneur Council', 'World Talent Council'],
  cta: {
    title: 'Be Part of Something Bigger. Be Part of HATCH.',
    sub: 'Sponsors, employers and ecosystem partners connect through JO1NBiz™.',
    button: 'Become a Partner',
  },
}
