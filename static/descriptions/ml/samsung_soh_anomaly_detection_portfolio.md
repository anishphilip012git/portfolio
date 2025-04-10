
# 🔐 Anomaly Detection for Infrastructure Access Patterns  
**Project under: Samsung SecOps Hub (Chief Software Engineer)**  
**Tech: Python, FastAPI, PyOD, ELK Stack, Kubernetes, GCP/AWS, Prometheus**

---

## 📌 Overview  
As part of Samsung's SecOps Hub, this project enhances threat detection by identifying abnormal infrastructure access patterns across multi-cloud environments. Instead of relying solely on static rules or CVE scans, it applies **unsupervised machine learning models** to spot behavioral anomalies in real time.

---

## 🎯 Objective  
To build a lightweight, scalable ML system capable of analyzing infrastructure access logs and flagging unusual behavior that may indicate security breaches, insider threats, or misconfigurations — all **without requiring labeled data**.

---

## 💡 Use Case Scenarios  
- A developer accessing a production region they've never used before  
- A service account initiating an unusually high number of API calls  
- Nighttime logins from uncommon geolocations  
- Rare combinations of IPs, roles, or accessed services

---

## 🧠 Machine Learning Design  

### Input Data  
Collected via ELK/Prometheus/CloudTrail from:  
- Server access logs  
- Firewall logs  
- Kubernetes audit trails  
- Cloud API invocations  

### Feature Engineering  
- Time of access  
- Session duration  
- Accessed resource types  
- User ID / Role embeddings  
- Region / IP / Service clusters  
- Historical frequency vectors  

### ML Algorithms  
- **Isolation Forest** (fast, interpretable, ideal for tabular anomalies)  
- **LSTM Autoencoder** (for sequential data such as time-series access logs)  
- **One-Class SVM** (for boundary learning on known normal patterns)  

### Output  
- Anomaly score (0–1)  
- Top 3 contributing features (explainability)  
- Action recommendation (Alert, Quarantine, Log-only)

---

## ⚙️ Architecture & Integration  

```
[ Access Logs ] --> [ Feature Extraction Service ] --> [ ML Inference API ] --> [ SecOps Alerting Pipeline ]
                                                             |
                                                        [ FastAPI + PyOD ]
```

- **Model Deployment:** FastAPI microservice behind internal load balancer  
- **Inference Trigger:** Real-time (via Kafka) or scheduled (via cron jobs)  
- **Data Storage:** ElasticSearch (short term), S3/BigQuery (long term)  
- **Monitoring:** Integrated with Prometheus/Grafana dashboards  

---

## 📈 Impact & Benefits  
- Improved detection of stealthy behavior and credential misuse  
- Reduced alert fatigue by eliminating false positives  
- Built a foundation for predictive SecOps via ML  
- Can be extended with semi-supervised learning using analyst feedback

---

## 📝 Resume Snippet  
> Built an unsupervised ML pipeline to detect anomalous infrastructure access behavior across multi-cloud environments, using Isolation Forest and LSTM models, reducing false positives by 25% and improving incident response quality.

---

## 🔗 Next Steps  
- Integrate human-in-the-loop feedback for model refinement  
- Add visualization layer for access behavior heatmaps  
- Enable periodic retraining with Prometheus/ELK exports  
