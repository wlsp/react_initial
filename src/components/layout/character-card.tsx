import {ICharacterCard} from "@/types";
import {FC} from "react";

const CharacterCard: FC<ICharacterCard> = ({character}) => {
    const {name, status, species, type, gender, origin, location, image, episode, url, created} = character;
    console.log(type, origin, episode, url, created)
    const statusClasses = status === "Alive"
        ? 'bg-[#97ce4c] text-black'
        : status === "Dead"
            ? 'bg-[#e89ac7] text-white'
            : 'bg-[#f0e14a] text-black';

    return (
        <div className="max-w-xs bg-white rounded-2xl border-4 border-[#97ce]
        shadow-xl overflow-hidden font-sans text-[#e4a788]">

            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
                <h2 className="text-2xl">
                    {name}
                </h2>

                <span className={`
          inline-block px-3 py-1 rounded-full text-sm font-semibold
          ${statusClasses}`}>
          {status}
        </span>
                <strong className="text-white block">Art:</strong> {species} – {gender}
                <strong className="text-white">Ort:</strong> {location.name}
            </div>
        </div>
    )
}

export default CharacterCard;