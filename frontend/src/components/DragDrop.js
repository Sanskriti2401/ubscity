// // Import necessary modules
// import React from 'react';
// import { useDrag } from 'react-dnd';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// // Define the draggable item
// const DraggableBox = ({ name }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: 'box',
//     item: { name },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   return (
//     <div
//       ref={drag}
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: 'move',
//         border: '1px solid #000',
//         padding: '0.5rem',
//         backgroundColor: '#eee',
//       }}
//     >
//       {name}
//     </div>
//   );
// };

// // Define the drop target
// const DropBox = ({ onDrop, children }) => {
//   const [{ canDrop, isOver }, drop] = useDrop({
//     accept: 'box',
//     drop: (item) => onDrop(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//       canDrop: !!monitor.canDrop(),
//     }),
//   });

//   const isActive = canDrop && isOver;

//   return (
//     <div
//       ref={drop}
//       style={{
//         width: '300px',
//         height: '300px',
//         border: `2px dashed ${isActive ? 'green' : 'black'}`,
//         position: 'relative',
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// // Main App Component
// const DragAndDropApp = () => {
//   const handleDrop = (item) => {
//     console.log('Dropped:', item);
//     // Handle the dropped item as needed
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div>
//         <DropBox onDrop={handleDrop}>
//           {/* Render draggable boxes inside the drop box */}
//           <DraggableBox name="Box 1" />
//           <DraggableBox name="Box 2" />
//           <DraggableBox name="Box 3" />
//         </DropBox>
//       </div>
//     </DndProvider>
//   );
// };

// export default DragAndDropApp;



import React, { useState } from "react";
import axios from "axios";

const DragAndDropApp = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>
            File Name: {selectedFile.name}
          </p>

          <p>
            File Type: {selectedFile.type}
          </p>

          <p>
            Last Modified: {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } 
  };

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={onFileChange}
        />
        <button onClick={onFileUpload}>
          Upload!
        </button>
      </div>
      {fileData()}
    </div>
  );
};

export default DragAndDropApp;