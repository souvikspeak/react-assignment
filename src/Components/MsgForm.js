import React, {useState} from "react";
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form,
} from "reactstrap";
import {v4} from "uuid"


const MsgForm = ({ addMsgs}) => {
    const [msgString, setMsgString] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (msgString === "") {
            return alert("Please type your post");
        }
        const msg = {
            msgString,
            id: v4()
        }
        addMsgs(msg);

        setMsgString("");

    };


    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="msg"
                id="msg"
                placeholder="Compose your post"
                value={msgString}
                onChange={e => setMsgString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="success"
                    >Add Post</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
        
    )
}


export default MsgForm;