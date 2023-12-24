---
title: 'Notes about kubernetes'
date: '2023-12-23'
image: kubernetes.png
excerpt: A system for running many containers (types) over many different machine (virtual and physical).
isFeatured: true
tags: ['kubernetes', 'advanced', 'devops']
---
# What?
- A system for running many containers (types) over many different machine (virtual and physical).

# Why?
- When you need to scale up your application to support many different types of containers of verifying numbers.
- Used to manage the typical requirements that come with working with containers - container orchestration:
  - Auto-Scaling:  increase the number of available containers based on current demand
  - Service Discovery: help microservices find 1 another
  - Load Balancing: distributing load among all available instances if a microservice
  - Self-Healing: Heath checks and replacing failed instances
  - Zero Downtime Deployments: release new version without any downtime.

## Notes:
- It’s a system to deploy containerised apps.  
- kubernetes is used to deploy Objects of varies types, the Objects all have goals that serves a small of in getting our application to work correctly.
- Nodes are individual computers, these computers can be virtual or physical that belong to our kubernetes cluster. Objects are deployed to our cluster Nodes.    
- Master is a suite of programs that manages all the nodes within our cluster. The Master decides which Node will run what container, however, we do have the ability to do this with additional configuration.    
- To deploy something we update the state of Master via configuration files, the Master works constantly to meet of desired state.   
- Kubernetes supports both Imperative and declarative approaches for working with our cluster.    
  - Imperative: done via the kubectl.
  - Declarative: done via configuration files to describe our desired state.
- A Controller is any type of Object that constantly works to maintains our desired state within our cluster.  
- Kubernetes follows the Single-Reasonability Principle: meaning 1 concept does only 1 reasonability.
- Kubernetes will automatically make some environment variables on your behalf.
- Kubernetes has both load balancing and service discovery via the use of services object types.

### Cluster:
- A kubernetes cluster is assembly of a Master nodes (can have multiple master nodes in complex clusters) and 1 or more worker nodes, a node is a virtual machine or a physical computer that going to be used to deploy number of containers. That means 1 node can run many containers.
- The Master nodes controls all the worker nodes, this master has a set of programs running on it that control what the nodes are running.   
- User interact with the kubernetes cluster by reaching out to Master.
- We issue instructions to the Master.
- The kube-proxy is a program running on very single Node, the kube-proxy is the single window into the outside world. In incoming requests go through kube-proxy, it will inspect the request and decide how to route the request to the varies Objects without are Node.    
- The kube-proxy will route the incoming request to the NodePort Service, the NodePort Service will accept the incoming request and then forward onto the configured port which is configured without the Pod.

### Master Node:
- The Master Nodes contain several important components:
  - Etcd: distributed database, this database stores all our cluster configuration for every object being managed within our cluster. In essence its stores all our desired state for our cluster for all managed objects.
  - API Server: kube-apiserver, is the interface which kubectl CLI tool interacts with.
  - Scheduler: kube-scheduler, is responsible for scheduling the pods on the varies nodes.   
  - Controller Manager: kube-controller-manager, manages the overall health of the cluster, etcs (distrabuted database) stores the desired state of our cluster, the kube-controller-manager is reasonable for execute steps to achieve and maintain that desired state.

### Worker Nodes:
- Each worker node contains several important components:
○ Node Agent: kubelet, this is a monitoring agent, its monitors what's going on the node and reports back the master - more specifically Controller Manager (kube-controller-manager).
○ Network Component: kube-proxy, it help us expose services around Nodes and Pods.
○ Container Runtime: an OCI (Open Container Interface Specification) runtime environment, most notably docker.
○ Pods: the unit or objects that our container run within, they are container wrappers.

