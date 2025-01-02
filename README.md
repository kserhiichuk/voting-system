# 🗳️ Voting Platform

A **Node.js Express** application for managing and participating in votings. This platform simplifies the process of creating, conducting, and analyzing voting sessions, providing a user-friendly and secure experience for administrators and participants alike.

---

## 🚀 Features

### 🔒 **Authorization**

- Secure user authentication ensures only authorized individuals can create or manage votings.

### 🗂️ **Voting Management**

- **Create a Voting**: Set up new voting sessions with custom options and details.
- **Open/Close Voting**: Control the status of each voting session to enable or disable participation.

### 📋 **Browse and Participate**

- **View All Votings**: Browse a list of all available voting sessions, including their current status.
- **View a Single Voting**: Check the details of a specific voting session, including its participants and results (if available).
- **Vote and Revote**: Participants can cast their votes or update them while the session is open.

### 📊 **Results and Sharing**

- **Access Results**: Generate detailed reports of voting outcomes.
- **Shareable Links**: Easily share results with participants or stakeholders via unique links.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: Sequelize with PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend** (Future Scope): Angular.js

---

## 💡 How It Works

1. **Setup**:

   - Authorized users log in to the platform to access voting management tools.

2. **Create Voting**:

   - Fill in the details, including the title, description, and voting options.

3. **Open/Close Voting**:

   - Control the session’s availability to allow or restrict participation.

4. **Participate in Voting**:

   - Cast or update votes while the session is open.

5. **View Results**:
   - Once voting is closed, results can be accessed and shared through a unique link.

---

## 🎯 Use Cases

- **Polls and Surveys**: Conduct quick and easy opinion polls.
- **Elections**: Organize voting for clubs, organizations, or small communities.
- **Decision Making**: Simplify group decision-making processes.

---

## 🚧 Future Enhancements

- **Frontend Integration**: Add a Angular.js interface for a more interactive user experience.
- **Advanced Analytics**: Include visual charts for voting results.
- **Real-Time Updates**: Show live voting progress during open sessions.
- **Role-Based Access**: Assign specific permissions to users based on their roles.

---

## 🏃‍♂️ How to run

- **Env Files**: Fill out backend .env file with the data as in the env.example.
- **Install packages**: Run `npm i`.
- **Start backend**: Run `npm run start:backend`.
- **Start frontend**: Run `npm run start:frontend`.

---

## 🏃 How to run tests

- **Unit and Integration**: `npm run test:backend`.
- **E2E**: Run `npm run cypress:open`.
- **Mutation**: Run `npx stryker run`.

---

## 😍 Lab 1

- **Solo project**
- **Idea -- Voting system**
- **Created repo**
- **Described idea in readme**

---

## 😮 Lab 2

