export async function onRequestPost(context) {
    const formData = await context.request.formData();
    const hcaptchaResponse = formData.get("h-captcha-response");

    if (!hcaptchaResponse) {
        return new Response("hCaptcha verification failed", { status: 400 });
    }

    const secretKey = env.HCAPTCHA_SECRET_KEY;
    const verificationUrl = "https://api.hcaptcha.com/siteverify";
    
    const response = await fetch(verificationUrl, {
        method: "POST",
        body: new URLSearchParams({
            secret: secretKey,
            response: hcaptchaResponse
        })
    });

    const result = await response.json();

    if (!result.success) {
        return new Response("hCaptcha verification failed", { status: 400 });
    }

    return new Response("Form submitted successfully", { status: 200 });
}
