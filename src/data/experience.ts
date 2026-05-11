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
    end: "2023",
    company: "Independent — Amazon FBA & Family",
    title: "Self-employed / Career break",
    location: "Brazil",
    summary:
      "Stepped out of full-time employment to run an Amazon FBA e-commerce business and to be present for the birth of my first daughter. Honest break, intentional decision.",
    bullets: [
      "Operated a small Amazon FBA store end-to-end: sourcing, listing optimisation, P&L, returns and customer support.",
      "Built operational dashboards in spreadsheets and lightweight automation to track inventory, costs and margins.",
      "Used the time to study cloud architecture properly and earn AWS Certified Cloud Practitioner and Solutions Architect Associate.",
      "Returned to full-time engineering refreshed, certified, and with sharper instincts for cost-vs-value trade-offs.",
    ],
    tech: ["Amazon Seller Central", "Spreadsheet automation", "Self-study: AWS SAA & CLF"],
  },
  {
    start: "2018",
    end: "2021",
    company: "Ericsson Telecom S.A.",
    title: "Support Analyst",
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