### Development VS Production:
- There is a distinction when using kubernetes locally for development vs production.
- Locally Minikube is heavily used to setup a small cluster.
- In a production environment we make use of something called Managed Solution. Managed Solution are references to outside cloud providers. They will setup the kubernetes cluster on your behalf removing a lot of headache.
- To interact with kubernetes cluster we use a CLI program called kubectl. Kubectl is used in both local and production environments.  
- Minikube does not allow mappings to local host, instead we need to use the IP address of our Node (virtual machine of local deployments).

### Docker Compose Vs Kubernetes:
- Each entry within a docker compose file allows you to optional build the images first. In the kubernetes world we don’t get this feature, kubernetes expects all the images have already be built beforehand, ergo kubernetes has no build pipe-line or process to build images.
- Each entry within a docker compose file describes creation of one container, however, in kubernetes we don’t have one single configuration file, instead we have multiple configuration files. Each of these configuration files are used to create objects. Objects are not necessary a container, the Objects are used within our kubernetes application.
- Each entry within docker compose describes the containers networking requirements (ports), in the kubernetes world we have set the networking manually. kubernetes to support inter-container communication is a more involved process.


### K8 Objects:
- Configuration files are used to create objects.
- The configuration files are feed into kubectl tool.
- The term object is a reference to thing that exists without of kubernetes cluster. All Object have a type, so the configuration filed are used to create an Object of a given type. Each type of Object serves one particular purpose to support our application.
- The two most popular types of Objects are Pods and Services.   
- The apiVersion entry is used to scope the types of objects that can be defined within a given configuration file.
- The Kind entry must always appear after the apiVersion, the Kind represents the type of the Object.  
  - The Pod type Objects is used to run a container.
  - The Service type Object is used to describe networking requirements.
  
#### Pod Type Object: 
- In K8 the virtual machine running on your locally computer is a Node. The Node will be used by kubernetes to run some number of different Objects.
- The Pod is a grouping of containers that have a common purpose. kubernetes does not just allow you to run 1 container by itself. The Pod represents the smallest thing (unit) that can be deployed to the kubernetes cluster.  
- A Pod is a throwaway unit, it is excepted that Pods will be die from time to time.  
- The requirement of a Pod it must container 1 or more container within it. One Pod should only container the grouping of containers that are tight coupled together and their integration with each other is required for them to function correctly.  
- Every single Pod created gets its own IP address assigned to it, the IP address is randomly assigned to it. The IP address is internal to the Node . 

#### Replica Sets Object: 
- The purpose of this object is to ensure a specific number of pods are running at all time. 
- To imperatively scale the replica sets we write: kubectl scale deployment <name of deployment> --replicas=<number of replicas>  

#### Service Type Object:
- Object of type service is used to setup some networking requirements inside of the kubernetes cluster. Services are only needed when our Pods want to receive requests from other Objects within our cluster.     
- Services provide an always available external interface to the applications which are running within our Pods. 
- In the world of services there are 4 sub-types. 
- Services are important as they watch every Pod that matches its selector, and route traffic to it. 
    - ClusterIP: this type of service is used to expose the Pods to other Objects within the Cluster. It is a more restrictive form of networking. This will not exposed the Pods to the outside world.   
    - NodePort: this type service is used expose a container to the outside world - NodePort is mainly used in development and not Production, only in a few cases we will used NodePort in production. In essence, a NodePort creates communication layer between the outside world and the container running with that Pod within our Node.   
    - LoadBalancer: a Service type that is a legacy method for getting traffic into our cluster. This Service type does two things within our cluster, this type allows access to one specific set of Pods within our cluster. Kubernetes will call out to the managed service provider to configure a Load Balancer outside of the cluster and forward traffic to the LoadBelancer Service.    
    - Ingress: Expose a set of Services to the outside world. Traffic will hit the Ingress Service which will then be routed to the appropriate Pods (via ClusterIP Service Objects), in the world kubernetes there are several implementations of Ingress. One common implementation of Ingress is Nginx Ingress. 
- You can actually define a service imperatively using the following command: kubectl expose deployment <name of deployment> --type=<service type> --port=<exposed or internal port depending of service type> 
- When you create a service Kubernetes will create some environmental variable automatically on your behalf. Whenever you create a pod all these environmental variables are made available to the pod. 
			
