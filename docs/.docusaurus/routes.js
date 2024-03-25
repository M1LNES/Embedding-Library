import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a76'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '375'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2d9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a5a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'cc6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd30'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '555'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '1fc'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'ad6'),
            routes: [
              {
                path: '/begin/components',
                component: ComponentCreator('/begin/components', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/begin/concepts',
                component: ComponentCreator('/begin/concepts', 'd18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/begin/initialization',
                component: ComponentCreator('/begin/initialization', '914'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/begin/terminology',
                component: ComponentCreator('/begin/terminology', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development/conventions',
                component: ComponentCreator('/development/conventions', '8aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development/development',
                component: ComponentCreator('/development/development', '0b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development/structure',
                component: ComponentCreator('/development/structure', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/studio/generation',
                component: ComponentCreator('/studio/generation', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/studio/intro',
                component: ComponentCreator('/studio/intro', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/studio/preview',
                component: ComponentCreator('/studio/preview', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/studio/tokens',
                component: ComponentCreator('/studio/tokens', 'ab2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
