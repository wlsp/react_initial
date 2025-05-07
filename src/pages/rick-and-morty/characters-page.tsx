import {NavLink, Outlet} from "react-router-dom";
import CharacterCard from "@/components/layout/character-card";
import {Suspense} from "react";
import {rickAndMortyData} from "../../../data/rick-and-morty";
import LayoutContainer from "@/components/ui/layout-container";

const CharactersPage = () => {
const characters = rickAndMortyData.results;
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
          <Outlet />
      </LayoutContainer>
  );
};

export default CharactersPage;