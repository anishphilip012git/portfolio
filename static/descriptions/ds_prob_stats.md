# 🧠 Complex Data Analysis and Predictive Modeling for Urban Transportation

> A full-stack statistical and predictive modeling pipeline built on urban taxi data, uncovering mobility trends and driving informed decision-making using rigorous statistical and machine learning methods.

---

## 🚀 Overview

This project involved architecting and implementing an end-to-end data science framework on a large-scale urban transportation dataset, specifically NYC taxi trip data. The goal was to uncover actionable insights through in-depth statistical analysis, predictive modeling, and time series forecasting — enabling better urban planning and decision support.

---

## 💡 Motivation

Urban mobility generates massive volumes of data, yet much of it remains underutilized. The objective of this project was to explore statistical and probabilistic techniques to extract value from trip-level taxi data — improving understanding of rider behavior, trip dynamics, and temporal trends.

---

## 🛠️ Tech Stack

| Category       | Tools / Techniques             |
|----------------|--------------------------------|
| Languages      | Python                         |
| Libraries      | NumPy, Pandas, SciPy, Statsmodels, Matplotlib, Seaborn |
| Tools          | Jupyter Notebooks              |
| Methods        | Regression, Hypothesis Testing, Time Series Forecasting, Bayesian Inference |

---

## ✨ Features

- 🧼 Built a robust data cleaning pipeline to handle missing values, anomalies, and inconsistencies at scale
- ⚖️ Applied **Tukey's rule** and statistical thresholds to filter outliers in passenger count, duration, and fare
- 🔬 Conducted rigorous **hypothesis testing** using Wald’s test, Z-test, and t-test under multiple assumptions
- 📊 Performed distributional analysis using **Kolmogorov-Smirnov (K-S)** and **permutation tests**
- 🔍 Designed and evaluated **linear regression** (univariate and multivariate) using SSE and MAPE metrics
- 📈 Developed **time series models** (AR, EWMA) to forecast trip amounts across time
- 🧠 Executed **Bayesian inference** with sequential updating to model trip distance distributions
- 💡 Applied **chi-square tests** to evaluate categorical dependencies (e.g., tip amount vs. passenger count)

---

## 🔍 Architecture / Design

- Modular pipeline: `cleaning → EDA → outlier handling → modeling → validation → inference`
- Separated exploratory analysis from hypothesis-driven components
- Each statistical method validated with real assumptions and performance metrics
- Jupyter notebooks structured for reproducibility and narrative-style reporting

---

## 🧠 Key Learnings

- Applied a wide variety of statistical tests with domain relevance
- Gained deep experience in **Bayesian modeling** and posterior updates
- Understood the impact of outliers and noise on predictive performance
- Improved modeling interpretability through proper assumptions and visualizations

---

## 📈 Outcomes / Impact

- Improved model accuracy with clean data and tuned assumptions
- Uncovered critical trends in trip durations, fare distributions, and customer tipping behaviors
- Demonstrated how statistical techniques can yield valuable business insights from raw urban data

---

## 🚧 Future Improvements

- Extend to classification models (e.g., fraud detection or tip prediction)
- Explore clustering and segmentation for rider behavior
- Build dashboards to visualize real-time patterns and forecasts

---

## 🔗 Links

- 📓 Jupyter Notebooks (available on request or private repo)
