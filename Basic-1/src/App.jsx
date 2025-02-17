import React from "react";
import Student from "./Contact";

function App() {
    return (
        <div className="Student-details">
            <Student 
                name="abc"
                roll="123"
                section="a"
                bull={true}
            />
            <Student      
                name="bcd"
                roll="234"
                section="b"
                bull={true}
            />
            <Student 
                name="cde"
                roll="345"
                section="c"
                bull={true}
            />
            <Student 
                name="def"
                roll="456"
                section="d"
                bull={true}
            />
        </div>
    );
}

export default App;
