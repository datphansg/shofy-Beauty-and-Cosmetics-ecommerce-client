import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { createTransport } from 'nodemailer';
import { googleEmailConfig } from './googleEmailConfig';

const myOAuth2Client = new google.auth.OAuth2(
    googleEmailConfig.clientId,
    googleEmailConfig.clientSecret,
    "https://developers.google.com/oauthplayground" // Redirect URL đã cấu hình trong Google Console
);
// export const sendEmailService = async (htmlContent: string): Promise<void> => {
//     try {
//         const nodemailer = require('nodemailer');
//         myOAuth2Client.setCredentials({
//             refresh_token: googleEmailConfig.refreshToken,
//         });

//         const accessToken = await myOAuth2Client.getAccessToken();
//         if (!accessToken.token) {
//             throw new Error("Failed to get access token");
//         }
//         let transporter = nodemailer.createTransport({
//             service: "gmail",
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//               type: "OAuth2",
//               user: "dat.phan304@gmail.com",
//               clientId: googleEmailConfig.clientId,
//               clientSecret: googleEmailConfig.clientSecret,
//               refreshToken: googleEmailConfig.refreshToken,
//               accessToken: accessToken.token,
//               expires: 1484314697598,
//             },
//           });
//         //const smtpTransport = createTransport(transportOptions);
//         //const htmlContent = createOrderDetailsHtml(orderInfo);
        
//         await transporter.sendMail({
//             from: "sender@example.com",
//             to: "duyphan13062012@gmail.com",
//             subject: "Message",
//             html: htmlContent,
//             auth: {
//               user: "dat.phan304@gmail.com",
//               refreshToken: googleEmailConfig.refreshToken,
//               accessToken: accessToken.token,
//               expires: 1484314697598,
//             },
//           });      
//     } catch (error: any) {
//         console.error("Error sending email:", error);
//         throw new Error("Failed to send email");
//     }
//   };

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const body = await req.json();
            try {
                const nodemailer = require('nodemailer');
                myOAuth2Client.setCredentials({
                    refresh_token: googleEmailConfig.refreshToken,
                });
        
                const accessToken = await myOAuth2Client.getAccessToken();
                if (!accessToken.token) {
                    throw new Error("Failed to get access token");
                }
                let transporter = nodemailer.createTransport({
                    service: "gmail",
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                      type: "OAuth2",
                      user: "dat.phan304@gmail.com",
                      clientId: googleEmailConfig.clientId,
                      clientSecret: googleEmailConfig.clientSecret,
                      refreshToken: googleEmailConfig.refreshToken,
                      accessToken: accessToken.token,
                      expires: 1484314697598,
                    },
                  });
                //const smtpTransport = createTransport(transportOptions);
                //const htmlContent = createOrderDetailsHtml(orderInfo);
                const now = new Date();

                // Lấy ngày, tháng, năm, giờ, phút, giây
                const day = String(now.getDate()).padStart(2, '0');
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const year = now.getFullYear();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');

                // Lấy thời gian hiện tại tính bằng milliseconds và nanoseconds
                const hrTime = process.hrtime();
                const ticks = BigInt(Date.now()) + BigInt(hrTime[1] / 100); // Kết hợp milliseconds với nanoseconds

                // Chuỗi theo định dạng yêu cầu
                const formattedDate = `${ticks}-${day}${month}${year}`;
                const formattedTime = `${hours}:${minutes}:${seconds}`; // Giờ thêm vào ngày
                // Tạo thông điệp hoàn chỉnh
                const msg = `Hóa Đơn Số ${formattedDate} Ngày ${day}/${month}/${year} lúc ${formattedTime}`;
                console.log(msg);
                await transporter.sendMail({
                    from: "myphamchinhhang@gmail.com",
                    to: "duyphan13062012@gmail.com",
                    subject: msg,
                    html: body,
                    auth: {
                      user: "dat.phan304@gmail.com",
                      refreshToken: googleEmailConfig.refreshToken,
                      accessToken: accessToken.token,
                      expires: 1484314697598,
                    },
                  });      
            } catch (error: any) {
                // console.error("Error sending email:", error);
                throw new Error("Failed to send email");
            }
            // Tiếp tục xử lý logic của bạn với body (ví dụ: gửi email)
            // await sendEmailService(body);
            return NextResponse.json({ message: "Email sent successfully" });
        } catch (error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
      } else {
       // res.setHeader('Allow', ['POST']);
       // res.status(405).end(`Method ${req.method} Not Allowed`);
      }
}
