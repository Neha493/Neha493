import React from "react";
import Flag from "@mui/icons-material/Flag";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { fetchComponent } from "./fetchComponents";

const Sidebar = () => {
  const motionComponents = [
    "MOVEX_TEN",
    "CLOCKWISE_FIFTEEN",
    "ANTICLOCKWISE_FIFTEEN",
    "GOTO_XY",
  ];
  const looksComponents = [
    "SAY_TEN",
    "THINK_TEN",
  ];

  //const eventsComponents = ["BROADCAST"];

  
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <h1 className="font-poppins text-2xl font-semibold mb-4">Sidebar</h1>
      <div className="font-poppins text-xl font-semibold"> <h1>Events </h1></div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Flag size={15}
        className="text-green-600 mx-2 "/>
        
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <h1 className="font-poppins text-xl font-semibold ">Motion</h1>

      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion flex flex-col gap-0.5 items-center"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-[200px]"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <h1 className="font-poppins text-xl font-semibold mt-3">Looks</h1>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks flex flex-col gap-0.5 items-center my-0"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-[200px]"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      </div>
  );
};
export default Sidebar;
      