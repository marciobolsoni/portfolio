export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  category:
    | "Serverless"
    | "Infrastructure as Code"
    | "Containers"
    | "CI/CD"
    | "Other";
  tech: string[];
  repo?: string;
  liveDemo?: string;
  problem: string;
  solution: string;
  architecture: string[];
  outcomes: string[];
  whatILearned: string;
  diagramUrl?: string; // populated after Lucid export
};

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  {
    slug: "serverless-ecommerce-aws",
    title: "Serverless E-commerce Platform on AWS",
    shortTitle: "Serverless E-commerce",
    tagline:
      "An event-driven storefront built on Lambda, API Gateway and DynamoDB — designed to scale to zero and handle traffic spikes without provisioning servers.",
    category: "Serverless",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "TypeScript", "IAM"],
    repo: "https://github.com/marciobolsoni/serverless-ecommerce-aws",
    problem:
      "Small e-commerce operators waste money running EC2 fleets that sit idle 80% of the day, then fall over during sales spikes. I wanted a reference architecture that costs almost nothing at zero traffic and absorbs bursts without manual scaling.",
    solution:
      "A fully serverless backend: API Gateway routes requests to Lambda functions written in TypeScript, which read and write product, cart and order data in DynamoDB. The static storefront is built once and served from S3 behind CloudFront with edge caching, so 90% of read traffic never reaches the origin. Authentication and authorization use Cognito + IAM scoped roles per Lambda — no shared secrets, no long-lived credentials.",
    architecture: [
      "CloudFront edge caches the static SPA hosted on S3 (TTL tuned per asset class).",
      "API Gateway with HTTP API mode forwards to per-resource Lambda functions.",
      "DynamoDB single-table design with GSIs for product lookup and order history.",
      "Cognito user pools issue JWTs; API Gateway authorizers validate them.",
      "CloudWatch + X-Ray trace every request end-to-end for cold-start tuning.",
    ],
    outcomes: [
      "Idle cost ≈ $0/month — only S3, DynamoDB on-demand, and CloudFront pay-per-request.",
      "Cold start p95 brought under 400 ms by trimming bundle size and using provisioned concurrency on the checkout function only.",
      "Single-table DynamoDB design replaced what would have been 4–5 RDS tables, cutting query latency to single-digit ms.",
    ],
    whatILearned:
      "Serverless is cheaper at small scale, but only if you treat IAM, observability and cold starts as first-class concerns from day one. Single-table DynamoDB design is unforgiving of schema drift — invest in modelling before code.",
    diagramUrl: "/diagrams/serverless-ecommerce-aws.svg",
  },

  // -------------------------------------------------------------------------
  {
    slug: "terraform-on-aws",
    title: "Terraform on AWS — Reusable IaC Modules + CLI Workflow",
    shortTitle: "Terraform on AWS",
    tagline:
      "A modular Terraform codebase that bootstraps a production-grade AWS environment (VPC, networking, IAM, ALB, EC2/ASG) with remote state, locking and a CI-friendly CLI workflow.",
    category: "Infrastructure as Code",
    tech: ["Terraform", "HCL", "AWS VPC", "ALB", "EC2", "Auto Scaling", "S3 backend", "DynamoDB lock"],
    repo: "https://github.com/marciobolsoni/Terraform-on-AWS",
    problem:
      "Most AWS projects start with click-ops — VPCs created in the console, security groups patched ad-hoc, no drift detection. That works for a demo and breaks the moment a second engineer needs to touch the environment.",
    solution:
      "I built a Terraform codebase that treats infrastructure as software: composable modules for VPC, subnets, ALB, ASG and IAM; remote state on S3 with DynamoDB locking so two engineers can't stomp on each other; and a documented CLI workflow (init → plan → apply) wired into a CI pipeline that runs `terraform plan` on every pull request and posts the diff back as a PR comment.",
    architecture: [
      "S3 bucket holds tfstate, versioned + encrypted (SSE-KMS).",
      "DynamoDB table provides state-locking — no concurrent applies.",
      "Modules: `network/` (VPC + subnets), `compute/` (ASG + ALB), `iam/` (least-privilege roles).",
      "Workspaces separate dev / staging / prod with the same code.",
      "GitHub Actions runs `terraform fmt`, `tflint`, and `plan` on PRs; `apply` only on merge to main with manual approval.",
    ],
    outcomes: [
      "Reproducible environments — full stack rebuilt from scratch in under 15 minutes.",
      "Zero drift incidents after CI plan-on-PR caught two manual console changes before they hit prod.",
      "Reusable modules cut new-environment setup time from days to hours.",
    ],
    whatILearned:
      "The S3 + DynamoDB backend pattern is non-negotiable for any team work. And `tfstate` is the single most sensitive file in the repo — guard it like a secret, never commit it.",
    diagramUrl: "/diagrams/terraform-on-aws.svg",
  },

  // -------------------------------------------------------------------------
  {
    slug: "kube-news",
    title: "Kube-news — Containerised News App on Kubernetes",
    shortTitle: "Kube-news on K8s",
    tagline:
      "A Node.js/Postgres news application packaged with Docker and deployed on Kubernetes. Demonstrates the full container lifecycle: image build, registry, manifests, services, ingress, and rolling updates.",
    category: "Containers",
    tech: ["Docker", "Kubernetes", "Node.js", "PostgreSQL", "Helm", "Ingress", "kubectl"],
    repo: "https://github.com/marciobolsoni/kube-news",
    liveDemo: "https://kube-news.marciobolsoni.cloud",
    problem:
      "I wanted to prove I could run a real stateful-ish workload on Kubernetes — not just deploy nginx — and understand the trade-offs between Deployments, StatefulSets, ConfigMaps and Secrets in practice.",
    solution:
      "Containerised a Node.js news application and its Postgres dependency, wrote multi-stage Dockerfiles to keep the runtime image small, and authored Kubernetes manifests for Deployment, Service, Ingress, ConfigMap (env) and Secret (DB credentials). Used a Helm-style values pattern so the same manifests deploy to dev and prod with different replica counts and resource requests.",
    architecture: [
      "Multi-stage Dockerfile: builder stage compiles, runtime stage ships only artefacts (~80 MB).",
      "Deployment with 3 replicas, rolling update strategy (maxUnavailable: 1).",
      "PostgreSQL StatefulSet + PersistentVolumeClaim for durable storage.",
      "Service of type ClusterIP fronted by an Ingress with TLS termination.",
      "Liveness + readiness probes wired to /health to drive rolling updates.",
    ],
    outcomes: [
      "Rolling deploys with zero downtime measured against a synthetic load test.",
      "Image size reduced ~60% by switching to a multi-stage build with Alpine.",
      "Clear separation of config (ConfigMap) and secrets (Secret) so the same image promotes across environments.",
    ],
    whatILearned:
      "Probes are not optional. Without a readiness probe, Kubernetes routes traffic to a pod that's still starting and you get a wave of 502s on every deploy. Most container outages I've seen trace back to missing or wrong probes.",
    diagramUrl: "/diagrams/kube-news.svg",
  },

  // -------------------------------------------------------------------------
  {
    slug: "codepipeline-s3-game",
    title: "CodePipeline → S3 Static Site Deploy",
    shortTitle: "CodePipeline → S3",
    tagline:
      "A CI/CD pipeline that builds and deploys a static web app to S3 + CloudFront on every push to main. Demonstrates the AWS-native delivery toolchain: CodeCommit/GitHub, CodeBuild, CodePipeline, S3.",
    category: "CI/CD",
    tech: ["AWS CodePipeline", "CodeBuild", "S3", "CloudFront", "IAM", "buildspec.yml", "GitHub"],
    repo: "https://github.com/marciobolsoni/codepipeline-s3-game",
    liveDemo: "https://game.marciobolsoni.cloud",
    problem:
      "Manual `aws s3 sync` deploys are fast to set up and the first thing that breaks the moment a teammate joins. I wanted a properly gated pipeline: source on GitHub, automated build, deploy to S3, with permissions scoped exactly to the resources involved.",
    solution:
      "Built an AWS-native pipeline. CodePipeline detects pushes to GitHub, CodeBuild runs the build defined in `buildspec.yml`, and the pipeline deploys the artefact to an S3 bucket fronted by CloudFront. Pipeline service roles are least-privilege — the deploy stage can `s3:PutObject` only to one bucket prefix.",
    architecture: [
      "CodePipeline source stage: GitHub webhook triggers on `main`.",
      "Build stage: CodeBuild image runs `npm install` + `npm run build`.",
      "Deploy stage: artefact uploaded to S3, CloudFront invalidation issued.",
      "All IAM roles scoped to the exact resource ARNs and actions needed.",
    ],
    outcomes: [
      "Push-to-deploy time under 90 seconds end-to-end.",
      "No more `s3 sync` from laptops — deploy is reproducible and audited via CloudTrail.",
      "Single-tenant IAM roles meant a compromised build job couldn't touch any unrelated bucket.",
    ],
    whatILearned:
      "AWS-native CI/CD is verbose but excellent for compliance-heavy environments — every action lands in CloudTrail. For pure speed on a small team, GitHub Actions is usually faster to iterate on. Knowing both is the right answer.",
    diagramUrl: "/diagrams/codepipeline-s3-game.svg",
  },
  // -------------------------------------------------------------------------
  {
    slug: "devlink",
    title: "DevLink — URL Shortener & Analytics on k3s + Hetzner",
    shortTitle: "DevLink on k3s",
    tagline:
      "A microservices URL shortener with click analytics, running on a single-node k3s cluster on Hetzner Cloud — provisioned with Terraform, configured with Ansible, fronted by Traefik with auto-issued Let's Encrypt TLS.",
    category: "Containers",
    tech: [
      "Kubernetes (k3s)",
      "Terraform",
      "Ansible",
      "Docker",
      "Traefik",
      "cert-manager",
      "Node.js",
      "Python / FastAPI",
      "React",
      "PostgreSQL",
      "Redis Streams",
      "GitHub Actions",
      "Hetzner Cloud",
    ],
    repo: "https://github.com/marciobolsoni/devlink",
    liveDemo: "https://devlink.marciobolsoni.cloud/",
    problem:
      "Most portfolio-grade k8s demos either run a single nginx pod on minikube or burn $50/month on a managed EKS control plane. I wanted to prove I could ship a real multi-service application — with async events, persistent data and HTTPS — on a production-shaped cluster that still costs less than a cup of coffee a month.",
    solution:
      "A four-service URL shortener (auth, url, analytics, frontend) deployed on a single-node k3s cluster running on a low-cost Hetzner VPS. The VPS is provisioned end-to-end with Terraform using the hcloud provider; Ansible roles (base, docker, k3s) configure the host and install the cluster. Traefik (included with k3s) handles ingress and cert-manager negotiates Let's Encrypt certificates automatically. The url-service publishes click events to a Redis Stream which the Python analytics-service consumes asynchronously — keeping the redirect path fire-and-forget. GitHub Actions builds multi-stage, non-root Docker images and pushes them to Docker Hub on every merge to main.",
    architecture: [
      "Terraform (hcloud provider) provisions a single cpx21 VPS — `terraform apply` recreates the whole stack in ~60 seconds.",
      "Ansible roles install Docker and k3s, then copy kubeconfig back to the workstation.",
      "Four services run as Deployments with 2 replicas each: auth-service (Node.js + JWT), url-service (Node.js), analytics-service (Python + FastAPI), frontend (React + Vite served via Nginx).",
      "Redis Streams decouple the click-write path from analytics aggregation — the redirect endpoint never blocks on analytics.",
      "PostgreSQL 16 backs both auth and url services; Redis 7 doubles as event bus and analytics cache.",
      "Traefik ingress with cert-manager + Let's Encrypt issues and renews TLS automatically.",
      "GitHub Actions builds multi-stage, non-root images and pushes to Docker Hub on push to main.",
    ],
    outcomes: [
      "Total monthly infrastructure cost ≈ €5.50 — VPS, domain and CI all in.",
      "Rolling updates with zero downtime across 2 replicas per service.",
      "End-to-end reproducibility — destroy the VPS, run `terraform apply` + `ansible-playbook` + `kubectl apply`, and the stack is back in under 5 minutes.",
      "HTTPS automated via cert-manager — no manual cert renewal, ever.",
    ],
    whatILearned:
      "Most of the value of 'k8s on a hyperscaler' disappears when you only need a single node — k3s on a cheap VPS gives you the same kubectl workflow at a fraction of the cost. Redis Streams is a sweet spot between 'just call the analytics service directly' and 'spin up Kafka' — it costs you one container and buys you real decoupling. And the Terraform + Ansible split (provision vs. configure) is worth the extra moving part: when something drifts, you know exactly which tool owns the fix.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
