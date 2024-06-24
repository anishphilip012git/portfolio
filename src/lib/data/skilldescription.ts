import type { SkillDescription } from "$lib/types";



  export function getSkillDescription(key: string): string {
    const skill = skillDescriptions[key.toLowerCase()];
    if (!skill) return '';
    const experienceHTML = skill.experience.map(item => `<li>${item}</li>`).join('');
    const projectsHTML = skill.projects.map(project => {
      const linkHTML = project.link ? ` <a href="${project.link}">[View Project]</a>` : '';
      return `<li><strong>${project.title}</strong>: ${project.details}${linkHTML}</li>`;
    }).join('');
  
    // return ` Trivia:
    //     ${skill.trivia}
    //     Experience:
    //     <ul>${experienceHTML}</ul>
    //     <h3>Notable Projects:</h3>
    //     <ul>${projectsHTML}</ul>    `;
    return ` <section >
        Trivia:
        ${skill.trivia}
        <h6>Experience:</h6>
        <ul>${experienceHTML}</ul>
        <p>Notable Projects:</p>
        <ul>${projectsHTML}</ul>
      </section>    `;

  }


  const skillDescriptions: { [key: string]: SkillDescription } = {
    python: {
  
  trivia: 'Python is a high-level, interpreted, general-purpose programming language.<br> It was created by Guido van Rossum and first released in 1991. It is a versatile language that can be used for a wide range of applications, including web development, data analysis, machine learning, automation, and more.',
  experience: [
    '2015-Present: Using Python for creating websites (using Django Framework) and tools for automation.',
    'Undergraduate Thesis Research: Developed tools for Data warehousing algorithms for OLAP Cube computation using Python.',
    'Samsung: Extensively used Python for deploying serverless Rest APIs. Wrote over 80 REST APIs deployed on AWS Lambda, Azure Functions and GCP Cloud Functions',
    'Graduate Researcher at Stony Brook: Explored numerous libraries for machine learning and data science, such as ScikitLearn, TensorFlow, Numpy, and Pandas.'
  ],
  projects: [
    { title: 'Web Development', details: 'Created multiple websites using the Django Framework.' },
    { title: 'Data Warehousing Algorithms', details: 'Developed algorithms for OLAP Cube computation as part of undergraduate thesis research.' },
    { title: 'Serverless APIs at Samsung', details: 'Deployed 80+ serverless REST APIs over AWS Lambda,Azure Functions and GCP Cloud functions' },
    { title: 'Machine Learning and Data Science Projects', details: 'Evaluated the significance of a place using Python.', link: 'https://www.linkedin.com/in/anishphilip12/details/projects/1709442986008/single-media-viewer/?profileId=ACoAABGGalcBOgCoZ-ElFybA18MJOi1Zq0x7ytE' },
    { title: 'Machine Learning and Data Science Projects', details: 'Implemented Reinforcement projects using ScikitLearn, TensorFlow, Numpy, and Pandas.', link: 'https://www.linkedin.com/in/anishphilip12/overlay/1709443399002/single-media-viewer/?profileId=ACoAABGGalcBOgCoZ-ElFybA18MJOi1Zq0x7ytE' }
  ]},
};