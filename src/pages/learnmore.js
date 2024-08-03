import React, { useState } from 'react';

const LearnMore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="learn-more-links">
        <h1>Learn More about Canadian Resistance and Recognition</h1>

      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(7)}>
          Overview of the Calder Case
        </button>
        <div className={`collapsible-content ${openIndex === 7 ? 'open' : ''}`}>
          <p>The Calder Case, officially Calder v. British Columbia (Attorney General), was a landmark Supreme Court of Canada decision in 1973. It was the first time the Court recognized the existence of Aboriginal title to land based on traditional use and occupancy.</p>
          <a href="https://www.thecanadianencyclopedia.ca/en/article/calder-case" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(3)}>
          The Komagata Maru Incident
        </button>
        <div className={`collapsible-content ${openIndex === 3 ? 'open' : ''}`}>
          <p>The Komagata Maru incident of 1914 involved a ship carrying 376 passengers of Indian origin who were denied entry into Canada under the Continuous Journey Regulation. This event highlighted the racial discrimination present in Canadian immigration policies of the time.</p>
          <a href="https://www.thecanadianencyclopedia.ca/en/article/komagata-maru" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>

      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(0)}>
          History of Japanese Canadian Internment
        </button>
        <div className={`collapsible-content ${openIndex === 0 ? 'open' : ''}`}>
          <p>During World War II, approximately 22,000 Japanese Canadians were interned by the Canadian government. This action was taken under the War Measures Act and led to significant loss and hardship for those affected.</p>
          <a href="https://www.thecanadianencyclopedia.ca/en/article/japanese-internment-banished-and-beyond-tears-feature" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
      {/* <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(1)}>
          Conditions and Impact
        </button>
        <div className={`collapsible-content ${openIndex === 1 ? 'open' : ''}`}>
          <p>The internment camps for Japanese Canadians were characterized by harsh conditions including inadequate housing and limited resources. The internment had lasting impacts on the community, including loss of property and disruption of social structures.</p>
          <a href="https://www.theglobeandmail.com/canada/article-japanese-canadian-internment-legacy/" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div> */}
     
      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(2)}>
          The 94 Calls to Action
        </button>
        <div className={`collapsible-content ${openIndex === 2 ? 'open' : ''}`}>
          <p>The 94 Calls to Action issued by the Truth and Reconciliation Commission aim to address the legacy of residential schools and promote reconciliation between Indigenous and non-Indigenous Canadians.</p>
          <a href="https://www.ictinc.ca/blog/truth-and-reconciliation-commission-calls-to-action" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(4)}>
          Impact on Public and Institutional Attitudes
        </button>
        <div className={`collapsible-content ${openIndex === 4 ? 'open' : ''}`}>
          <p>The findings of the Truth and Reconciliation Commission have influenced public and institutional attitudes by increasing awareness and prompting efforts towards reconciliation, including apologies and support programs for survivors.</p>
          <a href="https://lukesplace.ca/wp-content/uploads/2020/01/Truth-and-Reconcilation-Commissions-Recommendations-on-Violence-Against-Women.pdf" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(5)}>
          History of the Sixties Scoop
        </button>
        <div className={`collapsible-content ${openIndex === 5 ? 'open' : ''}`}>
          <p>The Sixties Scoop was a period during which Indigenous children were taken from their families and placed in foster homes or adopted by non-Indigenous families. This practice led to a significant loss of cultural identity and long-term trauma.</p>
          <a href="https://indigenousfoundations.arts.ubc.ca/sixties_scoop/" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
      <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(6)}>
          Stories from Survivors of the Sixties Scoop
        </button>
        <div className={`collapsible-content ${openIndex === 6 ? 'open' : ''}`}>
          <p>Survivor of the Sixties Scoop share their personal stories and experiences, highlighting the impact of this practice on their lives.</p>
          <a href="https://www.photographerswithoutborders.org/online-magazine/2022/6/22/60s-scoop-survivors-continue-to-heal" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    </div>
    <div className="collapsible">
        <button className="collapsible-btn" onClick={() => handleToggle(9)}>
          Study Scams from Punjab to Canada
        </button>
        <div className={`collapsible-content ${openIndex === 9 ? 'open' : ''}`}>
          <p>Many students from Punjab were lured to Canada with promises of easy admissions and visas. However, upon arrival, they faced high tuition fees and were often forced into menial jobs, leading to exploitation and significant financial difficulties. This situation has led to widespread concern about fraudulent practices and the need for better regulation and support for international students.</p>
          <a href="https://studyinternational.com/news/punjab-to-canada-study-scams/" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    <div className="collapsible">
  <button className="collapsible-btn" onClick={() => handleToggle(8)}>
    Residential School History
  </button>
  <div className={`collapsible-content ${openIndex === 8 ? 'open' : ''}`}>
    <p>Learn about the history of residential schools in Canada, including their impact on Indigenous communities and the ongoing journey towards reconciliation.</p>
    <a href="https://nctr.ca/education/teaching-resources/residential-school-history/" target="_blank" rel="noopener noreferrer">Read More</a>
  </div>
</div>

    </div>
  );
};

export default LearnMore;
