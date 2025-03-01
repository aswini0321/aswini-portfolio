import Img from "../images/image.png";
import internpe from "../images/internpe.jpg"
import technohacks from "../images/technohacks.png";
import stanns from "../images/stanns.png";
import aprjc from "../images/aprjc.jpg";
import VignanLogo from "../images/vignanlogo.png";
import events from "../images/events.png";
import teaminfo from "../images/teaminfo.png";
import Quiz from "../images/Quizz.png";


export const Bio = {
    name: "Aswini Pedada",
    roles: [
      "Full Stack Developer",
      "Competative Programmer"
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges.",
    github: "https://github.com/aswini0321",
    resume:
      "https://drive.google.com/file/d/1GowOwtNj5sEd4FKKeYz5rqy2XUlWNCao/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/aswini0321",
    twitter: "https://x.com/aswini0321",
    insta: "https://www.instagram.com/aswini0321/",
    // facebook: "https://www.facebook.com/share/18UVadzE3T/",
  };
  
  export const skills = [
    {
      title: "Technologies",
      icon:Img,
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "TailwindCSS",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
      ],
    },
    {
      title: "Languages",
      icon:Img,
      skills: [
       
        {
          name: "C",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        },
        {
          name: "C++",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        },
        
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Tools",
      icon:Img,
      skills: [
        {
          name: "Git",
          image:
           "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
                "https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo-thumbnail.png"
        },
        {
          name: "MongoDB Compass",
          image:
            "https://cdn.icon-icons.com/icons2/3053/PNG/512/mongodb_compass_macos_bigsur_icon_189933.png"
        }
      ],
    },
    {
      title: "Others",
      icon:Img,
      skills: [
        
        {
          name: "Problem Solving",
          image : "https://static.vecteezy.com/system/resources/thumbnails/005/132/029/small/problem-and-solution-in-business-solving-to-look-ideas-with-the-concept-of-teamwork-can-use-for-web-banner-or-background-flat-illustration-vector.jpg"
        },
        {
          name: "Leadership",
          image : "data:image/jpeg;base64,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d/tWulVceHx5N8ncR/Ulr7pWvTJVsuq00gz259XBR7XNuaku/s3fDPyXi+XVBHH6Gr3ryBI5K0jetNLuZ45PROVa2QtL8faBBXmiCpJxjPBUREBERAREQEREBERAREQFfDG+aVkUTC+R7g1rWjJcSeACsWT2Y/jJaf77D+2EEdlurZLj+To6Od1aJDF5uIzvNYOC3TzyMHgve62S6Wcx/lW3VVJvclm/iLNWOzK3azfy8Tced8qf23rGVGzV2O2Nrt14O9jrqwCNvnTZfo9Y1ciccEGti1XSK5i3ChqmXB3RFNunbw5HLTz4gq64WG8W2WKO4WuspnznTEJoHN3h7G5HE+C6lV1Lbl5XdmbzDjd3CEyNLRj6plZ8GhYazVE1VslIamaSXdbUU271uLtGQ7lnkg0yq2W2go90Kuy18O+eI4t5A5ut55NGevuVlx2avtrpjU3Gz11NACAZZadzWgnlkkLol4td4pPKtSVddJmhnvQ3DRVNfjpegHEt9YCjXulr6HZPa+e6yARXGthdbw+oa8va2eTVpbkkY4dSDlyKp5qiAiIgIiICIiAiIgIiICIiAsjs9JHDfrbNM9rI46uJz3uOA0B4ySsciDqUNNSW7yqRX+W+WWShqbvNK10Ncx5Yx5e4OeB9UcufaFB2coKXZ3bSK6V93s80MbKmojFNXNkGoMOlpxyJJAA5rnmT2pk9qDq2z98s1ZPshVjzC0C3V9TBJTGfg1j2B4eS92Q3UXDJ4ZKhZorDYoqCe722qqKq/QVeKOpErYomZy57hwHEhc2yUye1B0y5UtNS+UuG/m9Waahnu4kBgr2PcxmrOpwB4DvWL2hr6G87O3GN1TCKu1XWWSj+kH6RTzPOoN49LS5od4OWj5PamT2oDufBUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k="
        },
        {
          name: "Teamwork",
          image : "https://t3.ftcdn.net/jpg/03/91/37/12/360_F_391371227_OOPKuywmf6dqwOTsw4Dfu0iDejLKyZZC.jpg"
        },
        {
          name: "Communication",
          image : "https://t3.ftcdn.net/jpg/03/91/37/12/360_F_391371227_OOPKuywmf6dqwOTsw4Dfu0iDejLKyZZC.jpg"
        },
        {
          name: "Time Management",
          image : "data:image/jpeg;base64,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"
        },
        {
          name: "Critical Thinking",
          image : "data:image/jpeg;base64,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"
        },
        {
          name: "Adaptability",
          image : "data:image/png;base64,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"
        }
      ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: technohacks,
      role: "Full Stack Developer Intern",
      company: "TECHNOHACKS SOLUTIONS",
      date: "may 2024 - june 2024",
      desc: "• Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js;Built responsive UIs and integrated RESTful APIs for seamless data flow;Managed data efficiently using MongoDB for storage and retrieval.",
      skills: [
        "mongoDB",
        "ReactJS",
        "NodeJs",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
      doc:"",
    },
    {
      id: 1,
      img: internpe,
      role: "Web Developer Intern",
      company: "INTERNPE",
      date: "may 2023 - June 2023",
      desc: "• Built and maintained web applications using HTML, CSS, and JavaScript; Developed interactive forms, buttons, and other dynamic website elements; Applied CSS for styling and JavaScript for client-side functionality to improve user interactivity",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
      doc: "",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: VignanLogo,
      school: "Vignan's Institute of Information Technology, Visakhapatnam",
      date: "June 2021 - Apr 2025",
      grade: "9.29 CGPA",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: aprjc,
      school: "A.P.R junior college",
      date: "May 2019 - May 2021",
      grade: "97.8%",
      degree: "Intermediate, MPC",
    },
    {
      id: 2,
      img: stanns,
      school: "ST.ANN'S HIGH SCHOOL",
      date: "Apr 2019",
      grade: "10/10",
      degree: "School, state",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Team-Info",
      description:
        ` 
  • Implemented and managed a comprehensive team management system.
• Developed progress-tracking features for admins, team leads.
• Enabled admins to monitor project completion, team performance, and individual progress.
• Allowed team leads to manage teams, track progress, and update their own status.
• Facilitated team members in focusing on tasks, updating personal progress, and reporting issues.
`,
      image: teaminfo,
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "CSS",
        "Bcrypt",
        "Mongoose",
        "Context-API"
      ],
      github: "https://github.com/aswini0321/TEAM-MANAGEMENT-DASHBOARD",
      webapp: "https://team-management-dashboard-1jek.vercel.app/",
    },
    {
      id: 1,
      title: "Events-Hub",
      description:
      `
       • Developed a platform for students to discover hackathons, contests, ideathons, and workshops.
• Designed a user-friendly interface for easy sign-up, login, and event applications.
• Enabled event organizers to register, log in, and post upcoming events.
• Implemented category-based event filtering and date selection for participants.
• Enhanced student engagement through personalized event recommendations and real-time notifications.
`,
      image: events,
      tags: ["React Js", "MongoDB", "Node Js", "Express Js","PostMan","Axios", "CORS","Bootstrap", "React Router DOM"],
      github: "https://github.com/aswini0321/EVENTS_HUB_FRONTEND",
      webapp: "https://events-hub-frontend-pi.vercel.app/",
    },
    // {
    //   id: 2,
    //   title: "Team-Info",
    //   description:
    //   ` 
    //   - TeamInfo is a powerful team management system designed to improve communication and streamline progress tracking. It features role-based access for Admins, Team Leads, and Team Members.
    //   - Admin: Admins have a comprehensive overview of team performance, tracking completed projects, top-performing teams, and overall progress. They can also drill down into individual team details, viewing the progress of each team member and Team Lead by selecting the desired team.
    //   - Team Lead: Team Leads are empowered to manage their teams efficiently. They can update their own progress and oversee the progress of each team member, ensuring that the team stays on track and meets its goals.
    //   - Team Member: Team Members focus on their tasks, regularly update their progress, and report any issues to prevent delays.
    //   `,
    //   image: TeamInfo,
    //   tags: [
    //     "React Js",
    //     "Node Js",
    //     "Express Js",
    //     "MongoDB",
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Context-API",
    //     "Bcrypt"
    //   ],
    //   github: "https://github.com/sharmi4590/domana",
    //   webapp: "https://domain-analyzer-ten.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "OpenAI-Quizz",
    //   description:`
    //   - Automated Quiz Generation with OpenAI: Enabled PDF upload, content extraction, and parsing with Google Generative AI (Gemini-Api) to create multiple-choice questions in an interactive quiz format.
    //   -Score Calculation & Feedback: Designed functionality to evaluate responses, display scores, and provide users the option to re-attempt the quiz.
    //   -Dynamic Re-attempts: Implemented random shuffling of questions and options on re-attempts to enhance engagement and challenge.
    //   `,
    //   image: Quiz,
    //   tags: ["React JS", "TailwindCSS", "NodeJS", "Javascript", "Express Js" , "MongoDB" , "Gemini-API"],
    //   github: "https://github.com/LOKESHDUMPALA/Globus-learn",
    //   webapp: "https://github.com/LOKESHDUMPALA/Globus-learn",
    // },
    
  ];
export const codingProfiles = [
  
  {
    name: "LeetCode",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/u/aswini0321/",
  },
  {
    name: "Codechef",
    image: "https://www.codechef.com/sites/all/themes/abessive/logo.svg",
    link: "https://www.codechef.com/users/aswini0321",
  },
  {
    name: "Coding-Ninjas",
    image: "data:image/jpeg;base64,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",
    link: "https://www.naukri.com/code360/profile/aswini0321",
  },
  {
    name: "GeeksforGeeks",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png",
    link: "https://www.geeksforgeeks.org/user/pedadaaswini2004/",
  },
  
];



export const achievements = [
  "• Solved 800+ problems on LeetCode (Highest Rating: 1619)" ,
  "• Solved 700+ problems on CodeChef (Highest Rating: 1603)",
  "• Secured 5th place in CODESPRINT coding contest out of 200 participants",
  "• Achieved top 10th place in SUSHACKS hackathon out of 100 teams" ,
  "• Secured 95 percent in Young Turks India’s largest skill contest" ,
];
