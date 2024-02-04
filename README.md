# Aksa-API
Aksa is an application to translate images with Sundanese text into Indonesian.

# Getting Started
1. Clone this repository
```
git clone https://github.com/SunScript-Unper/Aksa-API.git
```
2. Install Depedencies
```
npm i express cryptjs body-parser  cookie-parser cookie-session cors dotenv jsonwebtoken mysql2 nodemailer sequelize nodemon nodemail
```

# User API

### Method : 
> GET

* Show all users
```
GET ({HOST})/api/user/user
```
Response 
```
{
  "name": "Nizar Fadilah",
  "email": "hallo@nizar.com"
}
```

### Method : 
> POST

* Register User
```
POST ({HOST})/api/auth/signup
```
In the body request, copy this code as an example :
```
{
  "name": "Nizar",
  "email": "hallo@nizar.com",
  "password": "userpassword"
}
```
Response
```
{
  "status": "Success",
  "message": "Registrasi berhasil!"
}
```

* Login User
```
POST ({HOST})/api/auth/signin
```
In the body request, copy this code as an example : 
```
{
  "email": "hello@nizar.com",
  "password": "userpassword"
}
```
Response 
```
{
  "message": "Success",
  "loginResult": {
      "id": "1",
      "name": "Nizar",
      "email": "hello@nizar.com"
  }
}
```

* Logout User
```
POST ({HOST})/api/auth/signout
```
Response 
```
{
  "status": "Success",
  "message": "Logout berhasil"
}
```

* Update Email User
```
POST ({HOST})/api/user/update-email/:id
```
In the body request, copy this code as an example :
```
{
  "email": "hi@nizar.com"
}
```
Response
```
{
  "status": "Success",
  "message": "Email berhasil diubah!"
}
```

* Update Password User
```
POST ({HOST})/api/user/update-password/:id
```
In the body request, copy this code as an example : 
```
{
  "currentPassword": "passworduser",
  "newPassword": "passwordbaru",
  "confPassword": "passwordbaru"
}
```
Response
```
{
  "status": "Success",
  "message": "Password berhasil diubah!"
}
```

* Forgot Password User
```
POST ({HOST})/api/user/forgot-password
```
In the body request, copy this code as an example : 
```
{
  "email": "hello@nizar.com"
}
```
