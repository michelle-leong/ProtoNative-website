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
      title: 'Add Custom Components',
      description:
        'Make reusable custom components using the Add Custom Component button. ',
      img: 'https://raw.githubusercontent.com/oslabs-beta/ProtoNative/readme/gifs/Adding-custom-components.gif',
    },
    {
      title: 'Create Layouts on Canvas',
      description:
        'Add elements to app canvas and custom component details to create a layout of your application. Elements that allow nesting are will highlight in yellow upon hovering an element. Custom components can only be edited by selecting them from the components list! The code preview displays the corresponding code based on the active component. The preview will be updated as elements are added and removed!',
      img: '',
    },
    {
      title: 'Deleting Components',
      description:
        'Remove elements from the canvas by dragging them to the trash area. Delete custom components from the component list and watch as all instances will be deleted from the canvas.',
      img: '',
    },
    {
      title: 'Tree Hierarchy',
      description:
        "Visualize your project by pressing the tree tab. Display states of a stateful component by pressing the info button! The tree is easily customizable to a user's preference. Nodes are easily repositioned by dragging and the orientation of the tree can be switched by pressing the arrow key in the bottom right.",
      img: '',
    },
    {
      title: 'Export your Project',
      description:
        "Once you're finished with your project, export it to your local machine using the export button! The resulting folder contains all of your custom components, application folder, and package.json/app.json, app, all properly structured. Make sure to run 'npm install' before running your app, and your project will be ready to go!",
      img: '',
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
