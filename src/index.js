// Semenntic ui
//nested componants
// faker library

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail.js";
import faker from "faker";
import ApprovalCard from "./ApprovalCard.js";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this??
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={"sam"}
          timeAgo={"4 : 45 am "}
          content={"some text"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
