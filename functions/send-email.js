export async function onRequestPost({ request, env }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const mailgunUrl = `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`;
    const params = new URLSearchParams();
    params.append("from", `joshuavanarsdale.com Contact Form <contactform@${env.MAILGUN_DOMAIN}>`);
    params.append("to", "josh@joshuavanarsdale.com");
    params.append("subject", subject);
    params.append("text", `From: ${name} <${email}>\n\nMessage: ${message}`);

    try {
        const response = await fetch(mailgunUrl, {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`,
            },
            body: params,
        });

        if (response.ok) {
            return Response.redirect(new URL("/thank-you/", request.url), 302);
        } else {
            const error = await response.text();
            return new Response(`Failed to send email: ${error}`, { status: 500 });
        }
    } catch (error) {
        return new Response(`Error: ${error.message}`, { status: 500 });
    }
}
