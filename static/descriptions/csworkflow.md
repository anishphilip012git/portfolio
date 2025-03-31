# 🧠 CSworkflow – Digitizing Departmental Operations

> A role-based workflow management system for academic departments, digitizing over 80% of manual processes and serving 5K+ users with high availability and efficiency.

---

## 🚀 Overview

**CSworkflow** is a comprehensive digitized workflow system used by the Computer Science department at Stony Brook University. It simplifies and automates document signing, student/faculty onboarding, approval chains, and record keeping — all while supporting flexible, reusable workflow logic and UI components.

---

## 💡 Motivation

Manual workflows in academic departments are slow, paper-heavy, and hard to track. This project was designed to centralize and streamline these processes, improve turnaround times, and reduce errors — especially for high-volume, multi-approval forms like TA assignments, PhD exams, and room/key access.

---

## 🛠️ Tech Stack

| Category      | Tools / Tech |
|---------------|--------------|
| Frontend      | TypeScript, React.js, Ant Design |
| Backend       | Node.js, Firebase, GCP Functions |
| Infrastructure| Docker, CI/CD Pipelines |
| APIs          | Google Apps Script, Adobe PDF APIs, Postal |
| Deployment    | GCP App Engine, Firestore |

---

## ✨ Features

- 🔐 Role-based access controls for students, faculty, and admins
- 📝 Automated PDF signing and reminders using Adobe and Google APIs
- 🔄 Step-based workflows for approvals (e.g., TA hiring, PhD exam scheduling)
- 📤 In-house email automation via Postal mail server
- ⚙️ Generic workflow engine decoupled from UI for modular expansion
- 🚀 CI/CD pipelines for smooth releases and auto-deployments

---

## 🔍 Architecture / Design

- Microservice-style deployment using GCP Functions and App Scripts
- Decoupled workflow rendering: UI is dynamically built from abstract workflow config
- Dockerized Postal mail server handles high-volume email delivery in-house
- Workflow designer PoC allows visual creation and preview of workflows

---

## 🧠 Key Learnings

- Developed a reusable architecture that supports rapid onboarding of new workflows
- Designed scalable CI/CD pipelines for GCP using GitHub + Bitbucket
- Integrated multiple APIs and managed secure PDF workflows with status tracking
- Led the engineering team while ensuring flexibility, maintainability, and rapid iteration

---

## 📈 Outcomes / Impact

- 🟢 **99.9% uptime** with scalable GCP backend
- ⏱️ **Reduced turnaround from >3 days to ~1 day**
- 💼 **80% of CS workflows digitized** and actively used
- 📊 **5K+ users benefited** including students, professors, and admins
- 📈 Annual active users: **1,000+**
- 🛠️ Admin load significantly reduced through auto-reporting and tracking

---

## 🚧 Future Improvements

- Expand visual workflow designer to support drag-and-drop customization
- Integrate analytics dashboard for usage tracking and bottleneck identification
- Add single sign-on (SSO) and enhanced user permissions

---

## 🤝 Collaboration & Team

- Team of up to 10 engineers
- Cross-functional collaboration with department admins and faculty
- Tools: Bitbucket, Trello, Slack for daily coordination
- I led the engineering team and spearheaded CI/CD and backend automation

---

## 🔗 Links

- 🔗 [Live Demo / Internal Access](#https://workflow.cs.stonybrook.edu/)
- 🧑‍🏫 Built under the guidance of Prof. Michael Ferdman at Stony Brook University
------
<!-- Unique architecture decisions
(e.g., Why GCP over AWS? Why use App Scripts instead of cron or Airflow?)

Security or compliance considerations
(e.g., handling personally identifiable information (PII) for students or faculty)

UI/UX insights
(e.g., What did users find helpful? Any feedback loops?)

Workflow modeling flexibility
(Your note about generic workflows is gold — could be emphasized more)

Any standout bug or optimization
(Something you fixed that significantly improved performance or user experience) -->