#### Deployment Type Object:
- When using Object of type Pod you can't update certain fields, only a handful of fields can be updated, to overcome this we use an Object of type Deployment.
- The Deployment Object type is meant to maintain a set of identical Pods. The Deployment is going to contently work to make sure every single Pod in its managed set is always running the correct Configuration. 
- A Deployment is similar in nature to a Pod. 
- A Pod runs a single set of closely related containers - the container have tight integration with each other. Pod type Objects are used really for development or when you have a small number of containers, they are not really used for production. In contrast Deployment Object type is designed to run and managed a set of identical Pods (one or more). All the Pods managed by the Deployment are identical in containers and configuration.      
- A Deployment Object has something called a Pod Template, a Pod Template is a block of configuration which in essence describes what a Pod created by this Deployment should look like. 
- Deployment scripts can be updated and the Deployment Object will keep watching and update the Pods to reflect the configuration.
- Deployments do not directly create and manages Pods themselves, instead it will reach out to Master and pass along the configuration for the Pods and Master will create the Pods. As the Master will be creating the Pods on behalf of the Deployment the Deployment needs a handle for those Pods, the handle is define via the selector: matchLabels:
- The configuration for the Pods are done via the template entry. The template property is used list out the configuration that is goner be used for all Pods created ad managed by this Deployment. 
- The Deployment Object is a type of controller. 
- You can using a imperative approach to create a deployment: kubectl create deployment <deployment name> --image=<image name (tag)> 

#### Persistent Volume Claim Type Object: 
- To PVC must provide accessModes, there are 3 access modes -kubernetes will need to find a storage that meets the defined specification. 
  - ReadWriteOnce: instance of storage that can only be used by one Node at a time.  
  - ReadOnlyMany: instance of storage that allows multiple Nodes to read from this.
  - ReadWriteMany: instance of storage that allows multiple Nodes to read and write. 

#### Secrets Type Object:  
- This type of Object is used to securely store one or more pieces of information within the cluster, such a database password, SSH Key or an API Key. 
- Unlike other Object types a Secret Object type is usually generated using an imperative command, this is done as you will need to provide the data you want to encode. 
- This object will need to be created manually in the product environment. 

#### Ingress Type Object:
- A type of Object that outlines the networking routing rules. 
- Will be used to build a Ingress Controller, which will in turn will build some infrastructure to make our desired state a reality.  
- When using Ingress type we need to use the :metadata :annotation, the annotation properties are used to configure the actual selected implementation.      
	
	
#### ConfigMap type object:
- A ConfigMap is the type which is used as a store for centralised configuration location. 
- To create a ConfigMap imperatively: create configmap <name> --from-literal=<list of key value pairs>

#### K8s Configuration:
- Configuration files use the .yaml extension.  
- All configuration need to start with the apiVersion.
- The spec: entry is used to define the containers and their details.
- The metadata section is used describe the details of Object.
  - The name: is used to identity the pod, its mainly used for logging purposes.
  - The label: component: entry is used to reference the Pod in other configuration file - it’s a key-paired value.

#### Under the Hood and Master:
- Kubectl passes the all the configuration files the cluster Master.  
- One of the running programs running on Master is called kube-apiserver, the kube-apiserver is responsible for monitoring all Nodes without our cluster and ensure they are working correctly.    
- The kube-apiserver will take a look at the deployment files we submit and update its node pad of the responsibility it has. The kube-apiserver will issue instructions to the Node to ensure that its task list of responsibility are all accounted for.      
- In each Node there is a copy of docker running, when instruction to spool containers are issues each running docker instance will spring into action and get a copy of the image from docker hub and store it in its image cache and then create containers.  
- The Master is always watching all the running Nodes on our cluster, the master will always spring into action if there is a problem with of its tracked responsibilities.

