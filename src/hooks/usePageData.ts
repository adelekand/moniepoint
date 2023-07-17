/**
 * This hooks mocks data fetching from a headless CMS
 */

export const usePageData = () => {
  return {
    heroTitle: 'Darcy\'s insurance product',
    offers: [
      {
        id: 1,
        text: 'Our <a href="/">plans</a> are saving policyholders 30% - 60% on premiums',
        markdown: true,
      },
      {
        id: 2,
        text: 'We offer a choice of ow deductables and include no cost value-added services'
      },
    ],
    middleSectionOffers: [
      {
        id: 1,
        text: 'Participate in the loyalty program. Pay for the service online to get bonuses for our other services. We have a lot of bonuses!'
      },
      {
        id: 2,
        text: 'You can help other people choose a duration fund and share the link with your friends!',
      },
    ],
    choiceSection: {
      title: 'Best Choice',
      text: 'Not all insurance are the same. That\'s why agency knows that your insurance should be customized to fit your situation.',
      buttonText: 'View all services',
    },
    supportText: "Support<br /> at every<br /> <span class='bannerText'>step</span>",
    sliderContent: [
      {
        id: 0,
        text: "With over twenty years of industry experience, Darcy’s insurance products has learned a lot. The one thing we know for sure is that we’re all about you. If you find searching for insurance frustrating we are here to help.",
        name: "Grace Darcy",
        position: "The agency founder",
        image: "/assets/images/georgia.jpeg",
      },
      {
        id: 1,
        text: "With over twenty years of industry experience, Darcy’s insurance products has learned a lot. The one thing we know for sure is that we’re all about you. If you find searching for insurance frustrating we are here to help.",
        name: "Emiko Sato",
        position: "Senior partner",
        image: "/assets/images/man_image.jpeg",
      },
      {
        id: 2,
        text: "With over twenty years of industry experience, Darcy’s insurance products has learned a lot. The one thing we know for sure is that we’re all about you. If you find searching for insurance frustrating we are here to help.",
        name: "Jane Doe",
        position: "Senior consultant",
        image: "/assets/images/mother-daughter.webp",
      }
    ],
    sliderText: "Our experts say",
    bottomLinks: [
      {
        id: 0,
        title: "Insurance services",
        links: [
          'Medical expenses',
          'Family health insurance',
          'vehicle damage',
          'Property loss',
          'Fire',
        ],
      },
      {
        id: 1,
        title: "Company",
        links: [
          'About us',
          'Career',
          'Help',
          'FAQ',
          'Blog'
        ]
      },
      {
        id: 2,
        title: "Bonus",
        links: [
          'Gift certificates',
          'Affilate program',
          'Trainings'
        ],
      }
    ],
  }
}