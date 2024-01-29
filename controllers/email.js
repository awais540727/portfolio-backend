import nodemailer from "nodemailer";

export const emailController = async (req, res) => {
  //   console.log("body " + req.body);
  const { email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "awaisali786378@gmail.com",
      pass: "rwsonykfrsqptfbb",
    },
  });
  const sendEmail = () => {
    const mainOptions = {
      from: "awaisali786378@gmail.com",
      to: email,
      subject,
      message,
      html: `<h1>Hello! Welcome to My PortFolio</h1> I Have Received your Query :<h3> <b> "${message}" </b> </h3>  </br> I will get in touch with you Thanks`,
    };
    try {
      transporter.sendMail(mainOptions, (err, info) => {
        console.log(err, info);
        if (err) {
          return res.status(500).send({
            success: false,
            message: "Failed to send Email",
            error: err,
          });
        }
        if (info) {
          return res.status(200).send({
            success: true,
            message: "Email Sent Successfully",
            emailMessage: info.messageId,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  sendEmail();
};
