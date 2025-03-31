# 🛡️ Samsung Security & Operations HUB (SOH)

> A zero-trust, multi-cloud security platform enabling infrastructure observability, vulnerability detection, and firewall governance across AWS, Azure, and GCP — built to scale with serverless architecture, CI/CD, and automation-first principles.

---

## 🚀 Overview

**Samsung SOH** was designed to extend the security capabilities of Samsung’s IAM platform. It provides **infrastructure-wide visibility and control** across 50+ global Smart TV and appliance service teams.

The platform integrates:
- 🔐 **Firewall access governance**
- 🧪 **Vulnerability scanning (OpenVAS)**
- 📊 **Security analytics dashboards**
- ⚙️ **Real-time alerting and auto-remediation**

---

## 💡 Motivation

After successfully implementing Samsung’s IAM system, there was a critical need for:
- Monitoring widespread cloud resource configurations
- Scanning for vulnerabilities like Log4Shell (Log4j)
- Managing firewall rules across inconsistent cloud platforms
- Providing a unified control center for engineering, security, and infra teams

The SOH system became the **single source of security posture** for all service teams.

---

## 🛠️ Tech Stack

| Category        | Tools / Tech                                      |
|------------------|---------------------------------------------------|
| Frontend         | Next.js                                           |
| Backend APIs     | Python (FastAPI) on AWS Lambda                    |
| Infrastructure   | Terraform, Ansible                                |
| Scanning / CI    | OpenVAS, Jenkins, SonarQube, Security CI Bots     |
| Containers       | AWS Fargate, Docker (sandbox scans)               |
| Monitoring       | ELK Stack, Prometheus, Grafana                    |
| Scripting / Batch| Go (for firewall automation, batch orchestration) |

---

## ✨ Features

- 🔐 **Zero-trust access** control backed by IAM system (SSO, MFA, RBAC)
- 🌐 **Firewall Dashboard** to view, modify, and audit ingress rules across AWS, Azure, GCP
- 📦 **OpenVAS integration** to scan for CVEs and Linux-level vulnerabilities
- 🧪 **Sandbox container execution** for patch simulation before rollout
- ⚠️ **Real-time alerts** on firewall drift or detected threats
- 🧭 **Custom Go-based batches** for automating infrastructure fixes

---

## 🔍 Architecture / Design

- Fully **serverless backend** (Python FastAPI + AWS Lambda)
- **UI served via S3-hosted static Next.js site**, calling APIs directly
- **Event-driven scans and alerts** using OpenVAS with asynchronous triggers
- Terraform modules for secure provisioning; Ansible for firewall and patch deployment
- Modular firewall adapters for each cloud provider

---

## 📈 Outcomes & Metrics

- 🚨 Detected 100+ firewall violations in first month, reduced to <5% over 1 year
- 🧪 Detected multiple CVEs in staging/dev using OpenVAS scans with ~70% threat coverage
- ⚙️ Reduced provisioning time by 40% with serverless + IaC model
- 📊 Improved infrastructure scalability by 70% using containerized sandbox testing with ECS Fargate
- 🧠 Empowered 10+ global Samsung divisions with a unified, real-time SecOps dashboard

---

## 🧠 Key Learnings

- Integrated zero-trust principles into multi-cloud firewall governance
- Balanced real-time alerts with async CVE scans to avoid dev disruption
- Used serverless architecture effectively to scale without infra bottlenecks
- Applied vulnerability scanning into CI/CD flow without false positives

---

## 🚧 Future Work

- Expand to include auto-remediation pipelines with policy-as-code (OPA)
- Add agentless scanning of Kubernetes clusters
- Deploy anomaly detection using ML on historical firewall changes

---

## 🔗 Links

- 🔒 Internal project under Samsung Global Infrastructure team  
- 🔁 Built as an extension of [Samsung IAM System](https://anishphilip012git.github.io/portfolio/projects/samsung_iam) (related project)

---

## 🧩 Related Projects

- [Samsung IAM System](https://anishphilip012git.github.io/portfolio/projects/samsung_iam) – Role-based, zero-trust access platform  
- [Global CI/CD Pipeline](#) – Infrastructure automation and security integrations  
