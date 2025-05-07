import {NavLink, useOutletContext} from "react-router-dom";
import CharacterCard from "@/components/layout/character-card";
import {Suspense} from "react";
import LayoutContainer from "@/components/ui/layout-container";
import {CharacterProps} from "@/types";

interface CharactersContext {
    characters: CharacterProps[];
}

const CharactersPage = () => {
    const {characters} = useOutletContext<CharactersContext>();
  return (
      <LayoutContainer>
          <NavLink to={"rick-and-morty"}>
             ← Back
          </NavLink>
          <Suspense fallback={"Loading..."}>
              <div className="grid grid-cols-4 gap-4 mt-8">
                  {characters.map((character) => (
                      <NavLink
                          key={character.id}
                          to={character.id.toString()}>
                          <CharacterCard
                              character={character}
                          />
                      </NavLink>
                  ))}
              </div>
          </Suspense>
      </LayoutContainer>
  );
};

export default CharactersPage;