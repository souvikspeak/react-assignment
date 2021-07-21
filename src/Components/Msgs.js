import React from "react"
import {ListGroup, ListGroupItem} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";

const Msgs = ({msgs, markComplete}) => {
    return(
        <ListGroup className="mt-5 mb-2 items">
            {msgs.map(msg => (
                <ListGroupItem key={msg.id}>
                    {msg.msgString}
                    <span className="float-right"
                    onClick={() => markComplete(msg.id)}><FaCheckDouble/></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Msgs;