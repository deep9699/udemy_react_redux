import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this ?
                </div>
            </ApprovalCard>
           <ApprovalCard>
               {/* props.children in ApprovalCard */}
           <CommentDetail author="Deep" timeAgo="Today at 4:45PM" comment="Nice Blog!" image={Faker.image.image()}></CommentDetail>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Vidhi" timeAgo="Today at 11:00AM" comment="Like the subject" image={Faker.image.image()}></CommentDetail>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Raj" timeAgo="Today at 2:00PM" comment="Like it!" image={Faker.image.image()}></CommentDetail>
           </ApprovalCard>
           

        </div>
    )
}

ReactDOM.render(<App />,document.querySelector("#root"));