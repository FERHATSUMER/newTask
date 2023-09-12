import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
console.log(GET_CHARACTERS.query);

export default function CharactersList() {

  return <div>
  
  </div>; 
}
