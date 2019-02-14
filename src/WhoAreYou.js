import React, { Fragment } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Text from './Text';
import Link from './Link';

const HiThere = styled(Text)`
  position: fixed;
  top: 3%;
  left: 5%;
  text-align: left;
  width: 90%;
`;

const Description = styled.div`
  text-align: left;
  margin-top: 20px;
  line-height: 28px;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    line-height: 14px;
  }
`;

const GoBack = styled.div`
  text-align: left;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

const UnderlinedLink = styled(Link)`
  text-decoration: underline;
`;

const Paragraph = styled.p`
  margin: 8px 0;
  display: block;
`;

export default ({ nextCombination, currentCombination }) => (
  <Fragment>
    <HiThere>
      hi there
      <Description>
        <Paragraph>
          i'm pepijn, i'm a software engineer and i listen to edgy music
        </Paragraph>
        <Paragraph>
          i live in berlin, i speak dutch, german and english fluently
        </Paragraph>
        <Paragraph>
          currently i work mostly with react and modern js back-ends
        </Paragraph>
        <Paragraph>
          besides that i have experience with a whole scala of modern (mostly
          web) technologies
        </Paragraph>
        <Paragraph>
          sometimes i write about technical topics{' '}
          <UnderlinedLink
            target="_blank"
            title="my blog"
            href="https://medium.com/@pepijns"
          >
            over here
          </UnderlinedLink>
        </Paragraph>
        <Paragraph>
          you can find my some of my code{' '}
          <UnderlinedLink
            target="_blank"
            title="my code"
            href="https://github.com/PepijnSenders"
          >
            over here
          </UnderlinedLink>{' '}
          and the details of my professional career{' '}
          <UnderlinedLink
            target="_blank"
            title="my career"
            href="https://www.linkedin.com/in/pepijn-senders-a743a152/"
          >
            over here
          </UnderlinedLink>
        </Paragraph>
        <Paragraph>
          i help companies scaling their front-ends and i partake in as many
          creative projects as possible
        </Paragraph>
        <Paragraph>
          like running{' '}
          <UnderlinedLink
            target="_blank"
            title="my labels music"
            href="https://soundcloud.com/eleveberlin"
          >
            this music label
          </UnderlinedLink>{' '}
          with friends,{' '}
          <UnderlinedLink
            target="_blank"
            title="my music"
            href="https://soundcloud.com/ohne-ziel"
          >
            this music persona
          </UnderlinedLink>{' '}
          and building a{' '}
          <UnderlinedLink
            target="_blank"
            title="a bot i built"
            href="https://www.facebook.com/unsoundfestival/videos/336655903569686/"
          >
            bot network
          </UnderlinedLink>{' '}
          for my favourite festival
        </Paragraph>
        <Paragraph>
          don't hesitate to{' '}
          <UnderlinedLink title="my contact info" href="mailto:hi@pep.pizza">
            contact me
          </UnderlinedLink>{' '}
          when you think i could be of any service to you or your project
        </Paragraph>
      </Description>
      <GoBack>
        <UnderlinedLink href="/">go back</UnderlinedLink>
      </GoBack>
    </HiThere>

    <Footer currentCombination={currentCombination} />
  </Fragment>
);
