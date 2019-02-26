import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

//using a function component instead of a class based component and we are
//using useState hook system to use component level state access in a functional component

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
