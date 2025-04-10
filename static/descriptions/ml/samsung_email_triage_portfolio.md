
# ✉️ Intelligent Email Triage System  
**Project under: Samsung Customer Support Automation (Software Engineer – Full Stack)**  
**Tech: Python, Java, Spring, MySQL, Scikit-learn, BERT, Pandas, FastAPI**

---

## 📌 Overview  
To improve Samsung’s customer support responsiveness, we developed an AI-powered email triage system that automatically classifies incoming support tickets by **intent** and predicts their **priority** using a combination of NLP and metadata-based models. This significantly enhanced routing efficiency and enabled faster resolution for critical customer issues.

---

## 🎯 Objective  
- Automatically detect the **category** of a support email (e.g., billing, technical, account recovery)  
- Predict the **urgency level** of the ticket (High / Medium / Low)  
- Use model outputs to optimize routing and prioritization in the ticketing system

---

## 💡 Use Case Scenarios  
- A user emails about a billing error — it gets instantly flagged as “Billing Issue” and marked High Priority  
- A question about warranty status is classified as “General Inquiry” and routed with Medium priority  
- Urgent device malfunction reports are flagged and escalated faster  

---

## 🧠 Machine Learning Design  

### Email Intent Classification  
- **Model:** Multiclass text classifier using TF-IDF + Logistic Regression (later upgraded to BERT)
- **Labels:** Derived from historical tags used by agents
- **Evaluation:** Accuracy ~85%, F1-score ~0.82 on 10-category classification  
- **Use:** Triggers intelligent routing to agent teams (billing, tech, etc.)

### Ticket Priority Prediction  
- **Model:** Random Forest and XGBoost using both text + metadata  
- **Features:** Sentiment score, keywords, email length, past user complaints, email timing  
- **Classes:** High / Medium / Low  
- **Evaluation:** AUC ~0.91, accuracy ~87%  
- **Use:** Prioritization queues and alerting for high-urgency issues

---

## ⚙️ Architecture  

```
[Incoming Email] --> [Preprocessing] --> [Intent Classifier] --> [Priority Scorer]
                                                            |                 |
                                                     [Category Tag]   [Urgency Score]
```

- RESTful APIs (Java Spring + FastAPI microservices)
- Models served via Flask/FastAPI endpoints, invoked by backend
- Stored output in ticket DB with metadata and action logs

---

## 📈 Impact  
- **Reduced average ticket routing time by 70%** through intelligent categorization  
- **Improved SLA adherence by 25%** for high-priority tickets  
- **Increased agent satisfaction** by reducing misrouted queries and manual triage effort

---

## 📝 Resume Snippet  
> Developed an ML-powered email triage system for Samsung’s customer support, combining intent classification (TF-IDF + BERT) and priority prediction (XGBoost), reducing routing time by 70% and improving SLA adherence for high-priority tickets by 25%.

---

## 🔗 Future Enhancements  
- Add multilingual support (email intent detection in Hindi, Korean)  
- Integrate with LLMs for generative draft response suggestions  
- Build feedback loop for model retraining using ticket resolution outcomes  
