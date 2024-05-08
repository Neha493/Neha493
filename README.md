# scratch-starter
juspay assignment
Fetch Component is a function designed to retrieve a specific component based on a provided key. This function plays a crucial role in rendering components within the sidebar of the application. When invoked with a specific key, Fetch Component searches for and returns the corresponding component along with predefined default values. These components, along with their default values, are then seamlessly integrated into the sidebar interface, allowing users to interact with them as needed.



The sidebar is essentially a collection of draggable components, each representing different functionalities or features of the application. Users have the flexibility to drag any of these components from the sidebar into another draggable area known as the mid area. This mid area serves as a workspace or canvas where users can manipulate and interact with the components they've dragged from the sidebar. This drag-and-drop functionality enhances the user experience by allowing seamless organization and customization of the workspace according to individual preferences and requirements.




The "Run All" button functionality in the middle area is facilitated by a function that iterates over an array of keys representing different actions or functionalities. This function executes each action one after the other, with a specified delay between each action. As these actions are performed, a history of the executed actions is also maintained.This approach allows users to execute a sequence of predefined actions in the middle area with a single click. The delay between actions provides a structured flow to the execution process, ensuring that each action completes before the next one begins. Additionally, the history feature enables users to track and review the sequence of actions that were executed, providing transparency and accountability for the performed tasks.





The history in this context refers to a Redux state that stores all the values present in the middle area of the application. This history state captures the state of the application at different points in time, recording changes made to the middle area.The history state enables the application to track and store a chronological sequence of changes, providing a record of past actions performed by the user. This history data can then be used to render the history component, which displays a visual representation of the recorded actions.The history component renders the values stored in the history state, allowing users to review past changes and interactions within the middle area. This feature enhances the usability of the application by providing users with a means to track their activity and revisit previous states of the application as needed.
