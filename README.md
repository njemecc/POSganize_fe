
# 📊 POSGANIZE - Membership management application

POSGANIZE is a full-stack web application built using React for the frontend and Spring Boot for the backend. It serves as a membership organization tool and functions as an information system. There are two types of users: ADMIN and USER. The software is designed for clubs such as sports academies that offer various types of training memberships. An ordinary USER can purchase memberships for a specific period and attend the corresponding training sessions.


## Features

### ADMIN

- Access to the 'Users' page displays a list of all users with details including active membership status, allowing admins to view and manage memberships.
- Membership History on the "User Details" page enables admins to view a user's membership history and create new memberships.
- 'Dashboard' page provides graphical representations for selected time periods, displaying total income, attendance for each training, and the most popular training session.
- Access to the 'Trainings' page allows CRUD operations on individual training sessions and their schedules.
- 'News' page allows CRUD operations for posting sports-related news or club-specific updates.
- 'Rules Page' enables admins to manage club rules through adding or deleting rules.
Note: The admin account is pre-defined and represents the academy owner who purchases the software.

### USER
- Registration and login features with role-based authentication and UI rendering.
- Access to view training sessions and details without CRUD capabilities.
- Ability to add desired training sessions to the cart and proceed to checkout with:  [![Stripe Badge](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)
- After successful payment, the user is redirected to the profile page showing account information and newly acquired memberships.
- Access to view their own 'Profile Page' displaying personal account details.
- Ability to review their own 'Membership History' without access to others' membership records.
- Access to read the 'News' and 'Rules' sections.


## Run Locally

Clone the project

```bash
  git clone https://github.com/njemecc/POSganize_fe posganize_project 
```

Go to the project directory

```bash
  cd posganize_project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:**  

 [![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

  [![React Router Badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)


 [![React Query Badge](https://img.shields.io/badge/React_Query-FF0000?style=for-the-badge&logo=react&logoColor=white)](https://react-query.tanstack.com/)

 [![Redux Badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)

[![styled-components Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

[![Material-UI Badge](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)

**Server:** 

[![Spring Boot Badge](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)

[![Spring Data JPA Badge](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring-data&logoColor=white)](https://spring.io/projects/spring-data-jpa)

[![Spring Security Badge](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white)](https://spring.io/projects/spring-security)

[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)





## Developed by


 [![Frontend Badge](https://img.shields.io/badge/POSGANIZE.FE-FF5733?style=for-the-badge&labelColor=black&logoColor=white)](https://github.com/njemecc/POSganize_fe)
[![njemecc GitHub](https://img.shields.io/badge/GitHub-njemecc-black?style=for-the-badge&logo=github)](https://github.com/njemecc) 

[![Posganize.be - Backend](https://img.shields.io/badge/Posganize.be-28a745?style=for-the-badge&labelColor=black&logoColor=white)](https://github.com/Dz0nZ1/Posganize.be)
[![GitHub - dzonzi](https://img.shields.io/badge/GitHub-dzonzi-black?style=for-the-badge&logo=github)](https://github.com/Dz0nZ1) 
## Future plan

- mobile responsive design
