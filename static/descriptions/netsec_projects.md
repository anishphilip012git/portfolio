# 🛡️ Network Security Projects

> A curated collection of network security tools developed during the CSE508: Network Security course at Stony Brook University. These projects explore practical applications of cryptography, packet analysis, encrypted tunneling, and network reconnaissance.

---

## 📦 Projects

### 🔎 [SynProbe – Nmap-style TLS Service Fingerprinter](https://github.com/anishphilip012git/security/blob/main/synprobe_basedon_nmap/README.md)
> A custom-built service scanner using raw sockets and Scapy, capable of identifying running services across ports using TCP and TLS fingerprints.

- Protocol-aware, stateless scanner
- Handles timeouts and TCP retries gracefully
- Uses binary fingerprint matching for TLS handshake parsing
- Written in Python + Scapy

📸 *Includes CLI screenshots, test results, and raw output samples*  
🔗 [View Project README ›](https://github.com/anishphilip012git/security/tree/main/synprobe_basedon_nmap)

---

### 🧼 [ARPWatch & TLS/HTTP Traffic Sniffer](https://github.com/anishphilip012git/security/blob/main/tcpdump/README.md)
> Lightweight passive intrusion detection tool designed to detect ARP spoofing and sniff encrypted HTTP/TLS traffic.

- ARP poisoning alerts + interface monitoring
- Passive logging of TLS/HTTP headers (SNI, cert, host)
- Works on live interface or `.pcap` file
- Implements stream reassembly

📸 *Includes `pcap` analysis samples, alert outputs, and tool demo*  
🔗 [View Project README ›](https://github.com/anishphilip012git/security/blob/main/tcpdump/README.md)
🔗 [Also See ›](https://github.com/anishphilip012git/security/blob/main/scapy_and_arp/README.md)

---

### 🔐 [Jumproxy – Secure AES-256-GCM Encrypted Jump Proxy](https://github.com/anishphilip012git/security/blob/main/jumproxy/README.md)
> A secure TCP jump proxy that encrypts all communication between a client and server using AES-256-GCM. Designed for private routing, testing encrypted tunnels, or secure DevOps jump hosts.

- End-to-end encrypted proxy with AES-GCM
- Handshake + key derivation with nonce exchange
- Supports multi-hop and local/remote port forwarding
- Written in Go

📸 *Includes CLI usage examples, encrypted stream diagrams, and tests*  
🔗 [View Project README ›](https://github.com/anishphilip012git/security/blob/main/jumproxy/README.md)

---

### 📡 [Traffic Logger – Passive TLS/HTTP Classifier](https://github.com/anishphilip012git/security/blob/main/scapy_and_arp/README.md)
> A passive packet sniffer and traffic classifier that parses and identifies HTTPS/TLS or HTTP flows from live traffic or `.pcap` files.

- Detects and logs server IPs, ports, TLS/HTTP headers
- Infers service and site metadata without full decryption
- Focused on passive classification for visibility
- Written in Python using `scapy` and `dpkt`

📸 *Includes test captures, metadata logs, and usage breakdown*  
🔗 [View Project README ›](https://github.com/anishphilip012git/security/blob/main/scapy_and_arp/README.md)

---

## 🚀 What You'll Learn

- Crafting and parsing raw TCP/TLS packets
- Detecting MITM and ARP spoofing
- Writing encrypted proxies in Go
- Using Scapy and dpkt for packet inspection
- Building custom CLI tooling for network diagnostics

---

## 📚 About the Course

These tools were developed as part of CSE508: Network Security at **Stony Brook University**, focusing on hands-on system-level security programming and protocol awareness.

---

## 📄 License

MIT License – Feel free to use, adapt, and extend these tools for learning or research purposes.
