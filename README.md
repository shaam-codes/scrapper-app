# scrapper-app - [WIP]

Core of the application, works as the back-end for the users. This is working under micro service architecture


## [Documentation](https://github.com/shaam-codes/scrapper-docs)
Please refer to the above repository to understand complete flow and functions.
## Architecture

As mentioned in the documentation core application works with [gPRC](https://grpc.io/docs/languages/node/). Application developed based on the Hexagonal Architecture also known as ports and adapters architecture.


### This hexagonal architecture uses for

- Decouple business logic from all dependencies, such as framework, database, message queues and etc
- Clear implementation of SOLID principles- Easy to maintain OOP concepts
- Test execution with mock services
- Ability to modify business logic and dependencies

As mentioned in the docs here is the diagram of hexagonal

![high level diagram of services](https://raw.githubusercontent.com/shaam-codes/scrapper-docs/main/diagrams/hexagonal.png)

## [Domain layer](https://github.com/shaam-codes/scrapper-app/tree/main/src/domain)

This includes all the domain level pure classes with any dependance or addition of any database.Classes are with private constructors and few static and regular functions, since the only way to access these is via DTO(Data Transfer Objects).

## [Application layer](https://github.com/shaam-codes/scrapper-app/tree/main/src/application)

This layer contains service classes and business logics. These services don't have any knowledge of callers. Also depend on the domain layer but not from infrastructure or outside.

## [Infrastructure layer](https://github.com/shaam-codes/scrapper-app/tree/main/src/infrastructure)

This layer contains the actual usages, such as framework, database, message queues and other listeners. Also implementations of ports known as adaptors. 

## [Primary ports | driving ports | inbound ports](https://github.com/shaam-codes/scrapper-app/tree/main/src/application/user)

For simpilicity added **-use-case** as the postfix for interface files. These ports communicate **to** the hexagonal architecture. Anyway, we need to implement inbound adapters to actually use it. Also there might be multiple adapters for the same port, since each adapters will responsible for each way of communication to inner layer from dependencies


## [Secondary ports | driven ports | outbound ports](https://github.com/shaam-codes/scrapper-app/tree/main/src/domain)

For simpilicity added **-repository** as the postfix for interface files. These ports to used communicate **from** the hexagonal architecture. Anyway I need to implement outbound adapters to actually use it. Also there might be multiple adapters for the same port, since each adapters will responsible for each way of communication from inner layer to dependencies

## [Data Transfer Objects](https://github.com/shaam-codes/scrapper-app/tree/main/src/application/user/dto)

These objects are used as the arguments for communicates from/to infrastructure layer to/from inner layers
