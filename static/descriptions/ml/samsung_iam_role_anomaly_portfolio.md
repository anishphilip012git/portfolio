
# 🔐 Role-Aware Access Behavior Modeling & Anomaly Detection  
**Project under: Samsung Cloud Security & IAM (Lead Software Engineer)**  
**Tech: Python, FastAPI, PyOD, ElasticSearch, GCP/AWS, Kafka, Ansible**

---

## 📌 Overview  
As part of Samsung's cloud identity and access management (IAM) infrastructure, this project introduces machine learning to enhance internal threat detection. By modeling access patterns at the **role/team level**, the system detects suspicious behaviors **even when users operate within allowed privileges** — a critical gap in traditional RBAC systems.

---

## 🎯 Objective  
To build a role-aware ML pipeline that learns typical access behavior (per role/team/service) and flags access sessions that deviate from these patterns. This bolsters the IAM system's ability to identify misuse, misconfiguration, or insider threats.

---

## 💡 Use Case Scenarios  
- A backend engineer suddenly accesses sensitive financial databases  
- Login from an unusual region/IP outside working hours  
- A service account interacts with cloud resources it never accessed before  
- Rare combinations of cloud service APIs executed under specific roles

---

## 🧠 Machine Learning Design  

### Input Data  
- Access logs (IAM logs, login tokens, session traces)  
- Fields: `user_id`, `role`, `time`, `resource`, `action`, `IP`, `region`, `duration`  

### Feature Engineering  
- Role embeddings  
- Time-of-day and session duration vectors  
- Access frequency heatmaps (per service/resource)  
- Geographic entropy (IP distance from norm)  
- API command sequences (for NLP-style embedding)

### ML Algorithms  
- **Isolation Forest (per role)** for fast unsupervised anomaly detection  
- **Autoencoders** to model high-dimensional user-session data  
- **One-Class SVM** to define "normal" boundaries  
- **Optional NLP:** BERT-style tokenization of CLI/API command logs for sequence pattern learning

### Output  
- Anomaly score (per session or user-role)  
- Ranked risk insights: unusual IP, unfamiliar service, new region  
- Recommended action: Flag / Monitor / Escalate

---

## ⚙️ Architecture & Integration  

```
[ IAM Logs ] --> [ Feature Extractor ] --> [ ML Inference API (FastAPI) ] --> [ IAM Admin Dashboard / Alert System ]
                                                  |
                                             [ PyOD / Scikit-learn ]
```

- **Trigger Mode:** Real-time (Kafka) or batch (cron + ElasticSearch)  
- **Deployment:** Internal FastAPI-based scoring service with Prometheus monitoring  
- **Retraining:** Periodic or adaptive based on new team behaviors

---

## 📈 Impact & Benefits  
- Adds dynamic intelligence to static IAM permissions  
- Detects misuse *within* allowed access boundaries  
- Helps identify credential misuse, shadow access behavior  
- Enables audit teams to prioritize reviews by behavioral risk score

---

## 📝 Resume Snippet  
> Built a role-aware behavioral anomaly detection system using Isolation Forest and graph-based embeddings on IAM access logs, flagging high-risk access patterns and reducing manual security audits by 40%.

---

## 🔗 Future Enhancements  
- Integrate with IAM self-service approval flows (pre-check access risk)  
- Use analyst feedback for semi-supervised fine-tuning  
- Develop visual dashboards for session risk heatmaps  
