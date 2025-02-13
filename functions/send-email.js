export async function onRequestPost({ request, env }) {
    const formData = await request.formData();
    const response = formData.get("cf-turnstile-response");
    const secretKey = env.TURNSTILE_SECRET_KEY;
    const verificationUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
        const captchaRes = await fetch(verificationUrl, {
        method: "POST",
        body: new URLSearchParams({ secret: secretKey, response: cf-turnstile-response }),
    });
    const captchaResult = await captchaRes.json();
    if (!captchaResult.success) {
        return new Response("Turnstile verification failed", { status: 400 });
    }
    const email = formData.get("email");
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const mailgunUrl = `https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`;
    const params = new URLSearchParams();
    params.append("from", `joshuavanarsdale.com Contact Form <contactform@${env.MAILGUN_DOMAIN}>`);
    params.append("to", env.MAILGUN_RECIPIENT);
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
