import React from "react";

function Greetings(props) {
    const { lang, children } =  props;

    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
    }
    let greeting;

    if (greetings[lang]) {
        greeting = greetings[lang];
    } else {
        greeting = "Helo";
    }

    return (
        <div className="greetingsCss">
            {greeting} {children}
        </div>
    )
    
}

export default Greetings;

