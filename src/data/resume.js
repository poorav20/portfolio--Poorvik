import { Book, Code, Linkedin, Mail, Phone, User } from 'lucide-react';

export const resumeData = {
    personalInfo: {
        name: "POORVIK B S",
        title: "Engineering Student (CSE - AIML)",
        email: "pooravgowda20@gmail.com",
        phone: "+91-8495037784",
        linkedin: "https://www.linkedin.com/in/poorvik-b-s-461aa3292/",
        location: "Ballenahalli, Bookanakere, K.R. Pet, Mandya, Karnataka - 571812",
        objective: "Driven engineering student with practical experience in Java and Python programming, data analysis, cloud services, and problem-solving. Eager to create scalable solutions and gain insights from real-world engineering challenges. Seeking an internship to enhance my development skills while contributing to meaningful projects."
    },
    education: [
        {
            institution: "Dayananda Sagar University, Harohalli",
            degree: "B.Tech (CSE - AIML)",
            year: "2027",
            score: "CGPA: 6.88"
        },
        {
            institution: "12th Grade",
            degree: "PUC",
            year: null,
            score: "91.33%"
        },
        {
            institution: "10th Grade",
            degree: "SSLC",
            year: null,
            score: "92.64%"
        }
    ],
    skills: {
        programming: ["Java", "Python", "SQL", "C (basics)", "Node.js"],
        algorithms: ["Sorting", "Searching", "Greedy", "DP", "Trees", "Graphs"],
        dataAnalysis: ["Pandas", "NumPy", "Matplotlib", "Data Cleaning", "EDA"],
        bigData: ["Apache Spark (RDD/DataFrame operations)"],
        cloud: ["AWS (S3, Lambda, EC2 basics)"],
        development: ["Git", "Debugging", "API integration", "Clean coding"]
    },
    projects: [
        {
            title: "Smart Agriculture Monitoring System",
            type: "IoT + Data Analytics",
            tech: ["Raspberry Pi 3B+", "BH1750", "DHT11", "Motion Sensor", "Python", "AWS S3"],
            description: [
                "Built a real-time crop-monitoring system capturing humidity, soil moisture, and light intensity.",
                "Processed sensor data using Python and visualized trends.",
                "Stored time-series data in AWS S3 for cloud-based analysis.",
                "Improved alert accuracy by 28% using threshold-based algorithms."
            ]
        },
        {
            title: "Movie Recommendation Tool",
            type: "Algorithms + Python",
            tech: ["Python", "Pandas", "Cosine Similarity", "Data Analysis"],
            description: [
                "Developed a recommendation system using similarity algorithms.",
                "Applied feature engineering & data cleaning.",
                "Designed a CLI interface for top 10 movie suggestions."
            ]
        },
        {
            title: "Distributed Log Analyzer",
            type: "Spark Project",
            tech: ["Apache Spark", "PySpark", "SQL"],
            description: [
                "Processed 1M+ server logs using Spark DataFrames.",
                "Reduced execution time from 45s to 9s using partitioning & caching.",
                "Built insights dashboards for error frequency and patterns."
            ]
        }
    ],
    achievements: [
        "Participated in FOSS Meet, contributed to open source",
        "Completed AWS Cloud Practitioner Essentials (self-learning)",
        "Participated 3 Hakathons and One Protothon",
        "Published an Article based on Artificial intelligence and Bias"
    ],
    coursework: [
        "Data Structures & Algorithms",
        "DBMS",
        "Operating Systems (Basics)"
    ],
    strengths: [
        "Analytical thinking",
        "Teamwork",
        "Fast learner"
    ]
};
