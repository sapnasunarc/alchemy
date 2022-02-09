import React from "react";
import featureImage from "../../assets/images/product-III-preview-prefooter (1).svg";
import BannerImage from "../../assets/images/supernode-hero.png";

import {
  SupernodeData,
  SupernodeContent,
  instantOn,
  FirstTestimonial,
  SecondTestimonial,
  superNode,
  banner,
  leading,
} from "./SupernodeData";
import { Box, Container, Typography } from "@mui/material";
import "./SuperNode.css";
import styled from "styled-components";
import { FeatureBanner } from "../../components/sections/Banner/FeatureBanner";
import { SuperNode } from "../../components/sections/SuperNode/SectionSuperNode";
import { Testimonials } from "../../components/sections/Testimonials/Testimonials";
import { SectionFeatureBox } from "../../components/sections/FeatureBox/SectionFeatureBox";
import { FeatureSaveMoney } from "../../components/sections/SaveMoney/FeatureSaveMoney";
import { FeatureSuperNode } from "../../components/sections/SuperNode/FeatureSuperNode";
import { FeatureBox } from "../../components/sections/FeatureBox/FeatureBox";
import { Image } from "../../components/elements/image";
import { FeatureBlockChain } from "../../components/sections/BlockChain/FeatureBlockChain";

export const Supernode = () => {
  const LeadingWrapper = styled.div`
    text-align: center;
  `;
  return (
    <div className="supernodePage">
      <FeatureBanner banner={BannerImage}>
        <SuperNode data={banner} />
      </FeatureBanner>
      <FeatureBlockChain />
      <Box className="bgColor">
        <LeadingWrapper className="leadingContent">
          <SuperNode data={leading} />
        </LeadingWrapper>
        {SupernodeData.map((section, i) => (
          <FeatureBox key={i} boxImage={section.boxImage}>
            <SectionFeatureBox data={section} />
          </FeatureBox>
        ))}
        <Testimonials data={FirstTestimonial} />
        {SupernodeContent.map((section, i) => (
          <FeatureBox key={i} boxImage={section.boxImage}>
            <SectionFeatureBox data={section} />
          </FeatureBox>
        ))}
        <Testimonials data={SecondTestimonial} />
        <FeatureBox boxImage={instantOn.boxImage}>
          <SectionFeatureBox data={instantOn} />
        </FeatureBox>
        <section className="diagramWrapper">
          <Container>
            <Typography variant="h2" component="h2">
              Supernode infrastructure diagram
            </Typography>
            <Image src={require("../../assets/images/diagram.png")} />
          </Container>
        </section>
      </Box>
      <FeatureSaveMoney />
      <FeatureSuperNode image={featureImage}>
        <SuperNode data={superNode} />
      </FeatureSuperNode>
    </div>
  );
};
