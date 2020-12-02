import React from 'react';
import './Privacy.css';
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner";

const Privacy = () => {
  return (
    <>
      <Banner/>
      <Header/>
      <div className="wrapper_policy">
        <h1 className="heading_large">Privacy and Policy</h1>
        <p>At OURNAME, accessible from www.OURNAME.no, one of our main priorities is the privacy of our visitors and users. This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.
        <br/>
        If you have additional questions or require more information about our privacy policy, do not hesitate to contact us.</p>

        <p>Topics:</p>
        <ul>
          <li>What data do we collect</li>
          <li>How do we collect your data</li>
          <li>How will we use your data</li>
          <li>How do we store your data</li>
          <li>What are your data protection rights</li>
          <li>What are cookies</li>
          <li>What type of cookies do we use</li>
          <li>How to manage your cookies</li>
          <li>How to contact us</li>
        </ul>

        <h5 className="heading_small_pp">What data do we collect?</h5>
        <p>Our company collects the following data:</p>
        <ul>
          <li>Personal identification information (name, email address, etc.)</li>
          <li>Information about your working place, status of COVID-19 test etc.</li>
        </ul>

        <h5 className="heading_small_pp">How do we collect your data?</h5>
        <p>You directly provide us with most of the data we collect. We collect data when you:</p>
        <ul>
          <li>Sign up to our sevice</li>
          <li>Create your profile on CareerToGo</li>
          <li>Use or view our website through your browser’s cookies.</li>
        </ul>

        <h5 className="heading_small_pp">How will we use your data?</h5>
        <p>Our app collects your data so that we can:</p>
        <ul>
          <li>Create your professional profile based on your personal information</li>
          <li>Provide you with information about COVID alerts</li>
        </ul>

        <h5 className="heading_small_pp">How do we store your data?</h5>
        <p>Our app securely stores your data at our IT hosting provider, and IT services providers (including tracking software suppliers).</p>
        <p>We will keep your personal data for 5 years or as long as needed in order to conduct statistics and historical reviews and to administer your profile, unless is required under applicable law to delete it or keep your personal data for a longer period.</p>

        <h5 className="heading_small_pp">What are your data protection rights?</h5>
        <p>We would like to make sure you are fully aware of all your data protection rights. Every user is entitled to the following:</p>
        <ul>
          <li>The right to access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to object to processing</li>
          <li>The right to data portability</li>
        </ul>
        <p className="paragraph_small">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h5 className="heading_small_pp">What are cookies?</h5>
        <p>Our app uses cookies in a variety of ways to improve your experience on our website, including:</p>
        <ul>
          <li>Keeping you signed in</li>
          <li>Understanding how you use our website.</li>
        </ul>

        <h5 className="heading_small_pp">What types of cookies do we use?</h5>
        <p>Our app uses cookies:</p>
        <p>Functionality – We uses these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and the location you are in. A mix of first-party and third-party cookies is used,
        </p>

        <h5 className="heading_small_pp">How to manage cookies?</h5>
        <p>You cannot set your browser to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</p>

        <h5 className="heading_small_pp">How to contact us</h5>
        <p>If you have any questions about Our app privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</p>

        <p>NAME OF OUR APP</p>
        <p>ADDRESS</p>
        <p>EMAIL</p>
      </div>
    </>
  );
};

export default Privacy;
