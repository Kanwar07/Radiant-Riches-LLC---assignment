import React from "react";
import Heading from "../sections/Heading";
import SubHeading from "../sections/SubHeading";
import BreadCrumbs from "../sections/BreadCrumbs";
import DetailsList from "../sections/DetailsList";
import ExtraDetails from "../sections/ExtraDetails";
import MoreOptions from "../sections/MoreOptions";
import FooterMenu from "../sections/FooterMenu";

function WebsitePage() {
  return (
    <>
      <Heading />
      <SubHeading />
      <BreadCrumbs />
      <DetailsList />
      <ExtraDetails />
      <MoreOptions />
      <FooterMenu />
    </>
  );
}

export default WebsitePage;
