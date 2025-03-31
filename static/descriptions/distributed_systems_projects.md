# 🧠 Fault-Tolerant Distributed Transaction System

> A highly available and durable distributed transaction system implementing consensus protocols like Raft, Multi-Paxos, and PBFT — with scalable storage, dynamic leader election, and robust recovery features.

---

## 🚀 Overview

This project delivers a fault-tolerant system for managing **distributed transactions** with **99.9% durability** and **sub-500ms latency**. It implements a fully functional **key-value store** with seamless **CRUD** operations across 20+ replicas. The platform combines **RAFT, Multi-Paxos, and PBFT** consensus algorithms with persistent log management and state checkpointing, leveraging **BoltDB**, **BadgerDB**, and **SQLite** in different subsystems.

---

## 💡 Motivation

Fault tolerance and consensus are the foundation of reliable distributed systems. This project explores the trade-offs of different consensus algorithms, persistence strategies, and inter-node communication layers to better understand how modern databases and fintech systems ensure **availability, consistency, and resilience**.

---

## 🛠️ Tech Stack

| Category       | Tools / Tech                                  |
|----------------|-----------------------------------------------|
| Languages      | Go, Python, Java                              |
| Protocols      | gRPC, Protobuf                                |
| Consensus      | RAFT (Modified), Multi-Paxos, PBFT (Optimized)|
| Persistence    | BadgerDB, BoltDB, SQLite                      |
| Deployment     | Docker, Make, Tmux                            |

---

## ✨ Features

- ⚙️ **Distributed Key-Value Store** with strong consistency across 20+ nodes
- 🔁 **RAFT protocol** with:
  - Leader election and heartbeat monitoring
  - Log replication, indexing, and crash recovery
  - Checkpointing via persistent storage (BadgerDB/BoltDB)
- 📦 **Storage Optimization**:
  - **BoltDB** for internal log management and quick lookups
  - **SQLite** used in lightweight replicas for query simulation and validation
  - **BadgerDB** as the main write-optimized store for durability
- 🔍 Consensus algorithm benchmarking:
  - Multi-Paxos vs RAFT vs PBFT (with Optimistic Phase Reduction)
- 📡 gRPC-based node communication using Protobuf schemas

---

## 🔍 Architecture / Design

- Modular design to plug in various consensus protocols
- Dedicated storage adapters for **BoltDB**, **BadgerDB**, and **SQLite**
- Log replication, commit acknowledgments, and recovery coordinated through protocol phases
- Follower/Leader state transitions managed via gRPC streaming with heartbeat intervals

---

## 🧠 Key Learnings

- Engineering persistent logs and snapshotting strategies with embedded databases
- Profiling Go code for memory and latency optimization in distributed scenarios
- Designing multi-protocol consensus modules with interchangeable logic layers
- Understanding network partitions, crash recovery, and asynchronous messaging

---

## 📈 Outcomes / Results

- ✅ 99.9% durability and availability in replicated environments
- ⏱️ Achieved <500ms latency for most transactions under simulated load
- 🔁 Successfully handled rolling failures and leader re-elections without data loss
- 📊 Benchmarked and compared protocol performance under network variability

---

## 🚧 Future Enhancements

- Add Prometheus metrics for real-time visualization
- Test with 100+ node simulation for long-term log compaction behavior
- Integrate SQL-based querying on top of KV layer (SQLite)
- Add Byzantine fault injection for PBFT stress testing

---

## 🔗 Links

- 🔗 [GitHub Repository](https://github.com/anishphilip012git/distributed-systems)
- 🛠️ Architecture diagrams and benchmarks (coming soon)
