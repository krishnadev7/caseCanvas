
# PantherCanvas 
## A Fullstack E-Commerce Shop for Custom Made Phone Cases

![Screenshot from 2024-09-14 10-00-23](https://github.com/user-attachments/assets/72ac0725-6d22-495c-a4cd-7bad087fe5a0)

PantherCanvas is a Next.js-based e-commerce platform specializing in customizable mobile cases for iPhone models. Users can upload their favorite images, choose colors, select phone models, and pick from a variety of styles and materials for their cases. The platform integrates Stripe for secure payments

## [Project Deployed link](https://panthercanvas.vercel.app/)
[PantherCanvas](https://panthercanvas.vercel.app/)



## 🚀 Features

🌐 Responsive UI made with ShadCN and Tailwind CSS for a seamless experience across devices

💳 Stripe payment gateway integration for secure and reliable payments

🖼️ Drag-and-drop image uploads with Uploadthing, making it easy to add custom designs

🗄️ PostgreSQL database with Prisma ORM for efficient data management

📱 Users can customize their phone cases with their favorite images

📧 Order details emailed to users via Resend and React Emails

🔑 Authentication using Kinde for secure user access

🛠️ Admin dashboard to manage orders, and more

⚡ And many more features!
## Tech Stack

**Client:** React, ReactQuery, TailwindCSS, Next.js, React-email

**Server:** Node, Express, Next.js, Stripe, Resend,

**Database:** Postgresql, Prisma

**Payment Gateway:** Stripe


## 📜 Installation

To get started with PantherCanvas, follow these steps:

Prerequisites

Make sure you have the following installed on your machine:

Git, Node.js, npm (Node Package Manager)

#### 1. Clone the repository:

```bash
  git clone https://github.com/krishnadev7/caseCanvas.git
```
#### 2. Clone the repository:

```bash
  cd caseCanvas
```
#### 3. Install the dependencies:

```bash
  npm install
```
#### 4. Start the development server:

```bash
 npm run dev
```
    
#### 5. Open your browser and navigate to http://localhost:3000 to view the application.

#### 6. Set up your environment variables by creating a .env.local file based on the .env.example provided.

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`KINDE_CLIENT_ID`:   go to kinde dashboard and paste your client id here

`KINDE_CLIENT_SECRET`: your kinde secret key here

`KINDE_ISSUER_URL`=https://yourkindeurl.kinde.com

`KINDE_SITE_UR`L=http://localhost:3000

`KINDE_POST_LOGOUT_REDIRECT_URL`=http://localhost:3000

`KINDE_POST_LOGIN_REDIRECT_URL` =http://localhost:3000/auth-callback`

`STRIPE_SECRET_KEY`: go to stripe dashboard and paste your stripe secret key here

`ADMIN_EMAIL`: add any email to access the admin dashboard

`UPLOADTHING_SECRET`: go to uploadthing website and paste your uploadthing secret key here

`UPLOADTHING_APP_ID`: go to uploadthing website and paste your uploadthing app id key here

`DATABASE_URL`: go to any postgresql db provider and paste DATABASE_URL here

`NEXT_PUBLIC_SERVER_URL`=http://localhost:3000

`STRIPE_WEBHOOK_SECRET`: create a stripe webhook secret key and paste here

`RESEND_API_KEY`: go to Resend and paste your api key here

## Project Demo video

https://github.com/user-attachments/assets/a1be08f0-3881-465f-b0bb-bf7844fc3540




## Screenshots
![Screenshot from 2024-09-14 10-00-23](https://github.com/user-attachments/assets/ba873b7f-e241-4432-8927-8e34cf390c2a)
![Screenshot from 2024-09-14 10-00-36](https://github.com/user-attachments/assets/9e219f47-1d13-4456-ada0-98817dbd5b88)
![Screenshot from 2024-09-14 10-01-07](https://github.com/user-attachments/assets/2d9ee04a-ca55-495b-a269-c95950d7fb51)
![Screenshot from 2024-09-14 10-01-22](https://github.com/user-attachments/assets/2a7f954d-fffd-4268-a138-7ea64bd909cc)
![Screenshot from 2024-09-14 10-01-47](https://github.com/user-attachments/assets/d3858054-dfcc-434b-ba33-5841d975b84f)
![Screenshot from 2024-09-14 10-02-01](https://github.com/user-attachments/assets/5ae4d7fb-d917-4c70-babd-822d0a7a5dfa)
![Screenshot from 2024-09-14 10-03-54](https://github.com/user-attachments/assets/0d8d099b-b03d-4e65-9a2f-059714e5d59b)
![Screenshot from 2024-09-14 10-11-56](https://github.com/user-attachments/assets/fbe7d652-466c-45dc-95bc-3a3909acc003)





