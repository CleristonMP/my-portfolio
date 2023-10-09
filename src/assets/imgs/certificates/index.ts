const certificates = [
  {
    id: 1,
    certSrc: require('./1-modern-developer-professional-qualification.png'),
    caption: 'Modern Developer Professional Qualification',
    completionDate: '2023-03-30',
    courseLoad: 650,
    topics: [
      {
        subject: 'Programming Logic',
        description:
          'Introduction to programming, input, output, assignment, conditionals, loops, arrays, functions, projects.',
      },
      {
        subject: 'Git and Github',
        description:
          'Concepts, creation of projects and versions, branchs, teamwork, problem solving.',
      },
      {
        subject: 'HTML and CSS',
        description:
          'Introduction, tags, display, forms, selectors, box model, flexbox, projects.',
      },
      {
        subject: 'Modern Programming',
        description:
          'Object orientation, classes, encapsulation, composition, inheritance, polymorphism, interfaces, functional programming, lambda expressions, immutability, collections, projects. Java Language.',
      },
      {
        subject: 'Database',
        description:
          'Introduction, conceptual model, relational model, normalization, SQL, queries, projects.',
      },
      {
        subject: 'JavaScript',
        description:
          'Introduction, types, var/let/const, strings, operators, functions, objects, constructors, prototype, classes, modules, Promises, fecth API, async/await, projects.',
      },
      {
        subject: 'Systems Analysis',
        description:
          'Introduction, scope, requirements, use cases, conceptual modeling.',
      },
      {
        subject: 'Development Environment',
        description: 'Linux, terminal, IDE, Docker, installations, procedures.',
      },
      {
        subject: 'Back End',
        description:
          'REST API, project creation, system and components, dependency injection, CRUD and use cases, layers, controllers, services, repositories, entities, ORM, DTO, authentication and authorization, deployment. Tool: Spring Boot with Java.',
      },
      {
        subject: 'Front End',
        description:
          'Web application, layout, navigation, routes, requests, CRUD and use cases, integrations, authentication and authorization, deployment. Tool: ReactJS with typescript.',
      },
    ],
  },
  {
    id: 2,
    certSrc: require('./2-react.png'),
    caption: 'Bootcamp React',
    completionDate: '2022-06-06',
    courseLoad: 160,
    topics: [
      {
        subject: 'Layout and Navigation',
        description:
          'ReactJS (Project creation, Project structure, Components, Imports, Use of images); Layout (HTML, CSS, Manual styling, Flexbox, Bootstrap, Responsiveness, Execution of the Figma project); Routes (React Router DOM, Routes and links).',
      },
      {
        subject: 'API integration',
        description:
          'Props; Routes (URL parameters, Hierarchies (nesting), Redirects); Integration with back end (Axios); React Hooks (useState, useEffect); Effects: "loaders"; Forms "vanilla" (Event handling, Handling of the form state, Form submission).',
      },
      {
        subject: 'Authentication and Authorization',
        description:
          'Forms (React Hook Form, Form validation, regular expressions, Error messages and conditional styling); Login OAuth2; Interceptors; LocalStorage (Data access, JSON parse / stringify); Global state with Context API; Flows of authentication and authorization (Protected routes, Redirects from login and authorization, Special redirects for user experience (UX), Permitting at the route level, Content restriction (UI) based on user profile).',
      },
      {
        subject: 'CRUD, Pagination, Filters',
        description:
          'Responsive CRUD (Data list, Form, Insertion, editing and deletion); Communication between components with events (Observer standard); React Hook Form; Integration of libs with React Hook Form (React Select, React Currency Input Field); Other libs (React Pagination, React Toastfy); Data filtering; Reference control with useCallback hook.',
      },
      {
        subject: 'Testing and Deployment',
        description:
          'JEST and Testing Library; Testing of JS/TS functions (Running tests, watch mode, Block describe and test suite, Mock of functions with spyOn); Testing of React components (Unit and integration tests, Mock functions with jest.fn(), Mock of requests with MSW, Mock of the React Router DOM, Simulation of the user interaction, Fixtures, Form inputs, Form submission); Deployment with a CI/CD (Netlify).',
      },
      {
        subject: 'Dashboard',
        description:
          'Library Apex Charts, Doughnut chart, Column/bar chart, Data summary, Data tables, Creation and integration of filtering components.',
      },
    ],
  },
  {
    id: 3,
    certSrc: require('./3-spring.png'),
    caption: 'Bootcamp Spring',
    completionDate: '2021-11-16',
    courseLoad: 160,
    topics: [
      {
        subject: 'CRUD',
        description:
          'Creation of Spring Boot project; Creation of monorepo Git; Organization of the project in layers (REST controller, Service, Access to data (Repository)); Entity creation; Configuration of project test profile; Seeding of the database; Creation of REST web services (Parameters of route @PathVariable, Parameters of request @RequestParam, Body of request @RequestBody, ResponseEntity<T> request response); DTO Pattern; complete CRUD; Exception handling; Postman (collections, environments); Audit data; Data pagination; Associations between entities (N-N).',
      },
      {
        subject: 'Automated Tests',
        description:
          'Fundamentals of automated testing (Types of tests, Benefits, TDD - Test Driven Development, Good practices and patterns); JUnit (Basic (vanilla), Spring Boot (Repositories, Services, Resources (web), Integration).); Mockito & MockBean (@Mock, @InjectMocks, Mockito.when / thenReturn / doNothing / doThrow, ArgumentMatchers, Mockito.verify, @MockBean, @MockMvc).',
      },
      {
        subject: 'Validation and Security',
        description:
          'User and profile data model; Validation with Bean Validation (Annotations, Customizing the HTTP response, Custom validations with database access); Authentication and authorization (Spring Security, OAuth 2.0, JWT token, Authorization of routes by profile); Environment variables in the project with coalescence.',
      },
      {
        subject: 'Domain and ORM, Authorisations',
        description:
          'Domain and ORM (Implementation of a complex domain model (DSLearn project), Instantiation (Seed) of a domain model with SQL); Authorizations (Customized authorization at the service level, Custom content for the logged in user, Refresh token, Pre-authorisation of methods).',
      },
      {
        subject: 'Database Queries',
        description:
          'SQL and JPQL (Projection, Restriction, Scalars, Joins, Group by, Union, Difference); Spring Data JPA (Query methods, Case study: detailed search with optional parameters and pagination, Problem N+1 queries).',
      },
      {
        subject: 'Docker, Deployment, CI/CD',
        description:
          'Docker (Concepts, Commands, Images and Dockerfile, Containers Instantiation, Volumes, DockerHub); Manual Deployment on AWS (EC2, RDS, Remote Connection); CI/CD (Heroku, AWS, Github Actions, Homologation Stage, Elastic Beanstalk).',
      },
    ],
  },
  {
    id: 4,
    certSrc: require('./4-react-native.jpg'),
    caption: 'React Native Development',
    completionDate: '2023-07-04',
    courseLoad: 45,
    topics: [
      {
        subject: 'Fundamentals',
        description:
          'Project Configuration; Structure of the Project; SafeAreaView; Creation of Components; Organization of Components; ECMAScript Modules System; Stylization; Component with Properties; Component with State (useState); Direct Communication; Indirect Communication; Using Direct and Indirect Communication; Differentiating iOS and Android; Conditional Rendering; props.Children; Rendering List; Components Controlled; Flexbox; Class Component: Render Method; Class Component: Passing Props; Class Component: State; Class Component: this.',
      },
      {
        subject: 'React Navigation',
        description: 'Stack Navigation; Tabs Navigation; Drawer Navigation.',
      },
      {
        subject: 'CRUD with Hooks and Context API',
        description: 'Routes and Parameters; Form Creation; Context API.',
      },
      {
        subject: 'Projects',
        description: 'Calculator; Minefield; Todo List; Intragram clone.',
      },
    ],
  },
  {
    id: 5,
    certSrc: require('./5-microservices-JAVA.jpg'),
    caption: 'JAVA Microsservices',
    completionDate: '2021-12-29',
    courseLoad: 8,
    topics: [
      {
        subject: 'Simple Communication, Feign, Ribbon',
        description:
          'Project creation; RestTemplate; Feign client; Load Balancing with Ribbon.',
      },
      {
        subject: 'Eureka, Hystrix, Zuul',
        description:
          'Creating project Eureka-server; Setting up an Eureka server; Setting up Eureka clients; Random port to entity; Hystrix for tolerance to failure; Creation of api-gateway-Zuul project; Configuration of the Zuul api gateway; Zuul timeout.',
      },
      {
        subject: 'Centralized Configuration',
        description:
          'Creation and configuration of config-server project; Entity as client of the configuration server; Actuator to update settings in Runtime.',
      },
      {
        subject: 'Authentication and Authorization',
        description:
          'User, Role, many to many association; UserRepository, UserResource, Zuul config; Creation and configuration of oauth project; UserFeignClient; Login and JWT token; Authorisation through Zuul; Security settings on the configuration server; CORS Configuration.',
      },
      {
        subject: 'Creating and testing Docker containers',
        description:
          'Creation of a Docker network; Creation of project containers; Scaling instances of a container.',
      },
    ],
  },
  {
    id: 6,
    certSrc: require('./6-UML-data-modeling-object-oriented-analysis-and-design.jpg'),
    caption: 'UML Data Modeling (Object Oriented Analysis and Design)',
    completionDate: '2021-12-12',
    courseLoad: 13,
    topics: [
      {
        subject: 'Identification of Concepts and Attributes',
        description:
          'Conceptual model, concepts and attributes; How to identify concepts; Fixation exercises.',
      },
      {
        subject: 'Associations and multiplicity of roles',
        description:
          'Associations; Multiplicity of roles; Dependent concept, compulsory associations, multiple associations and self-associations; Drawing instances with the UML object diagram; Fixation exercises.',
      },
      {
        subject: 'Part-Whole associations and association classes',
        description:
          'Part-Whole association concept; Association Class concept; Fixation exercises.',
      },
      {
        subject: 'Inheritance, Enumerations and Primitive Types',
        description:
          'Inheritance concept; Enumerations and Primitive Types concept; Fixation exercises.',
      },
      {
        subject: 'Case study',
        description: 'Java implementation with Spring Boot and JPA.',
      },
    ],
  },
  {
    id: 7,
    certSrc: require('./7-JAVA-object-oriented-programming.jpg'),
    caption: 'Complete JAVA - Object Oriented Programming',
    completionDate: '2021-11-21',
    courseLoad: 50,
    topics: [
      {
        subject: 'Programming Logic - Algorithms using Java',
        description:
          'Programming concepts; Sequential structure; Conditional structures; Repetitive structures; Introduction to the Java language (history, editions, versions, JDK / JVM, bitwise operators, functions for strings, comments).',
      },
      {
        subject: 'Java and Object Oriented Programming (Part 1)',
        description:
          'Introduction to Object Oriented Programming; Constructors, this word, overload, encapsulation; Memory behaviour, garbage collector, arrays, lists; Boxing, unboxing and wrapper classes; Special topics in Java (Date and Calendar); Enumerations, Composition; Inheritance and Polymorphism; Abstract classes and methods; Exception handling.',
      },
      {
        subject: 'Java and Object Oriented Programming (Part 2)',
        description:
          'Working with files (FileReader, BufferedReader, try-with-resources block, FileWriter and BufferedWriter); Interfaces; Generics, Wildcard, HashCode and Equals, Set, Map; Functional programming and lambda expressions; Relational Algebra, SQL, MySQL; Database access with JDBC; Graphical Interface with JavaFX; Java EE - Object-relational mapping with JPA / Hibernate.',
      },
      {
        subject:
          'PROJECT: Desktop application with JavaFX and MySQL database with JDBC',
        description:
          'MVC pattern - Model View Controller; Layers pattern; FXML, Scenebuilder; Handling of UI events; CRUD; Design patterns.',
      },
      {
        subject: 'PROJECT: Web services with Spring Boot and JPA / Hibernate',
        description:
          'ORM with JPA / Hibernate; Layers Pattern; Web and HTTP; REST / web services; Complex domain model; Maven; H2 database; Spring Data JPA; CRUD; Exception handling.',
      },
      {
        subject:
          'PROJECT: Restful API with Spring Boot and MongoDB Database (web services + NoSQL)',
        description:
          'NoSQL and MongoDB leveling; Domain model: aggregates and denormalization; DTO pattern; Spring Data MongoDB; CRUD; Exception handling.',
      },
    ],
  },
  {
    id: 8,
    certSrc: require('./8-data-structure-and-algorithms-in-python.jpg'),
    caption: 'Data Structure and Algorithms in Python',
    completionDate: '2021-06-09',
    courseLoad: 22.5,
    topics: [
      {
        subject: 'Basic programming in Python',
        description:
          'Handling of variables and constants; Manipulation of strings; Mathematical operations; Logical and relational operators; Conditional operators; Repeating structures; Tuples and lists; Dictionaries and sets; Matrices; Functions; Useful modules - Math, Datetime, Random and Time; Creation of custom modules; Handling of errors and exceptions; Handling of text files; Regular expressions - basic and practical theory; Object orientation - basic theory and practice.',
      },
      {
        subject: 'Big-O Notation',
        description: 'Big-O notation for algorithm analysis.',
      },
      {
        subject: 'Unordered and Ordered Vectors',
        description:
          'Theory, insertion, linear search, deletion, debug and comparison.',
      },
      {
        subject: 'Stacks, Queues and Decks',
        description: 'Theory, implementation and debugging.',
      },
      {
        subject: 'Linked lists',
        description:
          'Simple linked lists; Double-ended linked lists; Doubly linked lists; Theory, implementation (insertion, deletion, search) and debugging.',
      },
      {
        subject: 'Recursion',
        description: 'Theory, implementation and debugging.',
      },
      {
        subject: 'Sorting algorithms',
        description:
          'Bubble sort; Selection sort; Insertion sort; Shell sort; Merge sort; Quick sort; Theory, implementation and debugging.',
      },
      {
        subject: 'Trees',
        description:
          'Binary tree; Binary search tree; Preorder traversal; Inorder traversal; Postorder traversal; Theory, implementation, insertion, search, deletion and debugging.',
      },
      {
        subject: 'Graphs',
        description: `In-depth search; Breadth First search; Greedy search; A* (A Star) Search ; Dijkstra's algorithm; Theory, implementation and debugging.`,
      },
    ],
  },
  {
    id: 9,
    certSrc: require('./9-cmp-algorithms-and-programming-logic.jpg'),
    caption: 'Algorithms and Programming Logic',
    completionDate: '2021-01-01',
    courseLoad: 30.5,
    topics: [
      {
        subject: 'Introduction to programming',
        description:
          'Algorithm, Automation, Computer Program; Programming language, lexis, syntactics; IDE - Integrated Development Environment; Compilation and interpretation, source and object code, virtual machine; The Portugol language and VisualG; First algorithm in practice.',
      },
      {
        subject: 'Sequential structure',
        description:
          'Arithmetic expressions; Variables and data types; The three basic programming operations; Data output; Data processing; Data input; Mathematical functions; Debugging in VisualG; Exercises on sequential structure.',
      },
      {
        subject: 'Conditional structure',
        description:
          'Comparative expressions; Logical expressions; Conditional structure; Exercises on conditional structure.',
      },
      {
        subject: 'Repetitive structures',
        description:
          'Repetitive structure while; Exercises: table tests with repetitive structure while; Repetitive structure for; Exercises: table tests with repetitive structure for; Repetitive structure do-while.',
      },
      {
        subject: 'Vectors',
        description: 'Theory; Exercises: table tests with vectors.',
      },
      {
        subject: 'Matrices',
        description: 'Theory; Exercises: table tests with matrices.',
      },
      {
        subject: 'C language',
        description:
          'Data types and variables in C; Operators in the C language; Data output in C; Data processing and casting in C; Data entry in C; Project creation in Code Blocks; Execution of the Debugger in Code Blocks; Conditional structure in C; Structure while in C; Structure for in C; do-while structure in C; Vectors in C; Matrices in C; Exercises in C.',
      },
      {
        subject: 'C++ language',
        description:
          'Variables and data types in C++; Operators in C++; Data output in C++; Data processing and casting in C++; Data entry in C++; Control structures in C++; Arrays in C++; Exercises in C++.',
      },
      {
        subject: 'Java language',
        description:
          'Data types and variables in Java; Operators in the Java language; Data output in Java; Data processing and casting in Java; Data entry in Java; Execution of the Debugger in Eclipse; Control structures in Java; Vectors in Java; Matrices in Java; Exercises in Java.',
      },
      {
        subject: 'C# language',
        description:
          'Variables and data types in C#; Operators in C#; Data output in C#; Data processing and casting in C#; Data entry in C#; Execution of the Debugger in Visual Studio; Control structures in C#; Vectors in C#; Matrices in C#; Exercises in Java.',
      },
      {
        subject: 'Python language',
        description:
          'Data types and variables in Python; Operators in the Python; Data output in Python; Data processing and casting in Python; Data entry in Python; Execution of the Debugger in PyCharm; Conditional structure in Python; Repetitive structure while in Python; Repetitive structure for in Python; Vectors in Python; Matrices in Python; Exercises in Python.',
      },
    ],
  },
];

export default certificates;
