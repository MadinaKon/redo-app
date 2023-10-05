import React, { Fragment } from "react";
import { volumes } from "../../lib/data.js";
import Link from "next/link.js";
import { useRouter } from "next/router.js";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug ", slug);
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  console.log("currentVolume ", currentVolume);

  return (
    <>
      <div>
        {" "}
        <Link href="/volumes">← All Volumes</Link>
        <ul>
          <li>{currentVolume.title}</li>
          <li>{currentVolume.description}</li>
        </ul>
      </div>
    </>
  );
}
