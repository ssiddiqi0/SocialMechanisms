import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Project: The 4 Social Mechanisms</h1>
      <p>
      As a final project for my Education 240 class, I decided to create an informative site that addresses the importance of knowledge and recognition, focusing on Canadian history through the lens of four social mechanisms: Recognition, Authority, Resistance, and Reproduction. Understanding these social mechanisms is essential for forming and expressing educated opinions about historical and contemporary issues. 
      </p>
      <p>The purpose of this project is to create an interactive learning tool that explores these social mechanisms through the lens of Canadian history. By emphasizing Resistance and Recognition, I aim to make learning engaging and accessible for students and young adults, promoting a deeper understanding of these critical concepts.

</p>
     
      <div className="mechanism">
        <h3>Resistance</h3>
        <p>Resistance involves challenging and opposing elements within the education system that do not promote human success. This can include promoting open discussions, questioning detrimental practices, and advocating for positive change. Historical and contemporary examples of resistance highlight its significance in shaping educational policies and practices.</p>
      </div>

      <div className="mechanism">
        <h3>Recognition</h3>
        <p>Recognition in political theory involves acknowledging and valuing the diverse practices and identities of individuals. In education, this can be seen through land acknowledgements, multicultural events, and the inclusion of diverse languages and cultures. Recognizing differences positively fosters an inclusive and supportive environment for all students.</p>
      </div>

      <div className="mechanism">
        <h3>Authority</h3>
        <p>Authority in education refers to the power dynamics between teachers and students. It can be seen in the enforcement of rules, control of student behavior, and grading. Distinguishing between authoritativeness (credibility and expertise) and authoritarianism (control and obedience) is crucial for understanding the impact of authority in educational settings.</p>
      </div>

      <div className="mechanism">

        <h3>Reproduction</h3>
        <p>Reproduction suggests that schools tend to reproduce what is happening in society at large. Examples include language development among youth, age-based differentiation, workforce preparation, gender norms, and societal stereotypes. Understanding this mechanism helps us see how education systems mirror societal structures and values.</p>
      </div>


    </div>
  );
};

export default About;
