import {
    faUser,
    faChevronRight,
    faStar,
    faSquarePhone,
    faMapLocationDot,
    faBuildingColumns,
    faCircleQuestion,
    faShieldBlank,
    faClipboardList,
    faRightFromBracket,
    faWallet,
  } from '@fortawesome/free-solid-svg-icons';
  
  export const profilePreference = {
    title: 'Profile preferences',
    section: [
      {
        sectionName: 'Profile',
        description: 'Change your profile',
        icon: faUser,
        route: 'profile',
      },
      {
        sectionName: 'Favorite',
        description: 'Add your favorite movie',
        icon: faStar,
        route: 'favorite',
      },
    ],
  };
  
  export const profileInformation = {
    title: 'Profile information',
    section: [
      {
        sectionName: 'Contact',
        description: 'Your store contact information',
        icon: faSquarePhone,
        route: 'contact-store',
      },
      {
        sectionName: 'Address',
        description: 'Change your store address & coordinate',
        icon: faMapLocationDot,
        route: 'address-store',
      },
      {
        sectionName: 'Bank Account',
        description: 'Change your bank account',
        icon: faBuildingColumns,
        route: 'bank-account',
      },
    ],
  };
  
  export const profileGeneral = {
    title: 'General',
    section: [
      {
        sectionName: 'Support',
        description: 'Get help for your problems',
        icon: faCircleQuestion,
        route: 'support',
      },
      {
        sectionName: 'Privacy policy',
        description: 'See our privacy policy',
        icon: faShieldBlank,
        route: 'privacy-policy',
      },
      {
        sectionName: 'Terms of use',
        description: 'See our terms of use',
        icon: faClipboardList,
        route: 'terms',
      },
      {
        sectionName: 'Logout',
        description: 'It’s ok if you want to get some rest',
        icon: faRightFromBracket,
        route: 'logout',
      },
    ],
  };
  