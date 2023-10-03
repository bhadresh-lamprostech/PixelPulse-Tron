// import React from "react";
// import "../../styles/workspace/ScrollMenuList.css";

// function ScrollMenuList() {
//   const menuItems = [
//     "Workspace 1",
//     "Workspace 2",
//     "Workspace 3",
//     "Workspace 4",
//     "Workspace 5",
//     "Workspace 6",
//     "Workspace 7",
//   ];

//   return (
//     <div className="mt-2">
//       <ul className="WorkspacesListMenu text-black pb-3">
//         {menuItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ScrollMenuList;

import React from "react";
import "../../styles/workspace/ScrollMenuList.css";

function ScrollMenuList() {
  const menuItems = [
    "Workspace 1",
    "Workspace 2",
    "Workspace 3",
    "Workspace 4",
    "Workspace 5",
    "Workspace 6",
    "Workspace 7",
  ];

  const handleItemClick = (item) => {
    // Handle the click event for the item
    console.log("Clicked:", item);
  };

  return (
    <div className="mt-2">
      <ul className="WorkspacesListMenu text-black pb-3">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="" onClick={() => handleItemClick(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollMenuList;
