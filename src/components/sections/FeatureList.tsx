import React from 'react';
import Feature from './Feature';

type featureObj = {
  title: string;
  description: string;
  img: string;
};

const FeatureList = (): JSX.Element => {
  const features: featureObj[] = [
    {
      title: 'Create Layouts on the App Canvas',
      description:
        'Add elements to app canvas and custom component details to create a layout of your application. Elements that allow nesting will highlight in yellow upon hovering an element. Remove elements by dragging them to the trash area. The code preview will be updated as elements are added and removed!',
      img: 'https://raw.githubusercontent.com/oslabs-beta/ProtoNative/readme/gifs/Adding-elements-to-App-Canvas.gif',
    },
    {
      title: 'Add Custom Components',
      description:
        'Make reusable custom components using the Add Custom Component button. Customize the layout by dragging elements from the Add Child section!',
      img: 'https://raw.githubusercontent.com/oslabs-beta/ProtoNative/readme/gifs/Adding-custom-components.gif',
    },
    {
      title: 'Stateful Components',
      description:
        'Make a components stateful by pressing the State button next to it. Add and delete states in the modal.',
      img: 'https://raw.githubusercontent.com/oslabs-beta/ProtoNative/readme/gifs/Add-state-to-components.gif',
    },
    {
      title: 'Nested Custom Components',
      description:
        'Custom Components can be children of other custom components. These parent-child relationships will be reflected in the App Canvas as you customize your components.',
      img: 'https://raw.githubusercontent.com/oslabs-beta/ProtoNative/readme/gifs/Add-reuseable-components-as-child.gif',
    },
    {
      title: 'Tree Hierarchy',
      description:
        "Visualize your project by pressing the tree tab. Display states of a stateful component by pressing the info button! The tree is easily customizable to a user's preference. Nodes are easily repositioned by dragging and the orientation of the tree can be switched by pressing the arrow key in the bottom right.",
      img: './demo-pictures/tree-hierarchy.png',
    },
    {
      title: 'Export your Project',
      description:
        "Once you're finished with your project, export it to your local machine using the export button! The resulting folder contains all of your custom components, application folder, and package.json/app.json, app, all properly structured. Make sure to run 'npm install' before running your app, and your project will be ready to go!",
      img: 'https://drive.google.com/file/d/1dzWRAiSGqTkCva-TH1v6wBOAP5mMvXrL/preview',
    },
  ];

  const featureEle = features.map((feat, idx) => {
    return (
      <Feature
        key={idx}
        title={feat.title}
        description={feat.description}
        img={feat.img}
      />
    );
  });

  return (
    <div id='features-container'>
      <h1>Features</h1>
      {featureEle}
    </div>
  );
};

export default FeatureList;
