import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Buy tokens',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Analytics',
    icon: 'nb-bar-chart',
    link: '/pages/analytics',
    home: true,
  },
  // {
  //   title: 'Token Stats ',
  //   icon: 'nb-keypad',
  //   link: '/pages/token-stats',
  //   home: true,
  // },
  {
    title: 'Your Orders',
    icon: 'nb-compose',
    link: '/pages/order-stats',
    home: true,
  },
  {
    title: 'Profile',
    icon: 'nb-person',
    link: '/pages/user-profile',
    children: [
      {
        title: 'Edit Profile',
        link: '/pages/profile/edit',
      },
      {
        title: 'Change Password',
        link: '/pages/user-profile/change-password',
      },
      {
        title: 'KYC & AML',
        link: '/pages/profile/password-change',
      },
      {
        title: 'Login History',
        link: '/pages/profile/password-change',
      },
      {
        title: '2FA',
        link: '/pages/profile/password-change',
      },
    ],
  },
  // {
  //   title: 'TDE stages',
  //   icon: 'nb-bar-chart',
  //   link: '/pages/tde',
  //   home: true,
  // },
  {
    title: 'Documents',
    icon: 'nb-email',
    link: '/pages/document',
    children: [
      {
        title: 'Whitepaper',
        url: 'www.google.com',
      },
      {
        title: 'One Paper',
        link: '/pages/document/whitepaper',
      },
      {
        title: 'Legal Disclaimer',
        link: '/pages/document/whitepaper',
      },
      {
        title: 'Terms and conditions',
        link: '/pages/document/whitepaper',
      },
    ],
  },
  {
    title: 'Boltt Wallet',
    icon: 'nb-locked',
    link: '/pages/wallet',
    children: [
      {
        title: 'wallet info',
        link: '/pages/wallet/wallet-info',
      },
      // {
      //   title: 'Go to Wallet',
      //   link: '/pages/wallet/wallet-info',
      // },
    ],
  },
  {
    title: 'FAQ',
    icon: 'nb-edit',
    link: '/pages/order-stats1',
    home: true,
  },
  {
    title: 'Bounty and Refferal',
    icon: 'nb-paper-plane',
    link: '/pages/order-stats3',
    home: true,
  },
  {
    title: 'Live Transaction',
    icon: 'nb-paper-plane',
    link: '/pages/order-stats2',
    home: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //   ],
  // },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
