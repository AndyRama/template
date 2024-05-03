import React from "react";
import { allPrivacies } from "contentlayer/generated";
import PrivacyContent from "./PrivacyContent"

export async function generateStaticParams() {
  const privacies = await allPrivacies;

  return privacies.map((privacy) => ({ slug: privacy.slug }))
}

export const generateMetadata = async ({ params }) => {
  const privacy = allPrivacies.find((privacy) => privacy._raw.flattenedPath === 'privacies/' + params.slug)
  return { title: privacy?.title, excerpt: privacy?.excerpt }
}

const page = ({ params }) => {
  const privacy = allPrivacies.find((privacy) => privacy._raw.flattenedPath === 'privacies/' + params.slug)
  return (
    <>
      <PrivacyContent privacy={privacy}/>
    </>
  )
}

export default page;
//ok
