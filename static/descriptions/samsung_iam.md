# 🧠 Samsung IAM System – Unified Cloud Access & Identity Management

> A globally adopted, patent-backed platform providing secure, audited, and 1-click access to over 1500 cloud resources across AWS, Azure, and GCP — powering 50+ Samsung Smart TV services with zero-trust security and near-perfect availability.

---

## 🚀 Overview

Over four years, this project transformed Samsung's cloud access ecosystem. It replaced fragmented, insecure credential sharing practices with a **unified, audited, zero-trust IAM system**. The platform ensures **granular control, real-time monitoring, and global accessibility** for teams managing over **5,000 servers and 700+ databases** across divisions.

---

## 💡 Motivation

Cloud teams were sharing static credentials with shared users, making it impossible to enforce access boundaries or trace individual activity. This system was designed to:
- Enforce **fine-grained access** (down to DB and OS-level)
- Provide **centralized cloud visibility** across providers and regions
- Ensure **auditability** and compliance with standards like **PCI-DSS**, **GDPR**, **Samsung KNOX**, and **SDS policies**

---

## 🛠️ Tech Stack

| Category       | Tools / Technologies                                          |
|----------------|---------------------------------------------------------------|
| Backend        | Go (Golang), Python (FastAPI), SQLAlchemy                     |
| Frontend       | Angular, WebSockets (custom Go client with Fyne)             |
| Infra & IaC    | Terraform, Ansible, Jenkins, Nexus, Docker, ECS, Fargate     |
| Cloud & APIs   | AWS (RDS, Lambda, Batch, EC2, Athena, CloudTrail), Azure, GCP |
| Security       | Vault, LDAP, MFA, Active Directory, RBAC, Anti-CSRF          |
| Monitoring     | Grafana, Prometheus, Kafka, CloudWatch                       |

---

## ✨ Features

- 🔐 **1-Click Secure Access** to 1500+ resources across 3 cloud providers
- 🧭 Centralized web app (multi-OS) with machine-level authentication
- 🛡️ **Zero-trust** design: time-bound, per-request user creation + password rotation
- 📊 **Audit & Monitoring**: activity logs analyzed with CloudTrail, Athena, Kafka
- 🔁 100+ REST APIs supporting user management, logs, batches, automation
- 🧪 ML-based anomaly detection for user activity & intrusion alerts
- 📦 RDS audit support across MySQL, PostgreSQL, Oracle, SQL Server
- ⚙️ 30+ infrastructure batches using AWS Batch & Jenkins for config tasks
- 🚀 CI/CD pipelines with code quality (SonarQube), security bots & DevSecOps

---

## 🔍 Architecture / Design

- **Microservices architecture** (Go + Python FastAPI), highly modular and horizontally scalable
- **Cloud-agnostic** IaC stack with Terraform + Ansible, ensuring portability
- **WebSocket-based desktop client** built in Go (replacing legacy C#)
- **Real-time observability** stack: Prometheus + Grafana + Kafka
- **Domain-joining automation** for 15+ Linux flavors + Windows, integrating with Active Directory

---

## 🧠 Key Learnings

- Built secure cloud orchestration pipelines from scratch across 3 cloud vendors
- Designed OS-agnostic authentication systems from client to infra
- Bridged infrastructure, app, and security engineering into one robust ecosystem
- Led cross-functional teams and scaled engineering operations for global teams

---

## 📈 Impact & Results

- ⏱️ **Reduced server access time by 90%** (10+ mins ➝ < 1 min)
- 💰 **70% infra management cost reduction** via visibility + automation
- 🌎 **Adopted across 10+ Samsung divisions**, supporting 1,000+ daily users
- 🧠 Delivered **CI/CD, MFA, log analysis, and server onboarding automation** — end to end
- 🛠️ Replaced manual credential tracking with a live, per-access, password-rotated system

---

## 🛡️ Security Enhancements

- 🔐 Zero-trust model: no default access, every session is requested + approved
- ✅ Patented per-access user creation system with unique credentials
- 📜 Audit-compliant logging: S3 + Athena + Kafka, structured with Glue catalogs
- 🧩 MFA support, anti-CSRF, user session hardening, and fine-grained RBAC

---

## 📉 Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| OS/DB fragmentation (Linux, Windows, RDS, Oracle, etc.) | Modular drivers + adapters per system + real-time provisioning |
| Cloud heterogeneity | Cloud-agnostic architecture via Terraform, Ansible |
| Scaling access platform globally | Auto-scaling with ECS + Fargate + async batch operations |
| Compliance + Zero Trust enforcement | Password rotation, policy enforcement, time-bound access with audit trails |

---

## 🤝 Collaboration & Leadership

- Partnered with Samsung Visual Display, Digital Appliances, and internal Cloud teams
- Collaborated across **South Korea, China, Poland, Vietnam, Ukraine**
- Led cross-functional engineering teams (4–5 devs), owning multiple module releases
- Delivered yearly roadmaps covering:
  - Linux/Windows/RDS onboarding
  - MFA + log analysis
  - Azure & GCP extension
  - Legacy app modernization (C# ➝ WebSocket app)

---

## 🔗 Links

- 🔒 Internal Samsung system (confidential — demo available on request)
- 🏆 Patent filed: 1-Click Secure Access for Multi-Cloud Resources
