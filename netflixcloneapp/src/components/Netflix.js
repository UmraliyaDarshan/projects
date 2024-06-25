import React from "react";
import "./netflix.css";
import Accordion from "react-bootstrap/Accordion";
function Netflix() {
  return (
    <div className="maindiv">
      <header>
        <div className="header">
          <div className="logo">
            <img
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            />
          </div>
          <select>
                <option>English</option>
                <option>हिंदी</option>
           </select>
          <button>Sign In</button>
        </div>
      </header>

      <main>
        <div className="c1">
          <h1 className="animated-text">
            The biggest Indian hits. Ready to watch here from ₹ 149.
          </h1>
        </div>

        <div className="c2">
          <h2 className="animated-text" id="c2h2" style={{ fontSize: "20px" }}>
            {" "}
            Join today. Cancel anytime.
          </h2>
          <h3 className="animated-text" style={{ fontSize: "20px" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>
        <div className="c3">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => e.target.value}
          />
          <button style={{ fontSize: "20px",backgroundColor:"red" }}>Get Started </button>
        </div>
        <div className="c4">
          <div className="msgs">
            <h1>Enjoy on your TV</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="videohero">
            <video autoPlay muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></source>
            </video>
          </div>
        </div>

        <div className="c5">
          <div className="herost">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          </div>
          <div className="msghero">
            <h1>Download your shows to watch offline</h1>
            <h3>
              Save your favourites easily and always have something to watch.
            </h3>
          </div>
        </div>

        <div className="c6">
          <div className="c6hero">
            <h1>Watch everywhere</h1>
            <h3>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h3>
          </div>
          <div className="c6video">
            <video autoPlay muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
            </video>
          </div>
        </div>

        <div className="c7">
          <div className="c7heroimg">
            <img
              src="https://occ-0-3752-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
              alt="image"
            />
          </div>
          <div className="c7writing">
            <h1>Create profiles for kids</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </div>
        </div>

        <div className="c8accordion">
          <p>Frequently Asked Questions</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Netflix ? </Accordion.Header>
              <Accordion.Body>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How much does Netflix cost?</Accordion.Header>
              <Accordion.Body>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Where can I watch?</Accordion.Header>
              <Accordion.Body>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How do I cancel?</Accordion.Header>
              <Accordion.Body>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
              <Accordion.Body>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
              <Accordion.Body>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        <div className="c3">
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => e.target.value} required
          />
          <button style={{ fontSize: "20px" }}>Get Started </button>
          </div>
        </div>
        <footer>
          <div className="C9">
              <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
              <ul>
                <li><a href="https://help.netflix.com/en/node/412">FAQ</a></li>
                <li><a href="https://media.netflix.com/en/">Media Centre</a></li>
                <li><a href="https://devices.netflix.com/en/">Ways to Watch</a></li>
                <li><a href="https://help.netflix.com/en/node/412">Cookies Preferences</a></li>
                <li><a href="#" >Speed Test</a></li>
                <li><a href="https://help.netflix.com/en/">Help Centre</a></li>
                <li><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
                <li><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                <li><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                <li><a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a></li>
                <li><a href="https://jobs.netflix.com">Jobs</a></li>
                <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                <li><a href="https://help.netflix.com/en/contactus">Contact Us</a></li>
                <li><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
              </ul>

              <select>
                <option>English</option>
                <option>हिंदी</option>
              </select>
              <h2>Netflix India</h2>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Netflix;
