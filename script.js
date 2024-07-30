$(document).ready(function() {
    const interviewData = [
        {
            company: "PWC",
            experience: "This was my first interview. During the PWC interview, I was very nervous because I had never given an interview before. The interview was really good and easy for me. The interviewer just wanted to communicate with me. I answered all the questions but unfortunately, I was not selected."
        },
        {
            company: "SLB",
            experience: "It was a little bit better for me. The first round was the Technical round, which was based on a DSA question, one problem-solving question, and some theoretical questions related to OOP, OS, and DBMS. I answered all but I don't know why I was not selected for the next round."
        },
        {
            company: "Mantra Softech",
            experience: "In this interview, there were 3 rounds. The first 2 rounds were based on DSA, my projects, and one puzzle. These rounds were easy to moderate for me. In the 3rd round, the interviewer wanted me to write code for a deep learning problem, which I was not familiar with. I explained my current skills and mentioned my willingness to learn and improve in that area."
        },
        {
            company: "Tata Communication",
            experience: "This was my first face-to-face interview. There were 3 rounds. The 1st round was completely based on my project and some project-related questions. The interviewer asked in-depth questions about my project, and I answered most of them satisfactorily. I was selected for the 2nd round, which was also based on my project. In this round, there were 4 interviewers, so I was a bit nervous. They went into great detail, and I wasn't able to answer everything. Hence, I was not selected for the HR round."
        },
        {
            company: "Tata Advanced",
            experience: "In the 1st round of this interview, the interviewer simply asked for my introduction and one DSA question that required printing the sum of two numbers using encapsulation and inheritance. I couldn't write the code, so I was not selected for the next round."
        },
        {
            company: "Publicis Sapient",
            experience: "In this interview, the 1st round was based on my projects and DSA questions. The 2nd round, which was a managerial round but also technical, focused on my projects and one DSA question. I answered all but was not selected."
        },
        {
            company: "Fractal Analytics",
            experience: "In this interview, there were 3 rounds. The 1st round was a technical round based on my project, one SQL question, and one DSA question. The 2nd round, called the Apex round, also focused on my project. I answered all questions satisfactorily, but I was not selected for the next round."
        },
        {
            company: "Itron",
            experience: "In this interview, there were 3 rounds. The 1st round was a technical round based on my projects, 2 DSA questions, and some theoretical questions on OOP, SQL, DBMS, and OS. I answered all the questions, and the interviewer was satisfied. I was selected for the 2nd round, which was also technical and involved my introduction, project, and some JavaScript questions, as I had mentioned JavaScript as a skill on my resume. The interviewer also asked one DSA question about printing the sum of all subarrays whose sum equals K. I couldn't provide the solution in the expected time, which left a bad impression. The interviewer got irritated, and I wasn't selected for the next HR round."
        },
        {
            company: "ServiceNow",
            experience: "In this interview, there were 3 rounds. The 1st round was a technical round. The interviewer asked for my introduction and then gave me a difficult DSA question. I wrote the code and passed the sample test cases, but when the interviewer asked me to run all test cases, it didn't pass. That is why I was not selected for the next round."
        },
        {
            company: "Mewurk Technologies",
            experience: "In this interview, there were 3 rounds. The 1st round was a technical round. The interviewer asked for my introduction and detailed explanations of my projects. Then he gave me two DSA questions: 1) Find the minimum and maximum element from the array, which I coded, and 2) Write the code for Quick Sort, which I didn't know at the time. Hence, I was not selected for the next round."
        }
        // Add more interview experiences as needed
    ];

    function loadInterviews() {
        const interviewsSection = $('#interviews');
        interviewData.forEach(interview => {
            const interviewElement = $(`
                <div class="interview">
                    <h2>${interview.company}</h2>
                    <p>${interview.experience}</p>
                </div>
            `);
            interviewsSection.append(interviewElement);
        });
        loadInterviews();
    }

        // Add more interview experiences as needed

    function loadInterviews() {
        const interviewsSection = $('#interviews');
        interviewData.forEach(interview => {
            const interviewElement = $(`
                <div class="interview">
                    <h2>${interview.company}</h2>
                   
                    <p>${interview.experience}</p>
                </div>
            `);
            interviewsSection.append(interviewElement);
        });
    }

    loadInterviews();
});
