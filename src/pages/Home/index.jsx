import React from "react";
import IconChat from '../../img/icon-chat.webp';
import IconMoney from '../../img/icon-money.webp';
import IconSecurity from '../../img/icon-security.webp';
import FeatureItem from '../../components/FeatureItem';
import Banner from '../../components/Banner';


export default function Home() {
  return (
    <>
        <main>
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem
                    image={IconChat}
                    alt="Chat-Icon"
                    title="You are our #1 priority"
                    content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <FeatureItem
                    image={IconMoney}
                    alt="Money"
                    title="More savings means higher rates"
                    content="The more you save with us, the higher your interest rate will be!" />
                <FeatureItem
                    image={IconSecurity}
                    alt="Security"
                    title="Security you can trust"
                    content="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
    </>
  );
}