- **Link: [commit](https://github.com/kserhiichuk/voting-system/tree/e62f754b70bc0ed89faf42ffeac32ec2ff946387)**
- **Created backend package (frontend will be later)**
- **Chose code style (not ideal but trying)**
- **Configured prettier**
- **Configured eslint**
- **Configured git hooks (at first husky but later simple git hooks)**

---

## 🤔 Lab 3

- **Diagram for project description**
  [![](https://mermaid.ink/img/pako:eNq9Vt1u0zAUfhXLN4DUTWvabF0ukLp1CNAqRls2ibQXWeO1EWlS8sP-Oolt_NwgDSG0OxBvwNa1rKy0ewX7jThOsrbZWjRQRC4c-_j4O9_xObbPLi6bKsESrlhKvYoKmaJRNBB8trvui4p4QSm_IIaK7i5t1S1i2_eK2NfhX3ZNTrtOFWU1VdXJpmKREpqaut-gH2mTHdA27UHbYW_YMb2gJ-wdO2ZHCEQnCCQ9-gM0LgIpbdETEHXYW0Qv2WvaR7CkD50O22cH7JA2AeA9X3kICLC8y1XOYdElqIBCA-UKcs50HWKXhgxHXfEnR_nzL1dQwAXfj2A59wE16Fd6yonQU04-ZCsGLIAWsD4FJufAu832pzgleub72kCLheUh8KJpOJap68QqXbf-ynQ0oyKver9bM5BuxyAM_gcWNUUz5Cw0UTMYAk-0PkkroPDNM9_30oaeDxKF_qIdngyQGB16RrvsiLbYMeLKd9hnyCueJM1GNnNtE7KQ8nrpKtNHOIyNViQcEJCw4exopiHn_f-AxhgSkdl0bWLJz6CZ7PTEBImMxPjdH0sjSpuEWyT_yV5ZMVRNVcDo4lVvwpZPzISAyyewNXLveUx6cMie5LIICLVB1Oc0uOHMAmC8dImu7RCuULph6noC_JORG6jjIhoZcihu0aBOjk4E-JkFHyT_dHnkeqQdrinIGcVR1hUb7G2DQigbwof9O71AsLjLPvB3E5j04LkDGP7sobRRcXXFaqDVteEltaqRTRstPc6XQpihzL4tajiiE5D5Hf2XuMNrfRwmlBX-wOvcqDweWHAbeaVHgBgqPdLyYD6YDkqPL0CsxfaBTHcQyJF3C4LoVyD8wPOIQ4AHak2YboFiP-i16U8JPSwUVvIot5QvoPTKo8a4omfEDRzDNWKB4yrUVbt8ooidKqmRIpagq5INxdUd7skeqEI4zfy2UcaSY7kkhi3TrVSxtKHoNozcOs_VjKbAltQGUqJqjmll_crNK-BiuK4Yz02zdgUDQyzt4i0sCUJyOiXOJQRxNjmXSIpiIoa3uXhaiIup-bgozM7NpFLJ1F4M73gIM9PzSXF2XozPCEI8mYonhL3fIgOyAw?type=png)](https://mermaid.live/edit#pako:eNq9Vt1u0zAUfhXLN4DUTWvabF0ukLp1CNAqRls2ibQXWeO1EWlS8sP-Oolt_NwgDSG0OxBvwNa1rKy0ewX7jThOsrbZWjRQRC4c-_j4O9_xObbPLi6bKsESrlhKvYoKmaJRNBB8trvui4p4QSm_IIaK7i5t1S1i2_eK2NfhX3ZNTrtOFWU1VdXJpmKREpqaut-gH2mTHdA27UHbYW_YMb2gJ-wdO2ZHCEQnCCQ9-gM0LgIpbdETEHXYW0Qv2WvaR7CkD50O22cH7JA2AeA9X3kICLC8y1XOYdElqIBCA-UKcs50HWKXhgxHXfEnR_nzL1dQwAXfj2A59wE16Fd6yonQU04-ZCsGLIAWsD4FJufAu832pzgleub72kCLheUh8KJpOJap68QqXbf-ynQ0oyKver9bM5BuxyAM_gcWNUUz5Cw0UTMYAk-0PkkroPDNM9_30oaeDxKF_qIdngyQGB16RrvsiLbYMeLKd9hnyCueJM1GNnNtE7KQ8nrpKtNHOIyNViQcEJCw4exopiHn_f-AxhgSkdl0bWLJz6CZ7PTEBImMxPjdH0sjSpuEWyT_yV5ZMVRNVcDo4lVvwpZPzISAyyewNXLveUx6cMie5LIICLVB1Oc0uOHMAmC8dImu7RCuULph6noC_JORG6jjIhoZcihu0aBOjk4E-JkFHyT_dHnkeqQdrinIGcVR1hUb7G2DQigbwof9O71AsLjLPvB3E5j04LkDGP7sobRRcXXFaqDVteEltaqRTRstPc6XQpihzL4tajiiE5D5Hf2XuMNrfRwmlBX-wOvcqDweWHAbeaVHgBgqPdLyYD6YDkqPL0CsxfaBTHcQyJF3C4LoVyD8wPOIQ4AHak2YboFiP-i16U8JPSwUVvIot5QvoPTKo8a4omfEDRzDNWKB4yrUVbt8ooidKqmRIpagq5INxdUd7skeqEI4zfy2UcaSY7kkhi3TrVSxtKHoNozcOs_VjKbAltQGUqJqjmll_crNK-BiuK4Yz02zdgUDQyzt4i0sCUJyOiXOJQRxNjmXSIpiIoa3uXhaiIup-bgozM7NpFLJ1F4M73gIM9PzSXF2XozPCEI8mYonhL3fIgOyAw)
- **ER Diagram**
  [![](https://mermaid.ink/img/pako:eNqdU11vmzAU_SuWn2kUCCSEN9TQDk2hVaDVNCFFFnYTq2Aj23Tt0vz32YGGpGWV2jff4-Nz7ofvDhYcExhAIhYUbQSqcgbAXRqtUrAzRwDiJAMUg9ufbXgfri5_hCvAUEXOkZJvKDuHaiTlHy6wQff54fL-JouT6_-pm7CRRKw1dvXOUVFVdpZZ9CsDmMhC0FpR3rlGyd0SSIVUI3u1J66IXLOm6l7GyyjNwuUtKARBiuA1UifZXYbJIl6EWfRZglqSss1Qin1TPlj35UdfKX7Yz6AFYphiXUJ_0XmkUZrGN8m3eswfCXvfKfJcU6ErOetU-0deXy8u-O441ADksO2rzOEQK-o4SKohxjFzQ9qijvKm3pFOZmRolBVlg8kwt7c8qp08_0ASpCD0qdWCFqyIqBDFej0Oncyh2hI9YGiomDygplSGuddU1CievrACBko0xIKCN5stDB5QKXXU1GZQ3YYdUYKp4mLZLuBhDy1YI_ab8-pNRocw2MFnGDiOO_K92cTxpu5s4nrexIIvBh45tufPbc-Zzsa-7_p7C_49KIxHc9ebzj177Di269sTZ_8Ps2YujA?type=png)](https://mermaid.live/edit#pako:eNqdU11vmzAU_SuWn2kUCCSEN9TQDk2hVaDVNCFFFnYTq2Aj23Tt0vz32YGGpGWV2jff4-Nz7ofvDhYcExhAIhYUbQSqcgbAXRqtUrAzRwDiJAMUg9ufbXgfri5_hCvAUEXOkZJvKDuHaiTlHy6wQff54fL-JouT6_-pm7CRRKw1dvXOUVFVdpZZ9CsDmMhC0FpR3rlGyd0SSIVUI3u1J66IXLOm6l7GyyjNwuUtKARBiuA1UifZXYbJIl6EWfRZglqSss1Qin1TPlj35UdfKX7Yz6AFYphiXUJ_0XmkUZrGN8m3eswfCXvfKfJcU6ErOetU-0deXy8u-O441ADksO2rzOEQK-o4SKohxjFzQ9qijvKm3pFOZmRolBVlg8kwt7c8qp08_0ASpCD0qdWCFqyIqBDFej0Oncyh2hI9YGiomDygplSGuddU1CievrACBko0xIKCN5stDB5QKXXU1GZQ3YYdUYKp4mLZLuBhDy1YI_ab8-pNRocw2MFnGDiOO_K92cTxpu5s4nrexIIvBh45tufPbc-Zzsa-7_p7C_49KIxHc9ebzj177Di269sTZ_8Ps2YujA)
- **How data is being updated/changed/aggregated**: Regarding auth, data manipulation is straightforward. For sign up user data is written to the table and a new row in sessions table created. Voting data is managed through various operations that handle creation, updating, and aggregation. When a new voting is created, it includes associated candidates and is linked to the user who created it. Votes cast by users update the vote count for specific candidates and ensure that the user's voting choice is recorded. If a user retracts their vote, the system decreases the vote count and removes their participation record. The status of a voting, such as whether it is active, closed, or completed, can be modified by authorized users. Aggregation of data occurs when fetching results, where all candidates and their vote counts are retrieved and presented. Additionally, votings can be deleted entirely by the creator, ensuring outdated or unnecessary records are removed from the system.

## 😜 Lab 4

- **Link: [commit](https://github.com/kserhiichuk/voting-system/tree/4a1d941ddbfccc8ec8628b1cbcc54f088a2c372e)**
- **Implemented general scenarios using json files as a storage**

---

## 🤩 Lab 5

- **Link: [commit](https://github.com/kserhiichuk/voting-system/tree/1e03b14c610c61b9e24c64fd840d27b148e646a3)**
- **Rewrote business logic using Sequelize ORM and MySQL database**

---

## 💀 Lab 6

- **Jest: Created unit tests to fully cover votings controller [file](backend/src/controllers/votings.test.js)**
- **Jest: Created integration tests with database and server setup [file](backend/src/integration.test.js)**
- **Cypress: Created E2E tests that cover all elements of the system [file](cypress/e2e/test.cy.js)**
- **Stryker: Conducted mutation testing of unit and integration tests [config](backend/stryker.config.json)**
- **Unit & Integration Tests Report**: ![image](https://github.com/user-attachments/assets/48c66eb4-93bd-4e74-86f5-f335053d7b23)
- **Mutation Testing Report**: ![image](https://github.com/user-attachments/assets/422f1d64-f4b9-4b7c-b859-665e089fce37)
- **General Testing Report**: Unit and integration tests (Jest) provide good coverage, especially considering that most of the application's logic resides in the controllers. With 62.82% overall statement coverage and 40.42% branch coverage, the numbers are solid. Controllers and middleware are well-tested, while models, which primarily handle data structures, understandably have low coverage and don't require much attention.
Mutation testing (Stryker) shows a score of 32.68%, which highlights room for improvement in test effectiveness. Controllers have strong mutation coverage, reflecting decent logic validation, but there's still potential to cover more edge cases and decision paths. Models and routes, though less critical, could also benefit from slight improvements to ensure completeness. Regarding E2E testing, general scenarios are covered, but there's plenty more scenarios need to be tested before production.
The test suite is effective given the concentration of logic in the controllers. While these are good results, there’s room to improve branch coverage and strengthen assertions to further validate core logic and enhance test robustness.

---

## 😶‍🌫️ Lab 7

- **Configured CI**: When creating a new PR or a commit in it, the code is cheked for compliance with the prettier, the absence of linter errors, the fact that it is “built”, tests pass, and commits correspond to the selected description style. Github is configured so that you can merge a PR only if it passes CI. [file](.github/workflows/ci.yml)
- **Configured CD**: When adding new commits to main, there is automatically a new version of the software deployed on Render. Tried deploying frontend on gh pages but for some reason it only works with manual deploy.
- **Deploy**: [https://voting-system-1-mz90.onrender.com/](https://voting-system-1-mz90.onrender.com/): Warning: backend takes up to a minute to properly load, so please wait a bit.

---
