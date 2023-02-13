import React, { useState } from "react";
// import { DragSource, DropTarget, ConnectDragSource, ConnectDropTarget, DragSourceMonitor, DragSourceConnector, DropTargetMonitor, DropTargetConnector } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';

const Home = () => {
  //   const [draggedItem, setDraggedItem] = React.useState(null) as any;

  //   const handleDragStart = (item: any) => (e: any) => {
  //     // console.log("drag start", item);
  //     // console.log(e);
  //     setDraggedItem(item);
  //     e.dataTransfer.setData("text/plain", JSON.stringify(item));
  //   };

  //   const handleDragOver = (index: any) => (e: any) => {
  //     e.preventDefault();
  //     // console.log("drag over", index);
  //     // setDraggedItem({ index, name: `Item ${index}` });
  //   };

  //   const itemArr = Array.from({ length: 10 }, (_, i) => {
  //     return {
  //       index: i,
  //       name: `Item ${i}`,
  //     };
  //   });

  //   const [items, setItems] = React.useState(itemArr);

  //   const handleDrop = () => {
  //     const updatedItems = [...items];
  //     const draggedIndex = items.findIndex(
  //       (item) => item.index === draggedItem.index
  //     );
  //     const overIndex = items.findIndex(
  //       (item) => item.index === items[draggedItem.index].index
  //     );

  //     // updatedItems.splice(draggedIndex, 1);
  //     // updatedItems.splice(overIndex, 0, draggedItem);
  //     // console.log(updatedItems);

  //     // setItems(updatedItems);
  //     // setDraggedItem(null);
  //     // setDraggedItem(null);
  //   };

  //   return (
  //     <div>
  //       <ul>
  //         {items.map((item, index) => (
  //           <li
  //             key={index}
  //             draggable
  //             onDragStart={handleDragStart(item)}
  //             onDragOver={handleDragOver(index)}
  //             onDrop={handleDrop}
  //             style={{
  //               height: "40px",
  //               width: "100px",
  //               background: "teal",
  //               margin: "1rem",
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //               cursor: "drag",
  //             }}
  //           >
  //             {item.name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  //   const [draggedItem, setDraggedItem] = useState(null) as any;
  //   const [items, setItems] = useState([
  //     { id: 1, name: "Item 1" },
  //     { id: 2, name: "Item 2" },
  //     { id: 3, name: "Item 3" },
  //     { id: 4, name: "Item 4" },
  //     { id: 5, name: "Item 5" },
  //   ]);

  //   const handleDragStart = (item: any) => (e: any) => {
  //     setDraggedItem(item);
  //     e.dataTransfer.setData("text", JSON.stringify(item));
  //   };

  //   const handleDragOver = (index: any) => (e: any) => {
  //     e.preventDefault();
  //     setDraggedItem({ over: index });
  //   };

  //   const handleDrop = () => {
  //     const updatedItems = [...items];
  //     const draggedIndex = items.findIndex((i) => i.id === draggedItem?.id);
  //     const overIndex = items.findIndex(
  //       (i) => i.id === items[draggedItem?.over]?.id
  //     );

  //     updatedItems.splice(draggedIndex, 1);
  //     updatedItems.splice(overIndex, 0, draggedItem);

  //     setItems(updatedItems);
  //     setDraggedItem(null);
  //   };

  //   return (
  //     <div>
  //       <ul>
  //         {items.map((item, index) => (
  //           <li
  //             key={item.id}
  //             draggable
  //             onDragStart={handleDragStart(item)}
  //             onDragOver={handleDragOver(index)}
  //             onDrop={handleDrop}
  //             style={{
  //               height: "40px",
  //               width: "100px",
  //               background: "teal",
  //               margin: "1rem",
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //               cursor: "drag",
  //             }}
  //           >
  //             {item.name}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return <div></div>;
};

export default Home;
