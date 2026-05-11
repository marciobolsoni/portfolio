export type Role = {
  start: string;
  end: string;
  company: string;
  title: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const roles: Role[] = [
  {
    start: "2025",
    end: "present",
    company: "Independent — Amazon FBA & Family",
    title: "Self-employed / Career break",
    location: "Brazil",
    summary:
      "Stepped out of full-time employment to run a small Amazon FBA e-commerce business and to be present for family. Honest break, intentional decision.",
    bullets: [
      "Operating a small Amazon FBA store end-to-end: sourcing, listing optimisation, P&L, returns and customer support.",
      "Built operational dashboards in spreadsheets and lightweight automation to track inventory, costs and margins.",
      "Using the time to keep AWS skills sharp — building public portfolio projects (serverless e-commerce, Terraform-on-AWS, k3s microservices, CI/CD) and maintaining certifications.",
      "Currently looking to return to full-time engineering — open to Cloud Engineer / DevOps roles in Ireland, the UK or remote across the EU.",
    ],
    tech: ["Amazon Seller Central", "Spreadsheet automation", "AWS (hands-on portfolio builds)", "Terraform", "Kubernetes"],
  },
  {
    start: "2023",
    end: "2024",
    company: "Halian Sàrl",
    title: "Cloud Engineer / DevOps",
    location: "Luxembourg",
    summary:
      "Designed and implemented production AWS infrastructure for enterprise clients, working in a cross-functional team across architecture, DevOps and platform engineering.",
    bullets: [
      "Designed reference architectures for new workloads on AWS (VPC, ALB, ECS, RDS) and documented them as decision records.",
      "Built reusable Terraform modules and CI/CD pipelines so platform teams could provision environments self-service.",
      "Owned operational documentation — runbooks, architecture diagrams and onboarding guides.",
      "Collaborated with security and networking teams to get designs approved against client compliance requirements.",
    ],
    tech: [
      "AWS (VPC, EC2, ECS, RDS, IAM, CloudWatch)",
      "Terraform",
      "GitLab CI",
      "Docker",
      "Linux",
    ],
  },
  {
    start: "2021",
    end: "2022",
    company: "Sysco Ireland",
    title: "System Administrator",
    location: "Ireland",
    summary:
      "On-prem and cloud infrastructure support for Sysco's Ireland operations, covering storage, virtualisation, and platform engineering.",
    bullets: [
      "Maintained storage and on-prem infrastructure supporting business-critical operations across the Ireland sites.",
      "Contributed to solution architecture decisions for platform upgrades, migrations and capacity planning.",
      "Resolved incidents across the infrastructure stack under SLA, working closely with the wider IT and network teams.",
      "Documented procedures and runbooks to ease handover and reduce repeat tickets.",
    ],
    tech: ["Storage", "Solution Architecture", "Linux", "Windows Server", "Networking", "ITIL"],
  },
  {
    start: "2018",
    end: "2021",
    company: "Ericsson Telecom S.A.",
    title: "Analista de Sistemas",
    location: "São Paulo, Brazil",
    summary:
      "Cloud and infrastructure support across enterprise telecom workloads, with a focus on AWS-hosted services and cross-team incident resolution.",
    bullets: [
      "Triaged and resolved incidents across AWS EC2, S3 and RDS workloads against SLA targets.",
      "Coordinated with networking, application and DBA teams to resolve cross-domain issues with minimum downtime.",
      "Built monitoring dashboards in CloudWatch and authored runbooks adopted by the wider support team.",
      "Took on ad-hoc infrastructure work — SG audits, IAM policy reviews, log-pipeline troubleshooting.",
    ],
    tech: ["AWS (EC2, S3, RDS, CloudWatch)", "Linux", "Bash", "ITIL ticketing"],
  },
  {
    start: "2015",
    end: "2018",
    company: "Hewlett Packard Enterprise",
    title: "Support Analyst",
    location: "São Paulo, Brazil",
    summary:
      "Customer-facing technical support across HPE infrastructure and enterprise software, with focus on troubleshooting and incident resolution.",
    bullets: [
      "Provided technical support to enterprise customers across HPE infrastructure products.",
      "Triaged and resolved incidents through phone, ticket and remote sessions against SLA targets.",
      "Escalated complex issues to engineering teams with detailed reproduction steps and logs.",
      "Built foundational expertise in enterprise IT operations, ITIL and service management.",
    ],
    tech: ["Customer Service", "Help Desk Support", "ITIL ticketing", "Windows Server", "Linux"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    code: "7PJFFX9K0M1Q1DS6",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/7PJFFX9K0M1Q1DS6",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    code: "71EZGCBCXNF4Q39M",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/71EZGCBCXNF4Q39M",
  },
];
