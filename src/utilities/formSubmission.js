const submitForm = async (formData) => {
  const email = process.env.VUE_APP_EMAIL_ADDRESS;
  const apiKey = process.env.VUE_APP_SENDINBLUE_API_KEY;
  const url = "https://api.sendinblue.com/v3/smtp/email";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        to: [{ email: email }],
        htmlContent: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Subject: ${formData.subject}</p><p>Message: ${formData.message}</p>`,
        subject: "New message from your portfolio website!",
        sender: { email: email },
      }),
    });

    if (response.ok) {
      return response;
    } else {
      throw new Error("There was an error with sending your message.");
    }
  } catch (error) {
    console.error(error);
    throw new Error("There was an error with sending your message.");
  }
};

export default submitForm
