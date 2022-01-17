import { redirect } from "remix"

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const message = formData.get('message');

    console.log('got name:', name);
    console.log('got message: ', message)
    
    return redirect("/contact");
}


export default function ContactRoute() {
    return (
        <div>
            <h1>Contact</h1>
            <form method="post">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" />
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