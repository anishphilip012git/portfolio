import type { ProjectDescription } from "$lib/types";

export function getProjectDescription(key: string): string {
    const project = projectDescriptions[key.toLowerCase()];
    if (!project) return '';

    const linkHTML = project.link ? ` <a href="${project.link}">[View Project]</a>` : '';
    const highlights = project.highlights.map(project => {
        return `<li>${project}</li>`;
    }).join('');
    const learn = project.learn.map(project => {
        return ` <div class="learn-chip">${project}</div> `;
    }).join('');

    return ` <section >
        Title:
        ${project.title}${linkHTML}
        <p>Details:</p>
        <ul>${project.details}</ul>
        <p> Highlights: </p>
        <ul>${highlights}</ul>
        <p> Key learning areas: </p>
        ${learn}
      </section>    `;

}

const projectDescriptions: { [key: string]: ProjectDescription } = {
    ml_dsf_eval: {
        title: 'Evaluating Value or Significance of a placeEvaluating Value or Significance of a place.',
        details: "Our groundbreaking project offers a fresh perspective on the pivotal role of small businesses within local communities. By harnessing a rich dataset encompassing government economic census and reviews from platforms like Yelp and Google Local, \
        we've developed a robust success score for small businesses. This score considers various factors, including transit accessibility, pedestrian-friendliness, and the socio-economic backdrop of the area served. Our findings underscore the profound impact of small businesses on enhancing the sense of place and community well-being, providing invaluable insights for policymakers, urban planners, and entrepreneurs alike.",
        highlights: [
            "Evaluated significance of a business in terms of novel parameters obtained from features evaluating the economic, customer, social, and infrastructure impact of a business.",
            "Successfully validated ranking of businesses on these factors in community districts of Queens."],
        link: 'https://www.linkedin.com/in/anishphilip12/details/projects/1709442986008/single-media-viewer/?profileId=ACoAABGGalcBOgCoZ-ElFybA18MJOi1Zq0x7ytE',
        learn: ['data-science fundamentals', 'machine-learning applications', 'clustering techniques- k-means DBSCAN', 'Data Analysis', 'Regression -Linear/Logistic/ GradientBoost/ADA Boost']
    },
    ml_rl_fts: {
        title: 'Construction/implementation and evaluation of Financial Trading Systems (FTS) using a variety of Reinforcement Learning algorithms',
        details: "In our project, we explored the potential of reinforcement learning (RL) to refine and enhance stock trading strategies. By implementing and comparing advanced RL algorithms, including Temporal Q-Learning, LSTM, and K-Line Clustering, we aimed to identify the most effective approaches for improving trading outcomes. Our analysis focused on evaluating these algorithms based on their profit generation capabilities, model efficiency, and parameter optimization. This research provided valuable insights into the applicability of RL techniques in the dynamic environment of the financial markets, offering a new perspective on algorithmic trading.",
        highlights: ["Evaluated price prediction models for a stock pool of single and multipel stocks", "Assessed efficacy of LSTM models in various scenarios for profit analysis"
        ],
        link: 'https://www.linkedin.com/in/anishphilip12/details/projects/1709443399002/single-media-viewer/?profileId=ACoAABGGalcBOgCoZ-ElFybA18MJOi1Zq0x7ytE',
        learn: ['machine-learning applications', 'Reinforcement learning', 'DEep Learning', 'Stock Market', 'Neural Networks', 'LSTM', 'Temporal Q-Learning', 'K-Line Clustering']
    },
    csworkflow: {
        title: "CS Workflow Digitization",
        details: "Associated with COMPAS Lab (Computer Architecture) Stony Brook University (Jan 2024 - Present). This project focused on digitizing offline workflows within the Computer Science department, developing a web application to manage and track progress, and integrating various APIs to enhance efficiency and user experience.",
        highlights: [
            "Workflow Digitization: Digitized 80% of offline workflows within the Computer Science department. Developed a web application to manage and track the progress of various procedures. Implemented online form filling and signing using Adobe PDF APIs. Achieved a 60% reduction in processing time with a real-time progress tracker.",
            "Backend Infrastructure and Real-Time Data Management: Utilized Google Cloud Platform (GCP) and Firebase for a scalable backend. Implemented microservices architecture for efficient data handling. Created Docker containers for consistent local server deployment.",
            "User Interface Transformation: Transformed a university website from non-mobile-friendly to mobile-friendly. Resulted in a 30% increase in traffic and an enhanced user experience.",
            "Integration with Google (Calendar and Mail) API: Seamlessly integrated with Google Calendar for scheduling events. Benefited over 500 students and faculty members for presentations.",
        ],
        link: 'http://workflow.cs.stonybrook.edu/',
        learn: ['GCP','NodeJS', 'firebase', 'microservices', 'docker', 'adobe-pdf-apis', 'google-apis']
    },
    websheets:{
        title:"Websheets : Research Assistant",
        details:"Associated with Secure Systems Lab Stony Brook University (May 2024 - Present). This project embarks on a new approach to managing data and privacy policies associated wiht it. It envisons a new framework which doesn't requires creating lengthy backend and frontend codes to provide visual interfaces for tabular data. Users can manage",
        highlights:["Developed an NSF-funded full-stack framework based in Linux ,C++, React, Redux & TypeScript for creating webapps with privacy policies.","Spearheaded the design and implementation of a comprehensive no-code UX framework for enforcement of data privacy policies.","Built a real-time cell-level spreadsheet module for tabular data, similar to Google Sheets, with integrated CI/CD pipelines using Github actions."],
        link:"http://seclab.cs.sunysb.edu/seclab/pubs/nspw15.pdf",
        learn:["privacy-policies",'React', 'Ant design', 'c/c++','Linux file system','FQL (a language created By Prof. Sekar)']
        
    },
    hotel_rozgar:	{
        "title": "Hotel Rozgar",
        "details": "Hotel Rozgar is a microservices-based job search platform tailored for the informal job sector, with a focus on the hotel industry. The platform offers features like job postings, job search, applications, and a community section for industry engagement. The system is designed for scalability and high availability, ensuring a seamless user experience.",
        "highlights": [
            "Acted as Technical Advisor and Full Stack Developer, overseeing the design and implementation of the entire platform.",
            "Engineered a scalable microservices architecture using NestJS for the backend, ensuring modularity and fault tolerance.",
            "Developed a responsive, dynamic frontend using React, optimizing performance and user experience.",
            "Integrated PostgreSQL for robust data management, employing advanced indexing and query optimization techniques.",
            "Implemented RESTful APIs to facilitate efficient communication between services, enhancing overall system efficiency.",
            "Led the design of CI/CD pipelines to automate deployment, reducing manual intervention and accelerating release cycles."
        ],
        "link": "https://hotelrozgar.com/",  // Replace with the actual project link
        "learn": [
            "NestJS",
            "React",
            "PostgreSQL",
            "Microservices architecture",
            "API design",
            "CI/CD pipeline automation"
        ]
    },
    samsung_iam:{
        "title": "Samsung Cloud Security Identity and Access Management",
        "details": "Over four years, developed and led the implementation of a patent-backed cloud security platform for Samsung, providing secure, single-click access to over 1500 cloud resources. The project involved transitioning to a serverless architecture, automating infrastructure provisioning, and ensuring near-perfect system availability across AWS, Azure, and GCP. The platform supported 50+ Samsung Smart TV services globally, with a focus on enhancing security, reducing manual efforts, and optimizing cloud server costs.",
        //Led the development of Samsung\'s in-house Identity and Access Management (IAM) system, managing cloud security for around 5000 servers and 700 databases globally. Revamped the desktop application to a secure web application for multiple platforms. Developed a comprehensive Security Hub for Samsung services, adopted on a global scale. Implemented a microservices-based architecture using Python FastAPI on serverless infrastructure and SQL Alchemy for dashboard development.
        "highlights": [
            "Innovated a 1-click single sign-on platform for 1500+ cloud resources, utilized by 50+ Samsung Smart TV services.",
            "Achieved almost 100% AWS Server automation using Ansible, enhancing response times by up to 300%.",
            "Pivoted to serverless infrastructure with automated provisioning pipelines, significantly reducing manual effort by 90%.",
            "Developed a secure Amazon RDS user management system with a 2-layer password rotation method.",
            "Created and managed over 100+ REST APIs to support the system, along with batches and server automations.",
            "Implemented scalable and cost-effective RDS audit log management, supporting 5+ DBMS including MySQL, PostgreSQL, and Oracle.",
            "Automated domain-joining for 15+ Linux distributions to Microsoft Active Directory.",
            "Accomplished faster log search queries on static logs in S3 using Amazon Athena and Kafka.",
            "Created a desktop application for windows basedin C# and further Revamped it to a web socket-based Secure Web application for Linux, Windows, and MacOS.",
            "Ensured 99.9% availability through a microservices architecture using Golang, Python, FastAPI, and the ELK stack.",
            "Led global roll-out across 10+ divisions, expanding product scope and training team members.",
            "Promoted to module ownership of multiple components of Samsung Cloud Infra IAM."
        ],
        "link": "",
        "learn": [
            "Serverless architecture",
            "AWS automation with Ansible",
            "Multi-cloud management",
            "Identity and Access Management (IAM)","Microsoft Active Directory administration including backup",
            "Infrastructure as Code with Terraform",
            "Microservices architecture"
        ]
    }, 
    samsung_soh:{
        // 'Led the development of Samsung\'s in-house Identity and Access Management (IAM) system, managing cloud security for around 5000 servers and 700 databases globally. Revamped the desktop application to a secure web application for multiple platforms. Developed a comprehensive Security Hub for Samsung services, adopted on a global scale. Implemented a microservices-based architecture using Python FastAPI on serverless infrastructure and SQL Alchemy for dashboard development.',
        "title": "Global-Scale Security Hub Development",
        "details": "Led the development of a zero-trust Security Hub with 99.9% availability, supporting multi-cloud environments (AWS, Azure, GCP) and enhancing infrastructure resilience and scalability through serverless architecture and advanced threat mitigation.",
        "highlights": [
            "Architected a zero-trust Security Hub with 99.9% availability using FastAPI, ELK stack, Terraform, and Kubernetes.",
            "Rolled out the Security Hub across 10+ global divisions, supporting secure multi-cloud access.",
            "Boosted infrastructure resilience by 40% and scalability by 70% with advanced threat mitigation and containerization.",
            "Pivoted to serverless architecture with automated provisioning, improving response times by 300%.",
            "Developed a subsystem for monitoring firewalls and OpenVAS vulnerabilities, automating notifications to server managers."
        ],
        "link": "",
        "learn": [
            "NextJS","SQLAlchemy","FastApi","OpenVAS",
            "Serverless Architecture",
            "Multi-cloud Management"
        ]
    },
    samsung_erms:{
        //'Developed a real-time email tracking and productivity management system for Samsung customer care. Automated downloading of emails from Samsung Support IDs and attendance-based allocation to support center employees. Implemented notification and issue tracking for customer tickets, reducing turnaround time to less than a day and increasing employee efficiency by 80%.',
        "title": "Real-Time Email Tracking System for Samsung Customer Care",
        "details": "Designed and developed a real-time email tracking system for Samsung Customer Care to enhance operational efficiency and improve response times. The system automated the downloading of over 5,000 emails daily, managed ticket allocation for over 100 users, and tracked employee efficiency. Utilized a tech stack including Java, Spring, MyBatis, Hibernate, MySQL, Vue.js, and JavaScript, and implemented CI/CD pipelines for seamless deployment and updates.",
        "highlights": [
            "Engineered a Golang-based batch process running as a cron job to automate the downloading and processing of over 5,000 emails daily from multiple support IDs, funneling them into a centralized system for intelligent distribution.",
            "Developed an automated ticket allocation system integrated with attendance management, improving turnaround time (TAT) to under a day and increasing employee efficiency by 80% across over 100 users.",
            "Implemented robust tracking features for employee productivity and system performance, providing actionable insights to enhance operational efficiency.",
            "Coordinated with cross-functional teams using agile methodologies, ensuring smooth project execution and effective communication throughout the development process.",
            "Designed and deployed CI/CD pipelines for automated, efficient deployment and continuous integration, streamlining updates and maintenance."
        ],
        "link": "",
        "learn": [
            "Golang for batch processing and automation",
            "CI/CD pipeline creation and management",
            "Advanced email handling and automation techniques",
            "Agile project management and cross-team coordination"
        ]
    },  
    portfolio:{
        "title": "Portfolio Overview",
        "details": "This portfolio serves as a comprehensive showcase of my technical skills, experience, and professional journey, meticulously built using Svelte and TypeScript. It provides a detailed overview of my work and highlights my expertise in modern web technologies and continuous integration/deployment (CI/CD) processes.",
        "highlights": [
            "Developed a responsive portfolio with both dark and light modes, ensuring a versatile and user-friendly viewing experience.",
            "Implemented CI/CD pipelines using GitHub Actions, demonstrating advanced skills in automating workflows and managing deployments efficiently.",
            "Crafted the portfolio using Svelte and TypeScript, showcasing my proficiency in modern frontend frameworks and strong type safety.",
            "Included detailed sections for Projects, Education, Experience, and a downloadable Resume, providing a complete view of my professional background.",
            "Highlighted key projects with hands-on experience, emphasizing my ability to architect, develop, and deploy complex systems.",
            "Optimized performance and accessibility of the portfolio, reflecting best practices in frontend development and user experience.",
            "Showcased my learning journey through practical application of Svelte, TypeScript, and CI/CD processes, underscoring my commitment to continuous improvement and innovation."
        ],
        "link": "https://anishphilip012git.github.io/portfolio",
        "learn": [
            "Svelte and TypeScript development",
            "CI/CD with GitHub Actions",
            "Frontend performance optimization",
            "Responsive design and user experience"
        ]
    },
      
    ds_prob_stats:{

    }

}