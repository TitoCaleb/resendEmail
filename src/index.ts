import { Resend } from "resend";
import path from "path";
import fs from "fs";

const resend = new Resend(""); // Tu API Key de Resend

const sendEmail = async () => {
  try {
    const templatePath = path.join(__dirname, "/assets/emailTemplate.html");
    const template = fs.readFileSync(templatePath, "utf-8");

    const response = await resend.emails.send({
      from: "Test <test@resend.dev>", // Cambiar el dominio por el tuyo una vez verificado test@javimx.com
      to: ["anthony@customerscoops.com"],
      subject: "Template - Customer Scoops",
      html: template, // En assets cambias el HTML por el del template que debes hacer
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

sendEmail();
