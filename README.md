# Marcio Bolsoni — Cloud AWS Developer Portfolio

> **Live:** [marciobolsoni.cloud](https://marciobolsoni.cloud) · **Repository:** [marciobolsoni/portfolio](https://github.com/marciobolsoni/portfolio)

A personal portfolio website built to showcase cloud architecture projects, professional experience, and technical skills. Designed with a focus on performance and clean UI.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router DOM v6 |
| Animations | Framer Motion |
| Styling | Tailwind CSS + CSS Variables |
| Components | Radix UI + shadcn/ui |
| Backend | Supabase (Auth + Contact Form) |
| Hosting | GitHub Pages |
| Domain | marciobolsoni.cloud |

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Hero landing with animated particles and CTA |
| `/about` | Background, certifications and personal profile |
| `/projects` | Project cards with tech stack and deep-dive links |
| `/projects/multi-region-dr` | Multi-Region Disaster Recovery — full case study |
| `/projects/managed-kubernetes-eks` | Hardened EKS for fintech — full case study |
| `/projects/gitops-cicd-suite` | GitOps CI/CD with canary deployments — full case study |
| `/observability-platform` | Prometheus + Grafana stack on AWS — full case study |
| `/skills` | Skills matrix across 9 categories |
| `/experience` | Professional timeline (Halian Sàrl · Ericsson) |
| `/contact` | Contact form backed by Supabase |

---

## 🏗️ Featured Projects

### Serverless E-commerce AWS
Massively scalable storefront using Lambda, API Gateway, DynamoDB and S3. Designed for high-traffic with pay-per-use cost model.

**Stack:** `Lambda` `API Gateway` `DynamoDB` `S3`

---

### Multi-Region Disaster Recovery
Zero-data-loss DR strategy for critical workloads across multiple AWS regions. Includes automated failover and RTO/RPO targets.

**Stack:** `Route53` `RDS Global` `Terraform` `Auto Scaling`

---

### Managed Kubernetes (EKS)
Hardened container orchestration platform for fintech applications with network isolation and RBAC policies.

**Stack:** `EKS` `EC2` `Docker` `VPC`

---

### GitOps CI/CD Suite
Modular deployment engine with automated canary deployments, rollback triggers and infrastructure drift detection.

**Stack:** `GitHub Actions` `CodePipeline` `Terraform` `Docker`

---

### Observability Platform
Scalable observability stack on AWS combining metrics, traces and logs in a unified dashboard.

**Stack:** `Prometheus` `Grafana` `AWS` `EKS` `X-Ray`

---

## 🛠️ Skills Matrix

- **Cloud Platforms** — AWS (Solutions Architect · Cloud Practitioner certified)
- **Containerization & Orchestration** — Docker, Kubernetes, EKS, ECS, Fargate
- **Infrastructure as Code** — Terraform, CloudFormation
- **CI/CD & Version Control** — GitHub Actions, AWS CodePipeline, Git
- **Programming & Scripting** — Python, Bash, Node.js
- **Monitoring & Logging** — Prometheus, Grafana, CloudWatch, X-Ray
- **Operating Systems** — Linux (Ubuntu, Amazon Linux)
- **Automation** — Ansible, Lambda
- **Project Management** — Jira, Confluence, Agile

---

## 💼 Experience

**Halian Sàrl**
> Technical and systemic architecture design and infrastructure implementation.

**Ericsson Telecom S.A.**
> Expert technical support for cloud services and cross-functional collaboration.

---

## 🏅 Certifications

- AWS Certified Solutions Architect — *Active*
- AWS Certified Cloud Practitioner — *Active*

---

## 📁 Repository Structure

```
portfolio/
├── index.html              # Entry point
├── assets/
│   ├── index-[hash].js     # Bundled React application
│   └── index-[hash].css    # Compiled Tailwind styles
└── README.md
```

> This repository hosts the **compiled production build** of the portfolio.
> The source code was generated with [Horizons by Hostinger](https://www.hostinger.com/horizons) (AI website builder) and exported as a React + Vite project.

---

## 🔧 How This Was Built

1. **Created** with Horizons (Hostinger's AI builder) — React + Vite + Tailwind output
2. **Exported** the source code as a `.zip` from the Horizons dashboard
3. **Built** locally with `npm install && npm run build`
4. **Deployed** to GitHub Pages via `git push`
5. **Custom domain** `marciobolsoni.cloud` configured via GitHub Pages settings

### To rebuild from source

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

The `main` branch serves directly as the GitHub Pages source (root `/`).

Any update to the portfolio follows this flow:

```
Build locally  →  git add .  →  git commit  →  git push origin main  →  GitHub Pages auto-deploys
```

---

## 📬 Contact

- **Email:** marciobolsoni28@gmail.com
- **Website:** [marciobolsoni.cloud](https://marciobolsoni.cloud)

---

<p align="center">Built with ☁️ by Marcio Bolsoni</p>
