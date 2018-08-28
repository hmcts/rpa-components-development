# Angular Componentization Development Playground

This repo is a playground for ideas to enable the JUI team to develop a componentized architecture to allow reuse of components across applications.

## High Level Steps to the PoC

1. **Create an Angular application which houses 2 components which communicate in a decoupled way** (i.e. there should be no direct communication between components and it should just be based on events).  _(Objective:  have a sandbox where we can extract out two components to be reused in a different application without getting sidetracked about issues relating to current JUI implementation)._
2. **Expose those components as Angular components in a separate project**, which is packaged into an Angular library such that it can be installed as a separate npm dependency and ES6-imported into a new Angular application.  Both components should be extracted in this way, be packaged into the same Angular library and be reused in a new application such that the components "just work" by using their named element tags in the new application.  _(Objective:  be able to package and reuse a "component" at the front-end level)._
3. **Implement a mechanism for the components to access the backend service(s)** they require.  For now, we'll have one backend service which resides on Node+Express.  The component should be able to invoke the service such that it can consume data in the first instance.  _(Objective:  solve any CORS issues, build the invoked services into the "component" idea)._
4. **Implement an application-state mechanism which ties navigation to component states**.  _(Objective:  enable a component to have its state set at the application level, decoupling the component from knowledge of the application and its routes)._
5. **Expose a component as a W3C Web Component**.  _(Objective:  allow our components to be packaged as generic, technology-agnostic components such that we can achieve polyglot componentization across the programme where each team/project chooses its own component implementation technologies)._

## Explanations of Implemented Steps

In this section we'll record what we did and any issues we found / patterns we found.

### Cross-component communication mechanism

This currently uses RxJS to not bind the components too closely to other communication mechanisms in Angular.

### Packaging components for reuse (frontend only)

TODO - will probably use ng-packagr and the Angular library mechanism in the Angular 6 CLI.

### Component backend service invocation

TODO - we could have a proxy component which all service requests are routed through, through some command object.  Or each frontend component might have its necessary backend component proxies embedded on the page too (in a non-renderable way).  TBD.

### Application state management

TODO - we might use Redux to hold all application state cross-components and should tie this into routable links (maybe we go through the same route which is an "application state management" route or something similar. TBD.