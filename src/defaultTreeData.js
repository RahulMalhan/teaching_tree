// import React from 'react';

// const maxDepth = 5;

// const renderDepthTitle = ({ path }) => `Depth: ${path.length}`;
const isDirectory = true;

function fill() {
  const treedata = [];
  for (let index = 0; index < 100; index++) {
    //const element = array[index];
    treedata.push({
      title: `subject ${index}`, isDirectory,
      children: [
        { title: 'lesson 1', isDirectory },
        { title: 'lesson 2', isDirectory, children: [{ title: 'module' }] },
      ],
    })
  }
  return treedata;
};



const treeData = fill();


export default treeData;
