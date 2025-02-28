import { Weapon } from "@shared/schema";
import { WeaponCard } from "./WeaponCard";

interface WeaponGridProps {
  weapons: Weapon[];
  selectedWeaponId: number | null;
  onSelectWeapon: (id: number) => void;
}

export function WeaponGrid({ weapons, selectedWeaponId, onSelectWeapon }: WeaponGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weapons.map((weapon) => (
        <WeaponCard
          key={weapon.id}
          weapon={weapon}
          isSelected={weapon.id === selectedWeaponId}
          onClick={() => onSelectWeapon(weapon.id)}
        />
      ))}
    </div>
  );
}
