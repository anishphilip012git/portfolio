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
        <p> Key learning: </p>
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
        details: "Associated with Stony Brook University (Jan 2024 - Present). This project focused on digitizing offline workflows within the Computer Science department, developing a web application to manage and track progress, and integrating various APIs to enhance efficiency and user experience.",
        highlights: [
            "Workflow Digitization: Digitized 80% of offline workflows within the Computer Science department. Developed a web application to manage and track the progress of various procedures. Implemented online form filling and signing using Adobe PDF APIs. Achieved a 60% reduction in processing time with a real-time progress tracker.",
            "Backend Infrastructure and Real-Time Data Management: Utilized Google Cloud Platform (GCP) and Firebase for a scalable backend. Implemented microservices architecture for efficient data handling. Created Docker containers for consistent local server deployment.",
            "User Interface Transformation: Transformed a university website from non-mobile-friendly to mobile-friendly. Resulted in a 30% increase in traffic and an enhanced user experience.",
            "Integration with Google (Calendar and Mail) API: Seamlessly integrated with Google Calendar for scheduling events. Benefited over 500 students and faculty members for presentations."
        ],
        link: 'http://workflow.cs.stonybrook.edu/',
        learn: ['GCP','NodeJS', 'firebase', 'microservices', 'docker', 'adobe-pdf-apis', 'google-apis']
    },
    // prob-stats:{

    // }

}