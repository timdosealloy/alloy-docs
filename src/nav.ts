export interface NavItem {
  label: string;
  slug?: string;
  href?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface NavTab {
  id: string;
  label: string;
  icon?: string;
  items?: NavItem[];
  groups?: NavGroup[];
}

export const nav: NavTab[] = [
  {
    id: 'get-started',
    label: 'Get Started',
    icon: 'fa-rocket',
    groups: [
      {
        label: 'Overview',
        items: [
          { label: 'What is Alloy?', href: '#' },
          { label: 'Sandbox vs. Production', slug: 'get-started/sandbox-vs-production' },
          { label: 'Authentication', slug: 'get-started/authentication-guide' },
          { label: 'Quickstart: Your first Journey Application', href: '#' },
        ],
      },
      {
        label: 'Use Cases',
        items: [
          { label: 'Onboarding', href: '#' },
          { label: 'Ongoing Monitoring', href: '#' },
          { label: 'Perpetual KYC/KYB', href: '#' },
          { label: 'Transaction Monitoring', href: '#' },
          { label: 'Credit Underwriting', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    icon: 'fa-lightbulb',
    groups: [
      {
        label: 'Data model',
        items: [
          { label: 'Entities', href: '#' },
          { label: 'External identifiers', href: '#' },
          { label: 'Entity Merging', href: '#' },
        ],
      },
      {
        label: 'Journeys',
        items: [
          { label: 'What is a Journey Application', href: '#' },
          { label: 'Statuses & outcomes', href: '#' },
          { label: 'Multi-entity applications', href: '#' },
          { label: 'Action Nodes', href: '#' },
          { label: 'End-of-Journey reviews', href: '#' },
        ],
      },
      {
        label: 'Workflows',
        items: [
          { label: 'What are Published Attributes', href: '#' },
          { label: 'Introduction to Custom Models', href: '#' },
        ],
      },
      {
        label: 'Rule-Based Notifications',
        items: [
          { label: 'What are Rule-Based Notifications', href: '#' },
          { label: 'Backtesting', href: '#' },
        ],
      },
      {
        label: 'Webhooks',
        items: [
          { label: 'What are webhooks', href: '#' },
          { label: 'Retry behavior & delivery guarantees', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'build',
    label: 'Build',
    icon: 'fa-hammer',
    groups: [
      {
        label: 'Account setup & admin',
        items: [
          { label: 'Manage API keys', slug: 'build/account-level-api-keys' },
          { label: 'Configure SAML SSO', slug: 'build/how-to-configure-saml-single-sign-on-sso-with-alloy' },
          { label: 'SAML with Generic SAML 2.0', slug: 'build/generic-saml-20' },
          { label: 'Configure SCIM (overview)', href: '#' },
          { label: 'SCIM with Okta', href: '#' },
          { label: 'SCIM with Azure', href: '#' },
        ],
      },
      {
        label: 'Journeys setup',
        items: [
          { label: 'Get your Journey Token', href: '#' },
          { label: 'Get your SDK Key', href: '#' },
          { label: 'Configure Journey webhooks', href: '#' },
        ],
      },
      {
        label: 'Submit & process Journey Applications',
        items: [
          { label: 'Submit a Journey Application', href: '#' },
          { label: 'Implement device fingerprinting', href: '#' },
          { label: 'Handle Step-Up verification', href: '#' },
          { label: 'Handle manual reviews', href: '#' },
          { label: 'Complete an Action Node', href: '#' },
          { label: 'Rerun a failed Journey Application', href: '#' },
        ],
      },
      {
        label: 'Web SDK',
        items: [
          { label: 'Install the Alloy SDK', href: '#' },
          { label: 'Customize the SDK theme', href: '#' },
          { label: 'Integrate Socure', href: '#' },
        ],
      },
      {
        label: 'Webhooks: implementation',
        items: [
          { label: 'Best practices', href: '#' },
          { label: 'Authenticate with Basic Auth', href: '#' },
          { label: 'Authenticate with HMAC', href: '#' },
        ],
      },
      {
        label: 'Ongoing Monitoring setup',
        items: [
          { label: 'Configure an Event Action Node', href: '#' },
          { label: 'Set up Rule-Based Notifications', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'guides',
    label: 'End-to-End Guides',
    icon: 'fa-compass',
    groups: [
      {
        label: 'Onboarding',
        items: [
          { label: 'Onboarding overview', href: '#' },
          { label: 'Onboarding a new customer with Journeys', href: '#' },
          { label: 'Onboarding with Step-Up Journey', href: '#' },
          { label: 'Onboarding with Entity Groups (KYB)', slug: 'guides/onboarding-with-entity-groups' },
        ],
      },
      {
        label: 'Ongoing Monitoring',
        items: [
          { label: 'Ongoing Monitoring overview', slug: 'concepts/what-is-ongoing-monitoring' },
          { label: 'Ongoing Monitoring with Entity Groups', href: '#' },
          { label: 'Ongoing monitoring for logins', href: '#' },
          { label: 'Ongoing monitoring for transactions', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'api-reference',
    label: 'API Reference',
    icon: 'fa-book',
    groups: [
      {
        label: 'Journey API',
        items: [
          { label: 'Request parameters', href: '#' },
          { label: 'Application statuses', href: '#' },
          { label: 'Webhook event types', href: '#' },
          { label: 'Sandbox personas', href: '#' },
          { label: 'Rate limit headers', href: '#' },
        ],
      },
      {
        label: 'Events API',
        items: [
          { label: 'Events API request reference', href: '#' },
          { label: 'Event types overview', href: '#' },
          { label: 'Event type: Person Created', href: '#' },
          { label: 'Event type: Transaction', href: '#' },
        ],
      },
      {
        label: 'Webhook events',
        items: [
          { label: 'Journeys webhook events', href: '#' },
          { label: 'Investigations webhook events', href: '#' },
          { label: 'Webhook delivery & retry behavior', href: '#' },
        ],
      },
    ],
  },
];

export function getFirstHref(tabId: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const tab = nav.find((t) => t.id === tabId);
  if (!tab) return '#';
  const items = tab.items ?? tab.groups?.[0]?.items ?? [];
  const first = items[0];
  if (!first) return '#';
  if (first.slug) return `${base}docs/${first.slug}`;
  return `${base}docs/stub?t=${encodeURIComponent(first.label)}&tab=${tabId}`;
}

export function getTabForSlug(slug: string): string {
  for (const tab of nav) {
    if (tab.items) {
      for (const item of tab.items) {
        if (item.slug === slug) return tab.id;
      }
    }
    if (tab.groups) {
      for (const group of tab.groups) {
        for (const item of group.items) {
          if (item.slug === slug) return tab.id;
        }
      }
    }
  }
  return 'get-started';
}
