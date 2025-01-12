import {Container} from "@/components/Container";
import {Hero} from "@/components/Hero";
import {SectionTitle} from "@/components/SectionTitle";
import {Benefits} from "@/components/Benefits";
import {Video} from "@/components/Video";
import {Testimonials} from "@/components/Testimonials";
import {Faq} from "@/components/Faq";
import {Cta} from "@/components/Cta";

import {benefitOne, benefitTwo} from "@/components/data";

export default function Home() {
    return (
        <Container>
            <Hero/>
            <SectionTitle
                preTitle="EMI Shield Benefits"
                title=" Why should you use our app"
            >
                Streamline your EMI collections with our comprehensive device management solution. Protect your business
                interests while maintaining professional relationships with customers.
            </SectionTitle>

            <Benefits data={benefitOne}/>
            <Benefits imgPos="right" data={benefitTwo}/>


            {/*<SectionTitle*/}
            {/*    preTitle="Watch a video"*/}
            {/*    title="Learn how to use our app"*/}
            {/*>*/}
            {/*    Your comprehensive EMI payment management solution. Let&apos; walk through how to get*/}
            {/*    your business started in just a few simple steps.*/}
            {/*</SectionTitle>*/}


            {/*<Video videoId="fZ0D0cnR88E"/>*/}

            {/*<SectionTitle*/}
            {/*    preTitle="Testimonials"*/}
            {/*    title="Here's what our customers said"*/}
            {/*>*/}
            {/*    Testimonials is a great way to increase the brand trust and awareness.*/}
            {/*    Use this section to highlight your popular customers.*/}
            {/*</SectionTitle>*/}

            {/*<Testimonials/>*/}

            {/*<SectionTitle preTitle="FAQ" title="Frequently Asked Questions">*/}
            {/*    Answer your customers possible questions here, it will increase the*/}
            {/*    conversion rate as well as support or chat requests.*/}
            {/*</SectionTitle>*/}

            {/*<Faq/>*/}
            <Cta/>
        </Container>
    );
}
