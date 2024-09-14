// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { orderInfo } = req.body;

    // Cấu hình transport cho nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Bạn có thể thay đổi thành dịch vụ email bạn sử dụng (SMTP, Outlook, v.v.)
      auth: {
        user: process.env.EMAIL_USER, // Đặt email của bạn trong biến môi trường
        pass: process.env.EMAIL_PASS, // Đặt mật khẩu email trong biến môi trường
      },
    });

    // Nội dung email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: orderInfo.email, // Gửi đến email người dùng
      subject: 'Xác nhận đơn hàng',
      text: `Cảm ơn ${orderInfo.name} đã đặt hàng!

      Đơn hàng của bạn đang trong quá trình xử lý và sẽ sớm được giao đi.
      
      Thông tin đơn hàng:
      - Tên: ${orderInfo.name}
      - Địa chỉ: ${orderInfo.address}
      - Liên hệ: ${orderInfo.contact}
      - Tổng tiền: ${orderInfo.totalAmount} USD
      - Phương thức thanh toán: ${orderInfo.paymentMethod}
      
      Cảm ơn đã tin tưởng và đặt hàng!`,
    };

    try {
      // Gửi email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
