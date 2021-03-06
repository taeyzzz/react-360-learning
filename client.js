// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    4096 /* width */,
    2048 /* height */,
    Surface.SurfaceShape.Cylinder /* shape */
  );


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Learning_VR', { /* initial props */ }),
    // r360.getDefaultSurface()
    cylinderSurface
  );

  // r360.renderToLocation(
  //   r360.createRoot('Learning_VR', { /* initial props */ }),
  //   r360.getDefaultLocation()
  // );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  r360._cameraPosition = [0, 0, 0];
}

window.React360 = {init};
