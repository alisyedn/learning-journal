---
title: 'Notes about Docker'
date: '2023-12-22'
image: docker.png
excerpt: Docker is an ecosystem projects, tools and utilities.
isFeatured: true
tags: ['docker', 'advanced']
---
# Why Docker:
-  Standardised Application Packaging: Same packaging fir all type of application.
-  Features: Language Natural, Cloud Natural both enable standardization within an organisation tech stack(s).
## General Notes:
- Docker is an ecosystem projects, tools and utilities.
- Docker offers a container runtime environment.
- Docker is actually running on a Linux virtual machine, all the containers are hosted and managed on the VM running a Linux distribution.  
- **Docker images are pre-built environment for a certain tech or service. Images are not runtimes, it can be seen as a collections of files, libraries and configuration files that build up a environment.** 
  - The build steps of an environment.
- **Another way to view a image is that a docker is prebuilt-environment and not a runtime environment that contains all the dependencies to run a certain service and/or program. These dependencies can be in the form of software binaries, configuration files etc.**    
- **Another way to view a image is that it’s a snapshot of the file system with a start-up command.**
- Docker container is basically a **runtime environment (a running active program), it’s an instance of an image. Usually run 1 process in each container.** It comes with its own space of resources.  
- You don’t have access to any internal tools and utilities within the container from the host machine., to access to containers internal provided tools and utilities you must log into the container.  
- A container is not a physical construct within your computer, instead it's a process or a set of process that have a grouping of resources assigned to it.  
- Every "Run", "COPY" and "AND" instruction build a new layer, each instructions builds an intermediate Docker images. These intermediate layers are then stored as cache to improve future builds performance.  
- Instructions can be combined as be treated as 1 step resulting in 1 intermediate images instead of several.
○ Instruction are combines by using the "&&" symbol, multi-lines are also supported.  
- The directory were the "Docker build" command is executed is called build context, files and resources can be removed from the build context by make used of ".dockerignore" file - this is useful as you can reduce the docker images size.
- The Dockerfile should be used to create stateless images.    
- The inner workings of docker, docker consists of two major components
  - Docker Client also referred to as Docker CLI (Command Line Interface), its interface which is used to interact with docker features - it’s a bridge between the user and the docker technology.  
  - Docker Server also referred to as Docker Daemon, which is responsible for creating image and running containers etc.
- If the Dockerfile does not override the CMD or the ENTRYPOINT command the base images CMD or the ENTRYPOINT command will take precedence.  
- https://hub.docker.com/ is an public and private image registry which is used to store and gain access to docker images.
- All containers run on something called a "bridge" which is effectivity like an internal docker network that is not accessible, unless its exposed onto the host (the system running the container).
- The latest images tag does not actually need to be the latest version, usually a version tagged image will be tagged with the latest tag. This means that the latest tag may actually not point to the latest version of the software.
- In docker images can be marked as official or non-official, official images are images that are curated by docker themselves for popular software stacks.

## Docker CLI:
- All the commands comes with options.
````dockerfile
docker run ...
````
- Docker Run command will pull the image to the image cache if not local matching image is found in the image cache. 
  - Docker Run basically get you the file system snapshot. 
- After the container is created the start-up/boot command will execute to start-up the service within the container, the command can be pretty much anything include cmd commands - theses programs must exist. 
- One variation of the Run command is to override the default boot command for the container
  - `docker Run <image-name> <override-command>` 
- This command effectivity runs two commands under the hood, docker create and docker start   
- If Run command with -d it will default all output to the terminal.  
- By default the application running in the container will not be updated if we make changes locally to the application files, however, this can be enabled. 
- Under the hood this is actually running a different command which is docker container run. 
- There is a very advanced version to this command were u can specify the amount of memory and cpu quota assigned to the container.  
````dockerfile
docker run -m 512m --cpu-quota 5000 <image name> 
````
````dockerfile
docker ps ...
````
- Lists all currently running containers: docker ps
- List all containers: `docker ps --all (-a)`

````dockerfile
docker create ..
````
- Docker create <image name>, this will return the container id.  
- After the image we can set the override command: `docker create <image name> [override command]`

````dockerfile
docker start ..
````
````dockerfile
docker start -a <container id 1>  <container id 2> ...
```` 
- The `-a` is optional, it instructs docker to watch for output and print it to the current terminal - unlike docker start which will watch for output and print it to the current terminal. 
- The start command can be used to start several containers at the same time.  

