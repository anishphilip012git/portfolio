# Portfolio Overview

Welcome to my portfolio—a comprehensive showcase of my skills, experience, and professional journey, meticulously crafted using Svelte and TypeScript. Below, you'll find insights into the key sections of my portfolio, each designed to provide a detailed overview of my work.

### Key Features
- Dark and Light Modes: Enjoy a seamless viewing experience with both dark and light modes, tailored to your preference and environment.
- CI/CD Integration: The portfolio is deployed using GitHub Actions, demonstrating my expertise in continuous integration and deployment. This reflects my proficiency in automating workflows and ensuring efficient, reliable deployments.
### Sections
- Projects: A collection of my most notable work, showcasing my ability to architect, develop, and deploy complex systems. While much of my work is restrictive, I’ve shared as much as possible here.
- Education: A summary of my academic background, highlighting the knowledge and skills that have shaped my professional path.
- Experience: An overview of my career, detailing the roles and responsibilities that have contributed to my growth as a developer.
- Resume: A downloadable version of my resume, providing a concise view of my skills, experiences, and achievements.
### Learning Journey
This portfolio is more than just a showcase; it represents my learning journey. By building it from the ground up, I gained hands-on experience in Svelte, honed my TypeScript skills, and enhanced my understanding of CI/CD processes through GitHub Actions.


#### Passing it on:
##### Slick Portfolio With Svelte.

Vercel-like style portfolio template for developers.

If you want to use the template as it is, you can :

- update files in `src/lib/data` with your data.
- update `src/lib/index.scss` for custom styling.
- update `static/favicon.ico` to customize the tab's icon.

Feel free to explore and hack the template to your needs if you feel like it.

Before deploying to `GitHub Pages`:

- make sure to change the `base` parameter in `svelte.config.js`.
- make sure to update the target branch of the `deploy.yml` file, it is set to build from `master` branch by default.
- Allow `GitHub Pages` in your repo settings with correct permissions:
  - Persmission:
    - go to your repo `Settings` > `Actions` > `General`
    - in `Actions permissions` : check `Allow all actions and reusable workflows`
  - Pages:
    - go to your repo's `Settings` > `Pages`
    - in Source section, select `Deploy from a branch`.
    - in Branch section, select `gh-pages` and `/ (root)` and click on save

if you did all the above `CORRECTLY`, and no workflow was launched, try to push another commit (maybe an empty one), otherwise you can create an issue and link your repo.

## Known issues:

- Svelte no longer support `node 14`, use a newer version instead.
