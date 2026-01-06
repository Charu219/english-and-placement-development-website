// course-content-data.js

const COURSE_CONTENT = {
    // --- COMMUNICATION DEVELOPMENT (7 Courses) ---

    "general_speaking": {
        title: "General Speaking Course: Achieving Success",
        video_id: "hnFH8T3d0g4", 
        questions: [
            "What are the main qualities for becoming successful according to the video?",
            "From your point of view, what is more important: good education, high IQ, or resilience to reach success? Why?",
            "If you were asked 'How to succeed in life,' what advice would you give?",
        ],
        tips: "Focus on using strong comparative language (e.g., 'more essential than,' 'superior to') and providing concrete examples.",
        tips_title: "Tips & Tricks: Comparative Language"
    },

    "small_talk": {
        title: "How to Make Great Small Talk: Business Trips",
        video_id: "M6Dj7EgQnds", 
        questions: [
            "Describe a time when a simple conversation led to a big opportunity.",
            "What are two topics you should always avoid in professional small talk, and why?",
            "Demonstrate a conversation opener you would use at a professional conference.",
        ],
        tips: "Ensure smooth transitions between topics (e.g., 'Speaking of that...', 'That reminds me...').",
        tips_title: "Tips & Tricks: Smooth Transitions"
    },

    "advanced_speaking": {
        title: "Advanced Speaking Course: Expressing Complex Ideas",
        video_id: "FfhZFRvmaVY", // Placeholder: How to sound more professional
        questions: [
            "Explain a complex technical concept in your field in under 60 seconds without using jargon.",
            "Present two opposing viewpoints on remote work, ensuring your language is formal and objective.",
            "Use modal verbs (must, should, might) to politely express disagreement with a colleague's plan.",
        ],
        tips: "Practice using conditional sentences (e.g., 'If we were to pursue X, we might encounter Y...').",
        tips_title: "Tips & Tricks: Conditional Language"
    },

    "business_english": {
        title: "Business English: Formal Meetings and Negotiation",
        video_id: "kO-xNOOoxsM", // Placeholder: Negotiation tips
        questions: [
            "Summarize the key agenda items for a quarterly review meeting.",
            "Deliver a two-minute pitch persuading a potential client to adopt your product.",
            "Rephrase these casual statements into formal business English: 'I disagree,' 'It's a bad idea,' and 'We need money.'",
        ],
        tips: "Replace common fillers (like 'um,' 'like') with strategic pauses to maintain authority.",
        tips_title: "Tips & Tricks: Pausing for Authority"
    },

    "famous_speeches": {
        title: "Speeches of Famous People: Rhetoric and Delivery",
        video_id: "NaaSpRMBHjg", // Placeholder: Steve Jobs commencement
        questions: [
            "Recite the opening paragraph of your favorite public speech, focusing on clear diction.",
            "Analyze how the speaker in the video used emotion to connect with the audience.",
            "Write a one-minute inspirational message for a team launch, mimicking the pace and tone of the video's speaker.",
        ],
        tips: "Emphasize word stress and intonation patterns to mimic native speakers' rhythms.",
        tips_title: "Tips & Tricks: Stress and Intonation"
    },

    "english_grammar": {
        title: "English Grammar in Use: Mastering Tenses and Articles",
        video_id: "sCiG6rlk2Bc", // Placeholder: Grammar video
        questions: [
            "Describe what you did yesterday, ensuring you correctly use the Past Perfect Tense at least once.",
            "Explain the difference between 'I have been living' and 'I lived' in a foreign city.",
            "Correctly use the indefinite and definite articles ('a,' 'an,' 'the') while describing three objects currently in your room.",
        ],
        tips: "Focus intensely on ensuring correct subject-verb agreement and avoiding common preposition errors.",
        tips_title: "Tips & Tricks: S-V Agreement"
    },

    "famous_interviews": {
        title: "Interviews with Famous People: Clarity and Quick Thinking",
        video_id: "HAnw168huqA", // Placeholder: Interview example
        questions: [
            "Answer the question, 'What is your greatest weakness?' using a method that turns it into a strength.",
            "Summarize the main point of the interviewee in the video in one complex sentence.",
            "Speak for 45 seconds straight on an unfamiliar topic (e.g., quantum computing or deep-sea farming) without pausing.",
        ],
        tips: "Use signposting phrases (e.g., 'Firstly, secondly, in conclusion') to structure extemporaneous responses.",
        tips_title: "Tips & Tricks: Signposting"
    },

    // --- HR QUESTIONS (1 Course) ---
    
    "job_interview": {
        title: "Job Interview Preparation: Behavioral Questions",
        video_id: "2uM7gYuOvr4", // Placeholder: Common interview questions
        questions: [
            "Tell me about a time you had a conflict with a co-worker and how you resolved it (use the STAR method).",
            "Why are you the best candidate for this role?",
            "Where do you see yourself in five years, and what steps are you taking to get there?",
        ],
        tips: "Respond using the STAR (Situation, Task, Action, Result) method for all behavioral questions.",
        tips_title: "Tips & Tricks: The STAR Method"
    },

    // --- GROUP DISCUSSION (4 Courses) ---
    
    "ai_job_replacement": {
        title: "Group Discussion: AI and Job Replacement",
        video_id: "63Gxpf7uT5o", // Placeholder: AI debate
        questions: [
            "Provide two arguments supporting the view that AI will create more jobs than it destroys.",
            "Use persuasive language to counter the argument that 'AI will make humans obsolete.'",
            "Summarize the opposing viewpoint in a fair and objective manner before presenting your own.",
        ],
        tips: "Practice interrupting politely (e.g., 'I apologize for interrupting, but I must add...').",
        tips_title: "Tips & Tricks: Polite Interruption"
    },

    "gender_equality": {
        title: "Group Discussion: Gender Equality in the Workspace",
        video_id: "pXApWpnfNg8", // Placeholder: TED Talk on gender
        questions: [
            "Define 'unconscious bias' and provide a workplace example.",
            "What policy changes do you believe are most effective in promoting pay parity?",
            "Use tentative language (e.g., 'I tend to think,' 'It appears to be...') to express a sensitive opinion.",
        ],
        tips: "Maintain a moderate tone and use evidence-based language (e.g., 'Studies show that...').",
        tips_title: "Tips & Tricks: Tone and Evidence"
    },

    "education_system": {
        title: "Group Discussion: Education System in India",
        video_id: "luN6KX90424", // Placeholder: Indian education
        questions: [
            "Discuss the benefits of vocational training over purely academic learning in the Indian context.",
            "Present a solution to the challenge of unequal access to digital resources in rural areas.",
            "Use rhetorical questions to engage your discussion group and encourage debate.",
        ],
        tips: "Use clear opening statements to define your position before diving into details.",
        tips_title: "Tips & Tricks: Clear Positioning"
    },

    "climate_change": {
        title: "Group Discussion: Climate Change Solutions",
        video_id: "njEQ9zjVxLA", // Placeholder: Greta Thunberg speech
        questions: [
            "What are the roles of government, industry, and the individual in combating climate change?",
            "Debate the economic feasibility of switching entirely to renewable energy sources.",
            "Use strong persuasive words (e.g., 'imperative,' 'critical,' 'catastrophic') to emphasize urgency.",
        ],
        tips: "Master the art of summarization (e.g., 'To briefly recap the points made by...' or 'In conclusion...').",
        tips_title: "Tips & Tricks: Summarization"
    },

    // --- APTITUDE (3 Courses) ---

    "ratio_proportion": {
        title: "Aptitude: Ratio and Proportion",
        video_id: "jfoJBivWlnQ", 
        questions: [
            "Verbally explain the difference between a ratio and a proportion using a real-world example (e.g., cooking or finance).",
            "Describe, step-by-step, how you would solve a complex ratio problem (e.g., mixing colors or ingredients).",
            "Recite the formula for solving a direct proportion problem.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Technical Diction"
    },

    "numbers": {
        title: "Aptitude: Number Systems and Series",
        video_id: "vsBpWgNYjtQ", 
        questions: [
            " Describe the concept of a prime number and provide five consecutive examples.",
            "Verbally walk through the logic of solving a complex number series (e.g., 'What number comes next in 2, 6, 12, 20...?').",
            "Define 'BODMAS' and explain why the order of operations is crucial in mathematics.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Sequential Logic"
    },

    "average": {
        title: "Aptitude: Average and Mean",
        video_id: "rhSxQ4ieAYc", 
        questions: [
            " Explain the relationship between mean, median, and mode using everyday examples.",
            "Describe a scenario in which using the mean average might be misleading, and what alternative you would use.",
            "Recite the definition of a 'weighted average' and why it is used in academic grading.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Definitional Clarity"
    },

    "percentage": {
        title: "Aptitude: Percentage and Fractions",
        video_id: "RWdNhJWwzSs", 
        questions: [
            "Explain the difference between percentage change and percentage point change.",
            " Verbally calculate 15% of 300 and explain the steps.",
            " Describe a real-world instance where converting a fraction to a percentage is necessary (e.g., a stock market report).",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Fractional Precision"
    },

    "profit_loss": {
        title: "Aptitude: Profit and Loss Fundamentals",
        video_id: "T2odvmxqi1I", 
        questions: [
            " Cost Price, Selling Price, and Margin, and state the formula for calculating Net Profit.",
            " Explain the concept of 'discounting' and how it affects the final profit margin for a retailer.",
            " Describe a situation where a seller might incur a loss despite selling an item above its Cost Price.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Margin Terminology"
    },

    "mixture_alligation": {
        title: "Aptitude: Mixture and Alligation",
        video_id: "OKSJDDAyqP0", 
        questions: [
            "Explain the 'Rule of Alligation' and when you should use it over simple averaging.",
            " Describe how the concentration of a mixture changes when a certain volume of it is replaced by pure water.",
            " Use a food preparation example to explain the concept of 'weighted average' in mixtures.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Concentration Analysis"
    },

    "time_work": {
        title: "Aptitude: Time and Work Principles",
        video_id: "KE7tQf9spPg&t=787s", 
        questions: [
            "State the principle of efficiency in Time and Work problems.",
            " Describe how to calculate the remaining work if one person leaves the job prematurely.",
            "Verbally explain the relationship between the time taken and the number of people working on a task.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Efficiency Ratios"
    },

    "time_speed_distance": {
        title: "Aptitude: Time, Speed, and Distance",
        video_id: "jzNxXm5twx4", 
        questions: [
            "State the formula to convert speed from kilometers per hour (km/h) to meters per second (m/s).",
            "Explain the concept of 'relative speed' when two objects are moving towards each other.",
            "Describe the total distance a train must cover to completely pass a tunnel.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Unit Conversion"
    },

    "pipes_cisterns": {
        title: "Aptitude: Pipes and Cisterns",
        video_id: "mBtBD1N7ywQk", 
        questions: [
            " Explain how to mathematically represent a 'leak' or 'waste pipe' in filling a tank.",
            "Describe the difference in approach between two pipes filling a tank and two people doing a job.",
            "If a tap fills a tank in X hours, state the amount of tank filled in one hour.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Negative Work Rate"
    },

    "algebra": {
        title: "Aptitude: Basic Algebra and Equations",
        video_id: "TV9rQm15sWo", 
        questions: [
            "Define the terms 'variable,' 'coefficient,' and 'constant' in the equation 3x + 5 = 11.",
            "Explain how to check your answer after solving a simple linear equation.",
            " Recite the algebraic formula for (a + b)².",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Equation Checks"
    },

    "trigonometry": {
        title: "Aptitude: Trigonometry, Height, and Distance",
        video_id: "uRA-QqVI3ec", 
        questions: [
            "Define the angle of 'elevation' and the angle of 'depression' using simple geometry.",
            " State the primary trigonometric ratios (SOH CAH TOA).",
            " Describe a real-world application where calculating height using trigonometry is essential.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Angle Definitions"
    },

    "geometry": {
        title: "Aptitude: Geometry and Mensuration",
        video_id: "xwqUyOT-cmU", 
        questions: [
            "Define the three main types of triangles based on their sides and angles.",
            " Explain the difference between perimeter and area.",
            " Recite the formula for calculating the area of a circle and the volume of a cylinder.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Shape Formulas"
    },

    "probability": {
        title: "Aptitude: Probability Fundamentals",
        video_id: "6Jrb4wEloCQ", 
        questions: [
            "Define probability and explain the difference between a certain event and an impossible event.",
            " State the formula for the probability of two independent events both occurring.",
            "Describe a scenario in which the 'complement rule' of probability would be useful.",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Event Independence"
    },

    "pnc": {
        title: "Aptitude: Permutation and Combination (PnC)",
        video_id: "ETiRE7N7pEI", 
        questions: [
            " Explain the fundamental difference between a permutation and a combination.",
            " Describe a situation where order *matters* (permutation) and one where order *does not matter* (combination).",
            " State the formula for nCr (Combination) and nPr (Permutation).",
        ],
        tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
        tips_title: "Tips & Tricks: Order Matters"
    },

    "age": {
title: "Aptitude: Age Problems and Equations",
video_id: "tJHl73PBnwY", 
 questions: [
 " Explain how to correctly represent the age of a person 'Y' years ago in an algebraic equation.",
 "Describe how to find the present age of a group of people given their average age in the past.",
" Verbally solve this simple problem: 'If John is twice as old as Jane, and the sum of their ages is 30, how old is Jane?'",
],
tips: "Ready to test your skills? Go to the 'Challenge' section in the navigation bar to practice this lesson's key concepts in a live scenario.",
 tips_title: "Tips & Tricks: Variable Assignment"
 } // <-- This comma/brace was the issue. It's the last object, so no comma needed here.
};

window.COURSE_CONTENT = COURSE_CONTENT;