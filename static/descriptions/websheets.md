# 🧠 Websheets – No-Code Privacy-Aware Data Management

> A no-code framework for managing tabular data with fine-grained access control, inspired by Linux file system principles and built for privacy-critical applications.

---

## 🚀 Overview

**Websheets** empowers users to create, manage, and share structured datasets — all without writing backend, frontend, or database code. Designed with security and usability in mind, it provides a powerful interface for defining and enforcing row-, column-, and cell-level access policies.

---

## 💡 Motivation

Traditional data-sharing tools lack fine-grained control and are error-prone when it comes to access policies. This project, developed under **COMPAS Lab at Stony Brook University** with NSF support, aims to simplify secure data workflows for non-technical users by providing an intuitive, declarative privacy layer over tabular data.

---

## 🛠️ Tech Stack

| Category      | Tools / Tech |
|---------------|--------------|
| Frontend      | React, Ant Design |
| Backend       | Custom C modules |
| Scripting     | Bash (for Linux FS and environment scripts) |
| Architecture  | Microservices, Vagrant, Docker |
| Misc          | VM-based dev environments, Linux-based file policies |

---

## ✨ Features

- 🧱 Declarative policy language based on Forensic Query Language (FQL)
- 🛡️ Granular access controls (row, column, cell level)
- 🔧 Extensible UI for dataset configuration and policy editing
- 🔄 Backend logic written in performant native C
- 🐧 Linux-inspired architecture for policy enforcement and segregation

---

## 🔍 Architecture / Design

- Data and access policies are separated into layers — following principles of least privilege
- Policies are defined using a query language, parsed and enforced at runtime
- A virtual file system structure is mirrored for each user/session to simulate isolated views

---

<!-- ## 📸 Screenshots

> _(You can embed actual screenshots here when ready)_

--- -->

## 🧠 Key Learnings

- Integrated native C modules with modern web UIs
- Built Linux-style policy logic into a browser-friendly workflow
- Applied research principles to production-quality software
- Worked on a highly collaborative, interdisciplinary team
- Balanced privacy, performance, and UX goals

---

## 📈 Outcomes / Impact

- Piloted for internal research workflows within SECLAB
- Used in projects involving student and faculty data with sensitive access requirements
- Demonstrated scalability across multiple simulated workflows and user roles

---

## 🚧 Known Issues / Future Work

- Add real-time collaboration and versioning
- Integrate audit logging and policy visualization
- Support cloud-based storage backends beyond local FS

---

## 🔗 Links

- 🔗 [Live Demo / Internal Instance](#) *(available upon request)*
- 📄 [More about Secure Systems Lab](http://seclab.cs.sunysb.edu/seclab/)
- 🧑‍🏫 Developed under Prof. R. Sekar and Prof. S. Stoller

