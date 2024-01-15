// pages/api/sendMail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstname, lastname, email, phone, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: 'smtp.mailcheap.co',
        port: 587,
        secure: false,
        auth: {
          user: 'votre_adresse_email@votredomaine.com',
          pass: 'votre_mot_de_passe',
        },
      });

      const mailOptions = {
        from: 'votre_adresse_email@votredomaine.com',
        to: 'adresse_email_destinataire@example.com',
        subject: 'Nouveau message de contact',
        text: `Nom: ${firstname} ${lastname}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'E-mail envoyé avec succès.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
