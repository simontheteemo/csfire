// Single source of truth for CS Fire services.
// Used by the home grid, /services index, and each /services/[slug] page.

export interface Service {
  slug: string;
  name: string;
  short: string;        // one-line blurb for cards
  tagline: string;      // hero sub-line on the detail page
  intro: string;        // opening paragraph on the detail page
  features: string[];   // "what we do" bullet list
  icon: string;         // inner SVG markup (stroke-based, 24x24 viewBox)
}

const stroke = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

export const services: Service[] = [
  {
    slug: 'fire-alarms',
    name: 'Fire Alarm Systems',
    short: 'Design, supply, install and 24/7 monitoring of detection and alarm systems for any building size.',
    tagline: 'Early detection that protects people and property.',
    intro:
      'A reliable fire alarm system is your building’s first line of defence. CS Fire designs, supplies, installs and monitors detection and alarm systems engineered to New Zealand standards — from a single-tenancy unit to a fully addressable, monitored installation across a large site.',
    features: [
      'System design and consultation to NZ standards (NZS 4512)',
      'Supply and installation of detection, sounders and panels',
      'Connection to 24/7 fire brigade monitoring',
      'Scheduled testing, servicing and fault response',
      'Upgrades and takeovers of existing systems',
    ],
    icon: `<circle cx="12" cy="12" r="3" ${stroke}/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2" ${stroke}/>`,
  },
  {
    slug: 'sprinkler-systems',
    name: 'Fire Sprinkler Systems',
    short: 'Engineered sprinkler design, installation, testing and planned maintenance to NZ standards.',
    tagline: 'Automatic suppression you can rely on.',
    intro:
      'Sprinkler systems contain and suppress fire before it spreads, buying critical time for people to evacuate and for the fire service to respond. CS Fire delivers engineered sprinkler design, installation, testing and planned maintenance for commercial and industrial buildings.',
    features: [
      'Sprinkler system design to NZS 4541 / NZS 4515',
      'Installation for new builds and retrofits',
      'Survey, testing and certification',
      'Planned preventative maintenance programmes',
      'Pump, valve and tank inspection and servicing',
    ],
    icon: `<path d="M12 3v6M12 9c-3 1-5 4-5 7a5 5 0 0 0 10 0c0-3-2-6-5-7z" ${stroke}/><path d="M9 13h6" ${stroke}/>`,
  },
  {
    slug: 'extinguishers-training',
    name: 'Extinguishers & Training',
    short: 'Supply and servicing of portable equipment, plus fire warden and extinguisher training.',
    tagline: 'The right equipment — and people who know how to use it.',
    intro:
      'Portable fire equipment is only effective when it’s the right type, properly maintained, and in the hands of trained people. CS Fire supplies and services extinguishers, hose reels and blankets, and delivers practical fire warden and extinguisher-use training for your team.',
    features: [
      'Supply of extinguishers, hose reels, blankets and signage',
      'Annual servicing, testing and tagging',
      'Hands-on extinguisher-use training',
      'Fire warden training and refresher courses',
      'Site equipment audits and recommendations',
    ],
    icon: `<rect x="9" y="3" width="6" height="4" rx="1" ${stroke}/><path d="M9 7h6v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM16 9h2v4" ${stroke}/>`,
  },
  {
    slug: 'bwof-compliance',
    name: 'BWOF & Compliance',
    short: 'Building Warrant of Fitness, inspections, evacuation schemes and emergency lighting — handled.',
    tagline: 'Stress-free compliance, start to finish.',
    intro:
      'Keeping a building compliant means coordinating inspections, certificates and schemes across multiple safety systems. As IQP-registered inspectors, CS Fire manages your Building Warrant of Fitness and the specified systems behind it — so you stay compliant without the headache.',
    features: [
      'Building Warrant of Fitness (BWOF) management',
      'IQP inspections and 12A certificates',
      'Evacuation schemes and trial evacuations',
      'Emergency and exit lighting testing',
      'Passive fire protection inspection',
    ],
    icon: `<path d="M9 12l2 2 4-4" ${stroke}/><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z" ${stroke}/>`,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
