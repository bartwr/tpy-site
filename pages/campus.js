import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const FullWidthImage = dynamic(() => import('../components/full-width-image.js'));
const MeetingSpaceBlock = dynamic(() => import('../components/meeting-space-block.js'));

function Campus() {
  return <div className="root">
    <Head>
      <title key="title">Campus | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Campus | Technology Park Ypenburg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Campus"
      smallCapsTitleColor="white"
      title="TPY Campus"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/campus/tpy-campus-header-image.jpg"
      style={{backgroundPosition: '72% 50%'}}
      />

    <IntroText>
      <p>
        The goal of our TPY Campus is to offer facilities and events to support all your needs with easy access and close to Den Haag. Whether you’re a start up, scale up, a mature business or an international company. Come visit our vibrant campus and see it for yourself.
      </p>
      <p>
        TPY is conveniently located between The Hague and Delft, right next to the A4 and close to the Laan van Ypenburg tram- and bus stop. We also have plenty of parking facilities at our park!
      </p>
      <p>
        TPY is located near educational institutions such as TU Delft, InHolland, and The Hague University of Applied Sciences. At TPY, students have the ability to cooperate and co-create with fellow students from different schools, whilst networking with  companies at our Production Center. This way, TPY offers a unique experience for students!
      </p>
      <p>
        Students have worked on various projects in the past at the TPY Scale-up & Innovation Center. We have welcomed teams such as the DragonFly Team by InHolland Delft, and the Formula- and EcoRunner Team by TU Delft. Our Production Center offers plenty of space and all the tools needed to help students achieve their best and most innovative projects possible. Interested in learning more about the past projects that were hosted at TPY? This <a href="https://www.technologyparkypenburg.nl/happening/student-run-projects-in-tpy" rel="external" target="_blank">article</a> has got you covered!
      </p>
    </IntroText>

    <div>
      <TextAndImage
        category=""
        image="/static/misc/workspace_three_desks_charles__07042021_TPY SPACES_Hani_HPM-07011.jpg"
        imagePosition="right"
        title="TPY Community Center"
        text="<p>Our TPY Community Center provides a great environment for meeting peers as well as facilities from flex desks to offices and meeting rooms and a conference area and conferencing facilities.</p><p>The heart of our Community Center is where we, TPY companies, Friends of TPY, Start Ups and Scale Ups, come together. To co-create, inspire and brainstorm.</p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="/static/misc/making_space_bird_eye_view__07042021_TPY SPACES_Hani_HPM-07170.jpg"
        imagePosition="left"
        title="TPY Prototyping Center"
        text="<p>Our Prototyping Center is a maker space to try out your ideas. It provides access to further High-Tech manufacturing, testing and inspection tooling. We utilise in-house professional expertise, which can help you with your ideas or brainstorms.</p><p>Our tremendous know-how focusses on Materials and Hybrid Structures design and industrialisation of Metalics, Thermoplastics, Plastics and Composites. We strive to have the highest levels in Standards for critical high-end markets like Aerospace, Defence, Space, Naval, Offshore and Medical.</p><p>In our Prototyping Center, we welcome Businesses and Start Ups to  our cleanrooms, tooling where we also provide access to testing & manufacturing resources, such as an autoclave and a test facility for digital manufacturing applications.</p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="/static/misc/couch_with_two_men_meeting__07042021_TPY SPACES_Hani_HPM-06992.jpg"
        imagePosition="right"
        title="TPY Scale-up & Innovation Center"
        text="<p>Ready to enhance your business development and scale-up? Our Innovation Center is the ideal next phase location to fulfil the following steps in your business. Set up to foster a competitive and collaborative environment for mature Start Ups and Scale Ups. We pride ourselves with our in-house experts, who are eager to assist you and have a strong knowledge in High-Tech manufacturing. </p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="/static/pages/campus/event-picture-1.jpg"
        imagePosition="left"
        title="Meeting & Event Spaces"
        text="<p>At TPY, we have several fully equipped meeting spaces in different sizes, that can host from 4 to 12 people. Something bigger in mind? We also offer event spaces which can host up to 200 people to attend.</p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="/static/pages/campus/event-picture-2.jpg"
        imagePosition="right"
        title=""
        text="<p>Let us know your needs and we would be delighted to help make your event a success, you can contact us via <a href='mailto:info@technologyparkypenburg.nl'>info@technologyparkypenburg.nl</a></p>"
        />
    </div>

    <div>
      <Title style={{
        padding: '45px 0px',
        textAlign: 'center'
      }}>
        Rent a meeting space
      </Title>
      <div className="pricing-blocks-wrapper meeting-spaces">
        <MeetingSpaceBlock
          key={'meetingSpace1'}
          variant="1"
        />
        <MeetingSpaceBlock
          key={'meetingSpace2'}
          variant="2"
        />
        <MeetingSpaceBlock
          key={'meetingSpace3'}
          variant="3"
        />
        <MeetingSpaceBlock
          key={'meetingSpace3'}
          variant="4"
        />
        <MeetingSpaceBlock
          key={'meetingSpace3'}
          variant="5"
        />
      </div>
    </div>

    <div>
      <FooterBanner
        title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
        buttonText="book a tour"
        buttonLink="/contact"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
      <style jsx>{`
      .pricing-blocks-wrapper {
        text-align: center;
      }
      .pricing-blocks-wrapper.meeting-spaces {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 1160px;
      }
      @media(max-width: 1340px) {
        .pricing-blocks-wrapper {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto;
        }
      }
    `}</style>    
  </div>
}

export default Campus;
