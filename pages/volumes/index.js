import Link from "next/link";
import React from "react";
import { volumes } from "../../lib/data";

export default function VolumesList() {
  console.log("VOLUMES ", volumes);
  return (
    <ul>
      {volumes.map((volume) => (
        <li key={volume.slug}>
          <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
        </li>
      ))}
    </ul>
  );
}
