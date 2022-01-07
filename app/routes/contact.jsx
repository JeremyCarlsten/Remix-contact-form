
// function validateName(name) {
//     if (!name || name.length === 0)
//         return "Pelase provide a name.";
// }

// function validateEmail(email) {
//     if (!email || email.length === 0)
//         return "Pelase provide a valid email.";
// }

// function validateMessage(message) {
//     if (!message || message.length < 10)
//         return "Message must be at least 10 characters.";
// }

export default function ContactRoute() {
    return (
        <div>
            <h1>Contact</h1>
            <form method="post">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label> <br />
                    <textarea name="message" rows={5} cols={50} id="message" />
                </div>
                <button type="submit">Send message</button>
            </form>
        </div>
    )
}