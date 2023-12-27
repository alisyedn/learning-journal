---
title: 'Notes about Helm Charts'
date: '2023-12-26'
image: helm-charts.png
excerpt: Kubernetes Package Manager.
isFeatured: false
tags: ['helm-charts', 'advanced']
---
# Helm Charts
- **Helm** is a **Package Manager** and the **Charts** are the **packages**.  
- These Charts are the collection of all your pre-configured application resources that can be deployed as one unit.
- The Charts are simply Kubernetes YAML Manifests that have bene combined into a single package.
- Helm consists of two components:
  - The **Client (CLI)**, lives on your local system.
  - The **Server (Tiller)**, lives on the Kubernetes cluster which executes what's needed.
- To create a Helm chart, use this command: helm create <chart_name>
  - Running this command will build you default helm config
- The important aspects of helm charts
  - Chart.yaml
  - Values.yaml
  - Template (directory)
  - Charts