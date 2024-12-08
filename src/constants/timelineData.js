import { type } from "@testing-library/user-event/dist/type";

export const timelineData = [
  {
    title: "AI Engineer - Captury GmbH | Acquired by DARI Motion",
    date: "July 2021 - Present",
    description: "4th member to join the startup. Leading the developement of the vision based AI solution for markerless tracking. The products / solutions has been developed by me from scratch inclduing the dataset generation strategies, algorithmic design, thorough experiment tracking and monitoring & anaylsis in production for drifts.",
    links: [
      {
        url: "https://captury.com/",
        text: "Captury GmbH"
      },
      {
        url: "https://www.darimotion.com",
        text: "DARI Motion"
      }
    ],
    location: "Saarbrucken, Germany",
    subtimeline: [
      {
        title: "Low-Resolution Hand Tracking",
        date: "January 2022 - Present",
        description: "Led development of state-of-the-art hand tracking technology optimized for low-resolution inputs. Now in production, contributing significantly to revenue growth.",
        status: "In Production",
        type: "AI",
        tags: ["vision", "Deep learning", "Python", "Pytorch", "gradio", "tensorboard", "data-synthesis", "data-collection"],
        video: {
          url: "https://www.youtube.com/watch?v=p_7iE6UsSLM",
          thumbnail: "https://img.youtube.com/vi/p_7iE6UsSLM/maxresdefault.jpg",
          description: "Captury - Feature Release - Hand Tracking Demo"
        }
      },
      {
        title: "Full Body Tracking",
        date: "September 2022 - Now",
        description: "Improved the existing fully body tracking capability with better AI Model and architecture bug fixes.",
        status: "In Production",
        type: "AI",
        video: {
          url: "https://www.youtube.com/watch?v=hvf8cn8S0q4",
          thumbnail: "https://img.youtube.com/vi/hvf8cn8S0q4/maxresdefault.jpg",
          description: "Captury - Full Body Tracking"
        }
      },
      {
        title: "Instrument Tracking",
        date: "December 2023 - August 2024",
        description: "Spearheaded development of AI-driven tracking systems for guitar and violin using vision-based models. Engineered robust rendering pipeline in Blender.",
        status: "In Production",
        type: "AI",
        image: "images/guitar_picture.png"
      },
      {
        title: "Unreal Engine, Unity and Oculus Quest", 
        date: "from-time-to-time",
        description: "Contributed to the development of 3D simulation using Unreal Engine, Unity and Oculus Quest. Creating the client demos and use case demonstrations.",
        status: "In Production",
        type: "Software",
        video: {
          url: "https://www.youtube.com/watch?v=5ZpioiUD7Uw",
          thumbnail: "https://img.youtube.com/vi/5ZpioiUD7Uw/maxresdefault.jpg",
          description: "Real time game play demo"
        }
      },
      {
        title: "Python Bindings",
        date: "March 2022 - June 2022",
        description: "Developed Python library using Python-C APIs for batch processing, server farm utilization, and dataset generation. Widely used internally and by clients.",
        type: "Software",
        tags: ["C", "C++", "Python", "CMake"], 
        image: "images/python_language.png",
        links: [
          {
            url: "http://doc.captury.com/python.html",
            text: "Documentation"
          }
        ],
        status: "In Production"
      },
      {
        title: "Ball Tracking & Generalised Object Tracking",
        date: "April 2024 - Present",
        description: "Leading the development of sports ball tracking using vision-based AI algorithms.",
        status: "In Progress",
        type: "AI",
        tags: ["deep learning", "python", "pytorch"],
        image: "images/sports_ball.png",
      }
    ]
  },
  {
    title: "Deep Learning Intern - Captury GmbH",
    date: "May 2020 - December 2020",
    description: "Internship at Captury GmbH under mentorship of Dr. Nils Hasler (CTO) & Michal Ritcher (Sr. SW Dev.)",
    location: "Remote",
    subtimeline: [
      {
        title: "Fast Background Subtraction",
        description: "Developed deep learning model with randomization of foreground (Humans) and backgrounds (COCO)",
        type: "AI",
        tags: ["deep learning", "python", "pytorch", "COCO",],
        image: "images/bg_sub.png",

      },
      {
        title: "3D Face Landmark Annotation",
        description: "Implemented back-projection using ray cast in multiview geometry instead of point triangulation",
        type: "Software",
        tags: ["python", "blender", "Computer Vision"],
        image: "images/face_3D.png",

        video: [
          {
            url: "https://drive.google.com/file/d/1_uv40hLTe29o_fsk1gs2nk-UwPr3QNIS/view?usp=sharing",
            description: "Demo 1"
          },
          {
            url: "https://drive.google.com/file/d/1CshZtsm7k-z4EGK6T9s9T9SrL4EpNhyg/view?usp=sharing",
            description: "Demo 2"
          }
        ]
      },
      {
        title: "Facial Expression - Shape Key Prediction",
        description: "Worked on shape key prediction using 3D characters from Reallusion, including data generation and randomization in Blender",
        type: "Software",
        tags: ["python", "blender", "Computer Vision"],
        image: "images/face.png",
        video: {
          url: "https://drive.google.com/file/d/1-uA78oCkMkEz8hkRawuLq6v3ygjMEkBF/view?usp=sharing",
          description: "Shape Key Prediction Demo"
        }
      }
    ]
  },
  {
    title: "Research Collaboration - National Institute of Informatics (NII)",
    date: "April 2020 - March 2021",
    description: "Year-long research collaboration resulting in 2 publications, working with Prof. Isao Echizen (NII, Japan) and Dr. Harkeerat Kaur (IIT Jammu)",
    location: "Remote",
    subtimeline: [
      {
        title: "Published in AINA'21",
        description: "Reinforcement Learning based Smart Data Agent for Location Privacy",
        type: "AI Research",
        tags: ["deep learning", "reinforcement learning", "python", "pytorch", "Research"],
        image: "images/research.png",
        links: [
          {
            url: "https://www.springer.com/gp/book/9783030750749?wt_mc=Internal.Event.1.SEM.ChapterAuthorCongrat",
            text: "View Publication"
          }
        ]
      },
      {
        title: "Published in IEEE-SSCI'20",
        description: "Smart Data Agent for Preserving Location Privacy",
        type: "AI Research",
        tags: ["python", "pytorch", "Research"],
        image: "images/research.png",
        links: [
          {
            url: "https://ieeexplore.ieee.org/document/9308396",
            text: "View Publication"
          }
        ]
      }
    ]
  },
  {
    title: "Machine Learning Research Internship - IIT Bombay",
    date: "May 2019 - July 2019",
    description: "Research internship focused on Object Detection under Prof. Virendra Singh at IIT Bombay",
    location: "Mumbai, India",
  },
  {
    title: "BTech in Computer Science and Engineering - IIT Jammu",
    date: "2017 - 2021",
    description: "Graduated with 7.4/10 GPA from Indian Institute of Technology Jammu",
    location: "Jammu, India",
    subtimeline: [
      {
        title: "Cultural Secretary",
        date: "2019 - 2020",
        description: "Led a team of 30 for 10-day long Foundation Program and initiated Senior Mentorship Programme. Started student mentorship program initiative. Led financial planning for the cultural clubs.",
        image: "images/leader.png",
        tags: ["leadership", "teamwork", "communication"],
        links: [
          {
            url: "https://iitjammu.ac.in/post/foundation-program",
            text: "Foundation Program"
          }
        ]
      }
    ]
  }
];
