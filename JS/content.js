export const portfolio = {
  meta: {
    title: "Divakar Thiyagarajen | Software Engineer",
    name: "Divakar Thiyagarajen",
    shortName: "Diva",
    role: "Software Development Engineer II",
    location: "Hyderabad, India",
    email: "divakar1669@gmail.com",
    phone: "(+91) 7395902123",
    address: "7/18, East Chetty Street, St. Thomas Mount, Chennai, TN, India",
    resumeUrl: "https://resume-divakar1669-development.zohostratus.in/Resume___divakar1669.pdf",
    profileImage: "./images/aboutMe/1667041650094.jpeg",
    resumeIcon: "./images/aboutMe/resume_574803.png",
  },
  nav: [
    { label: "About", target: "about" },
    { label: "Experience", target: "experience" },
    { label: "Education", target: "education" },
    { label: "Skills", target: "skills" },
    { label: "Books", target: "books" },
    { label: "Contact", target: "contact" },
  ],
  hero: {
    eyebrow: "Personal Portfolio",
    title: "I build practical software with clean backend thinking and product ownership.",
    summary:
      "Software engineer with experience across Microsoft 1JS, Office and Copilot developer tooling, cloud platform work, production support, and backend systems.",
    highlights: ["Microsoft 1JS", "Office & Copilot", "Backend Engineering", "Developer Tooling"],
    primaryCta: "Download Resume",
    secondaryCta: "Contact Me",
  },
  about: {
    heading: "About Me",
    body:
      "I am an inquisitive tech enthusiast who likes understanding how systems work from the foundation upward. This site gives a concise view of my professional experience, education, skills, coding profiles, and reading interests.",
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "9.16", label: "CGPA" },
    ],
  },
  experience: [
    {
      title: "Software Development Engineer II",
      company: "Microsoft Corporation",
      period: "June 2024 to May 2026",
      location: "Hyderabad, India",
      logo: "./images/work Experience/Microsoft-logo.png",
      description:
        "Key contributor in the 1JS team within E+D, enabling faster and safer development across the Office and Copilot ecosystem.",
      responsibilities: [
        "Improved developer efficiency by 30% and reduced deployment errors by 25% for 1,000+ developers.",
        "Spearheaded Spot VM adoption for optional pipelines, reducing infrastructure costs by 40%.",
        "Designed Grafana dashboards for system metrics, improving observability and reducing troubleshooting time by 15 minutes.",
        "Resolved a critical optional 1JS pipeline outage within 2 days while preserving test coverage.",
        "Delivered cross-team production tooling adopted by multiple engineering teams.",
      ],
      tools: ["1JS", "Office", "Copilot", "Grafana", "Spot VMs", "Developer Tooling", "Production Pipelines"],
    },
    {
      title: "Software Development Engineer",
      company: "Zoho",
      period: "October 2022 to June 2024",
      location: "Chennai, TN, India",
      logo: "./images/work Experience/Zoho-logo.png",
      description:
        "Working on Catalyst by Zoho, a scalable serverless platform that helps developers build and deploy solutions without managing servers.",
      responsibilities: [
        "Optimized platform workflows across cron jobs, event listeners, and automated backend processes.",
        "Implemented monitoring mechanisms to identify and resolve issues proactively.",
        "Contributed documentation, technical guidelines, and code review feedback to improve platform quality.",
        "Collaborated with the development team to identify product and engineering improvements.",
      ],
      tools: ["Java", "JavaScript", "MySQL", "NPM", "Webpack", "GitLab", "GitHub", "Postman", "Eclipse", "IntelliJ IDEA", "VS Code"],
    },
    {
      title: "Program Analyst",
      company: "Cognizant",
      period: "February 2021 to October 2022",
      location: "Chennai, TN, India",
      logo: "./images/work Experience/CTSH_BIG.png",
      description:
        "Worked as an application developer for a large US healthcare client, supporting application development, production stability, and issue resolution.",
      responsibilities: [
        "Built and supported application features with cross-functional teams.",
        "Designed and maintained data ingestion workflows from multiple sources.",
        "Resolved production issues within SLA and improved delivery quality.",
        "Created technical documentation for applications, processes, and operational procedures.",
      ],
      tools: ["SQL", "Git", "JIRA", "ServiceNow", "Production Support"],
    },
  ],
  education: [
    {
      period: "August 2017 to May 2021",
      title: "Bachelor Degree in Engineering",
      institution: "Sri Sai Ram Institute Of Technology",
      board: "Anna University",
      score: "CGPA 9.16",
    },
    {
      period: "July 2015 to May 2017",
      title: "Class 12",
      institution: "Montfort Matric Higher Secondary School",
      board: "Tamil Nadu State Board",
      score: "89.75%",
    },
    {
      period: "July 2004 to May 2015",
      title: "Class 10",
      institution: "Montfort Matric Higher Secondary School",
      board: "Tamil Nadu State Board",
      score: "95.5%",
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", icon: "./images/skills/java.png" },
        { name: "Python", icon: "./images/skills/python.webp" },
        { name: "C", icon: "./images/skills/c.png" },
        { name: "C++", icon: "./images/skills/c++.png" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: "./images/skills/Database-mysql.svg.png" },
        { name: "PostgreSQL", icon: "./images/skills/Postgresql_elephant.svg.png" },
        { name: "MongoDB", icon: "./images/skills/mongoDb.png" },
        { name: "Firebase", icon: "./images/skills/fireBase.png" },
      ],
    },
    {
      title: "Full Stack",
      items: [
        { name: "HTML5", icon: "./images/skills/html5.png" },
        { name: "CSS", icon: "./images/skills/css.svg" },
        { name: "JavaScript", icon: "./images/skills/js.png" },
        { name: "React", icon: "./images/skills/React-icon.svg.png" },
        { name: "Spring", icon: "./images/skills/spring.png" },
        { name: "Node.js", icon: "./images/skills/NODE.png" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Eclipse", icon: "./images/skills/ecllipse.png" },
        { name: "IntelliJ IDEA", icon: "./images/skills/IntelliJ_IDEA.svg.png" },
        { name: "VS Code", icon: "./images/skills/vscode.png" },
      ],
    },
  ],
  profiles: [
    {
      label: "LeetCode",
      url: "https://leetcode.com/divakar1669/",
      text: "Problem solving, patterns, and coding practice.",
      image: "./images/skills/LeetCode.png",
    },
    {
      label: "GitHub",
      url: "https://github.com/divakar1669",
      text: "Code, experiments, and personal projects.",
      image: "./images/Social/github.png",
    },
  ],
  books: [
    {
      category: "Personal Finance",
      items: [
        { title: "Rich Dad Poor Dad", image: "./images/books/personalFinance/RichDadPoorDad.jpeg" },
        { title: "The Psychology of Money", image: "./images/books/personalFinance/PyscologyOfMoney.webp" },
        { title: "Think and Grow Rich", image: "./images/books/personalFinance/Think And grow rich.jpg" },
      ],
    },
    {
      category: "Software Engineering",
      items: [
        { title: "Cracking the Coding Interview", image: "./images/books/computers/CTCI.jpeg" },
        { title: "System Design Interview", image: "./images/books/computers/AlexYu.png" },
        { title: "Head First System Design", image: "./images/books/computers/HeadFirstSystemDesign.jpg" },
      ],
    },
    {
      category: "Autobiography",
      items: [
        { title: "The Wings Of Fire", image: "./images/books/autoBioGraphy/TheWingsOfFire.jpeg" },
        { title: "Steve Jobs", image: "./images/books/autoBioGraphy/stevJobs.jpeg" },
      ],
    },
  ],
  contact: {
    heading: "Get In Touch",
    formAction: "https://fabform.io/f/CbRWrub",
    formFields: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
    },
  },
  social: [
    { label: "Email", url: "mailto:divakar1669@gmail.com", icon: "./images/Social/email.png" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/divakart", icon: "./images/Social/linkedin .png" },
    { label: "GitHub", url: "https://github.com/divakar1669", icon: "./images/Social/github.png" },
    { label: "Twitter", url: "https://twitter.com/divakar1669", icon: "./images/Social/twitter.png" },
    { label: "Instagram", url: "https://www.instagram.com/divakarthiyagarajen/", icon: "./images/Social/instagram.png" },
  ],
  footer: {
    text: "Made with care by Diva",
    contactPrompt: "Share thoughts and insights",
  },
};