#### K8 Update Container Issues:
- Getting Kubernetes to deploy a newer of your image is very difficult and challenging.  
- If there is no change in the configuration file kubectl will reject the file and no changes will be issued. kubectl will not try to see if a newer image is available.   
- There are 3 possible solutions to get around this issue.  
  - Manually delete all the Pods - but this can be silly and dangerous.
  - Always tag image with version numbers - but this adds an extra step into the production deployment process.
  - Use an imperative command to update the image version that the deployment should use - but here you still needs to tag the image.

#### Persistent Volume Claim (PVC):
- Within the Containers file system data will be stored, the file system maintained the container life cycle is dependent on the container. Once the container is shutdown all changes within the system are lost, its changes are not persisted.
- A volume in the world of containers allows you to have a persistence filesystem that can be accessed by the service. The way this is achieved is by storing its contents on the host machine file system. In short, a volume is used to persist data outside of the container in order to decuple the container life cycle from the persistence file system.
- Using replication with volumes can be dangerous, if two services are modifying the same volume without being aware of each other can lead to the loss of data integrity.   
- The volume is a generic container terminology, it refers to a mechanism that allows a container to access a filesystem outside itself.
- In the world of Kubernetes the word Volume refers to a type of Object that allows a container to store data at the Pod Level.   
- In additions to Volumes Kubernetes provides other additional data storage mechanism, Persistent Volume Claim and Persistent Volume.
- The main differences between all the Volume Object types is their life-cycles and what their life-cycles are tied to.   
- The Volume Object type basically creates a data pocket that it tied directly to the Pod, so the storage belongs to the Pod.  This Volume can be access by any container within the same Pod.  If the Pod dies/shuts down the Volume will be lost, the Volume will survive container restarts only.  
- Persistent Volume is a storage mechanism were the persistent is not tied to any Pod or Container, this form of storage solution is suited for long term persistence.  
- Persistent Volume Claim is effectivity a billboard to advertise storage options, it's not an actual volume so nothing can be stored on it, it in short, is an advertise for what are the varies storage options within this cluster available for Pods.  When a Pod starts will try to claim some persistence storage within the cluster, this is done by the Pod asking Kubernetes for storage.  Kubernetes cluster might already have some persistence volumes already at hand ready to be claimed by Pods. This type of storage is referred to as Statically Provisioned Persistent Volume (SPPV). On the other hand the other storage option is called Dynamically Provisioned Persistent Volume (DPPS), this type of storage is provided on the fly when requested.  
- When Kubernetes is asked for storage it will take a slice of the hard drive and use that as the storage solution.
- The Provisioner decided how the space your Pod is asking for is created.

#### Ingress-Nginx:
- Each setup is different based on the environment.  
- The way Ingress is configured is by configuration file(s) that describes the routing rule for incoming traffic to send it off to the appropriate services within our container.
- These Configuration file(s) are feed into kubectl, and then kubectl (via Master) is going to create a Ingress Controller. This Controller will look at the current state then compare it with the desired state and then create some infrastructure that will make our desired state a reality.  
- The Controller will under the hood create a Pod which be running the Nginx that will have a set of rules that will allow traffic to come in and routed to the correct Services within our cluster.       
- Our configuration file(s) will be used to create an Object of IngressConfig, this type of Object outlines the routing rules.

#### Deployment Management:  
- Kubernetes will ensure little to no downtime, when a new version of pods are being deployed Kubernetes won't bring down all the current old pods but instead is will scale pods down then up.  If the new pods are no successfully deployed Kubernetes will not bring down old pods to ensure no downtime.
- To check all rollout history for a deployment: kubectl rollout history deployment <deployment name>
- To roll back to an older deployment version: kubectl rollout undo deployment <deployment name> --to-revision=<revision number>
- By default, without the use of liveness and readiness probes Kubernetes will send traffic to pods that are not ready to receive traffic, for this reason we should always ensure we setup liveness and readyness probes - using these probes ensures our micro-services are highly available.
