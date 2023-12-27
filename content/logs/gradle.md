---
title: 'Notes about Gradle'
date: '2023-12-26'
image: gradle.webp
excerpt: Gradle is a build automation tool.
isFeatured: false
tags: ['gradle', 'build-tool']
---

# What is Gradle and why?:
- Gradle is the love child of Ant and Maven, in that is state we should follow certain conventions and have the ability to make customization is a easy way we required (make use Gradle DSL).
- Gradle is a build automation tool.
- Gradle can be configured to pull dependencies for different repository stores.
- Gradle allows you to use custom scopes.

## Object Model:
- The Gradle Model is also referred to as the Gradle API.
- Gradle make extensive use of plugins and is very dependent on them.
- Each plugin comes along with its own API (Object Model) that comes along with it.
- We Interact with the Gradle Object Model via Gradle DSL (Domain Specific Language)
- There are 6 key classes (Interfaces):
  - Script Interface: All Gradle Scripts implement the Script interface. This interface deals with cross-cutting concerns, its used to house all common things needs by every script. Any file that ends with .gradle will be implementing this interface.   
  - Project Interface: this interface is associated with the build.gradle file.
  - Gradle Interface:
  - Settings Interface: dealing with multi-level projects
  - Task Interface:
  - Action: Interface:

## Lifecycle Phases:
- Gradle builds have 3 distinct phases, each phases has its own distinct role to perform. The actually gradle.build scripts are really just configuration scripts which allows us to configure gradle to get gradle to build on our behalf. The gradle scripts are actually configuring the delegate object. Each phases is actually mapped to a different built script.
- It's important to understand that the delegate object is different depending on which phases of the life cycle we are in.  
  - Initialization:
    - gradle support single and multi-project builds, during this phases gradle will determine which project will be participating part of the build.
    - For each Project participating in the build gradle will build a Project Instance.
    - This phase allows us to define our build environment getting it ready for downstream phases.   
    - In the phase the delegate object that implement the Gradle interface.
    - This Phase maps files called init.gradle and settings.gradle file.
      - These scripts execute before the build starts.
      - They are used to perform setup tasks such as all plugin locations, environmental arguments, properties etc.  They can also be used to provide credential information such a database login details that will be needed by the build.
      - Init.gradle is located under the users/<username>/.gradle folder, within this top level folder a folder called init.d can be used to contain all common initialization files.
      - The settings.gradle file is used in multi project projects to help determine which project to include in the build.  
  - Configuration:
      - In this phases Project Instances (this is the delegate object) will be configured.
      - For this phase to happen every project needs a build.gradle file, this is just a configuration script which will be executed.  
      - Here delegate Object will implement the Project Interface.    
      - Configuration is applied to the delegate object which is the Project Instance.
      - This phase maps to the build.gradle file.    
        - Each project needs to have this file.  
  - Execution:
      - In this phase the build gets performed.
      - The execution is done be executing a number of Tasks.
      - Tasks perform the build itself.  
      - This phase maps to the build.gradle file.


## Dependencies Scopes (Configuration):
- Gradle similar to maven has scopes for its dependencies, however, in Gradle we call them configurations.
- Gradle has very cores-grain configurations.

## Properties:
- Many Properties will be set automatically by gradle itself, these properties are access via getter methods on the appropriate delegate object, these properties are read-only.
- We can define our own properties by adding a gradle.properties file, properties can also be passed in via the CLI.
- Gradle objects all support property extensions, this allows you to add properties to any object and then access those properties later on. This is done via the .ext.<property name>

## Tasks and Actions:
- Each Project consists of 1 or more tasks. A Project is a collections of tasks.  
- Each Task represents a piece of work performed by the build.
- Tasks are important in the Configuration and Execution phases.  
  - Configuration Phase: Tasks are created and Configured. We can add code to a given task as well - describe what our Task needs to do.
  - Execution Phase: we actually execute the Tasks.
- Tasks is made up from 0 or many Actions.  
- A Task can be views as a collection of Actions.
- A Task present a single Atomic piece of work for a build - an example of a Task would be compiling classes or generating JavaDoc.
- A Tasks are stored in a data Structure called a task container. This Data structure comes along with a set of helper methods to aid in the creating and looking up instances of tasks.
- Each Task as a name associated with it.
- During the Configuration Phase a Task Graph is built up, this graph outlines the order in which tasks will be executed.
- The Task Graph is a acyclic graph, while this graph is being created during the Configuration phase of the build cycle we are able to hook into the graphs creation.


## Plugins:
- Plugins add new tasks
- Plugin can be viewed as a collections of tasks
- Plugins allows us to extend our project capabilities
- Plugins are able to do such things as they extend the Gradle object Model(Gradle API)
- Plugins enable us to use similar logic across multiple projects
- Plugins also allow us to define our own specific DSL that can be used within our build.gradlefile


## Dependencies:
- Dependencies defined within the build.gradle are referred to as direct dependencies.
- Direct dependencies can also have their own dependencies, such dependencies are referred to as transitive dependencies (dependencies of our projects dependencies)

## Gradle Wrapper (Wrapper):
- The gradle wrapper allows you to build a gradle task without having gradle installed in you system.
- The Wrapper is always committed to source control.
- gradle-wrapper.properties contains properties for the wrapper be used.
- The Wrapper is very powerful as automation tool can make use of it instead of having Gradle pre-installed. 
